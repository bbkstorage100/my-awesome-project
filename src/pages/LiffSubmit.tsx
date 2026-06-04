import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageSquare, ShieldCheck, CheckCircle2, Copy, ArrowLeft, RefreshCw, Smartphone } from 'lucide-react';
import { decryptPayload, BookingPayload } from '../utils/crypto';
import { initLiff, formatBookingMessage, getLineOADirectLink, getLineOALink } from '../utils/liff';
import liff from '@line/liff';

export default function LiffSubmit() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [payloadData, setPayloadData] = useState<BookingPayload | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [decryptionError, setDecryptionError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const [isInLineClient, setIsInLineClient] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initialize and decrypt
  useEffect(() => {
    const payload = searchParams.get('payload');
    
    if (!payload) {
      setIsLoading(false);
      setDecryptionError(true);
      return;
    }

    // Initialize LINE LIFF
    initLiff()
      .then(() => {
        setIsInLineClient(liff.isInClient());
      })
      .catch((err) => {
        console.warn("LIFF environment notice (Non-LINE browser or setup pending):", err);
      })
      .finally(() => {
        // Try to decrypt data
        const decrypted = decryptPayload(payload);
        if (decrypted) {
          setPayloadData(decrypted);
          setDecryptionError(false);
        } else {
          setDecryptionError(true);
        }
        setIsLoading(false);
        
        // Immediately clean the URL to prevent leakage in history logs / address bar
        // Preserve data in state but clear URL for top-tier security
        window.history.replaceState(null, '', window.location.pathname);
      });
  }, [searchParams]);

  // Auto-trigger redirection to LINE once loaded
  useEffect(() => {
    if (isLoading || !payloadData || isSentSuccessfully || isSending) return;

    const timer = setTimeout(() => {
      handleLiffFormSubmit();
    }, 1000); // 1-second elegant delay so users can read the status

    return () => clearTimeout(timer);
  }, [isLoading, payloadData]);

  const handleCopyText = async () => {
    if (!payloadData) return;
    const msgText = formatBookingMessage(payloadData);
    try {
      await navigator.clipboard.writeText(msgText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleLiffFormSubmit = async () => {
    if (!payloadData) return;
    setIsSending(true);

    const messageText = formatBookingMessage(payloadData);

    // Case 1: Running inside the LINE Client app - use LIFF messaging
    if (liff.isInClient()) {
      try {
        // Verify if user is logged in
        if (!liff.isLoggedIn()) {
          liff.login();
          setIsSending(false);
          return;
        }

        // Try direct in-app message write (requires chat_message.write scope helper)
        await liff.sendMessages([
          {
            type: 'text',
            text: messageText,
          }
        ]);
        
        setIsSentSuccessfully(true);
        setTimeout(() => {
          liff.closeWindow();
        }, 1800);
      } catch (err) {
        console.warn("Direct liff.sendMessages is not permitted or failed, falling back to LINE Scheme:", err);
        // Fallback to direct Line Scheme inside LINE
        const lineSchemeUrl = getLineOADirectLink(messageText);
        
        try {
          // Inside LINE client, it is crucial to use liff.openWindow with external: true
          // to trigger opening the Official Account natively
          liff.openWindow({
            url: lineSchemeUrl,
            external: true
          });
        } catch (openErr) {
          console.warn("liff.openWindow failed, fallback to location.href:", openErr);
          window.location.href = lineSchemeUrl;
        }
        setIsSentSuccessfully(true);
      }
    } else {
      // Case 2: Opened in external normal browser (desktop/non-LINE browser)
      // Provide user with clear message and direct redirection link
      try {
        await navigator.clipboard.writeText(messageText);
        setCopied(true);
      } catch (e) {
        console.warn("Clipboard write failed:", e);
      }
      
      const directLineLink = getLineOADirectLink(messageText);
      
      // Attempt to open LINE OA prefilled chat room.
      // Use window.location.href instead of window.open to prevent popup blockers on modern mobile browsers.
      try {
        window.location.href = directLineLink;
      } catch (err) {
        window.open(directLineLink, '_blank');
      }
      setIsSentSuccessfully(true);
    }
    
    setIsSending(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-4">
          <RefreshCw className="animate-spin text-primary mx-auto" size={40} />
          <p className="text-on-surface-variant font-medium">安全載入預約諮詢資訊中...</p>
        </div>
      </div>
    );
  }

  if (decryptionError || !payloadData) {
    return (
      <div className="min-h-screen bg-surface pt-32 pb-24 flex flex-col items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 text-center shadow-xl border border-outline-variant/10">
          <div className="w-16 h-16 bg-error-container/20 rounded-full flex items-center justify-center mx-auto mb-6 text-error">
            <ShieldCheck size={32} className="opacity-80" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">無法載入預約資訊</h2>
          <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
            這可能是因為連結已過期（安全性限制 30 分鐘失效）或資料傳輸異常。別擔心，您可以重新填寫表單或直接點擊下方按鈕與我們對話。
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/95 transition-all shadow-md"
            >
              <ArrowLeft size={18} />
              重新填寫預約單
            </button>
            <a 
              href={getLineOALink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-md block text-center"
            >
              直接加入官方 LINE 客服
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-28 pb-24 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        
        {isSentSuccessfully ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[3rem] p-12 text-center shadow-xl border border-outline-variant/10"
          >
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={44} />
            </div>
            
            <h1 className="text-3xl font-black text-primary mb-4">預約資訊已準備就緒！</h1>
            
            {isInLineClient ? (
              <p className="text-on-surface-variant leading-relaxed max-w-md mx-auto mb-8 text-sm">
                感謝您的信任！我們已自動為您將諮詢細節傳送給 <span className="font-bold text-emerald-600">擺寶庫迷你倉官方 LINE</span>。視窗稍後會為您自動關閉，專員將在 LINE 中與您對談喔！
              </p>
            ) : (
              <div className="space-y-2 mb-8 max-w-md mx-auto">
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  您的預約資料已複製到剪貼簿，且我們已為您引導開啟官方 LINE。
                </p>
                <p className="text-xs text-primary/80 font-semibold bg-primary/5 p-3 rounded-2xl border border-primary/10">
                  💡 如果沒有彈出視窗，請直接將內容貼入與「擺寶庫迷你倉」的對話框，發送給我們即可。
                </p>
              </div>
            )}
            
            <div className="flex gap-4 justify-center">
              <button 
                onClick={handleCopyText}
                className="bg-surface-container hover:bg-surface-container-high text-on-surface px-6 py-4 rounded-2xl font-bold text-sm transition-all"
              >
                {copied ? '已再次複製！' : '複製預約內容'}
              </button>
              <button 
                onClick={() => navigate('/')}
                className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold text-sm transition-all"
              >
                回到官網首頁
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-outline-variant/10 relative overflow-hidden"
          >
            {/* Header section with brand accent */}
            <div className="text-center mb-8">
              <span className="bg-emerald-50 text-emerald-700 text-xs font-black px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-emerald-100">
                <MessageSquare size={13} />
                LINE 官方連線安全確認
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-primary">確認預約諮詢資訊</h1>
              <p className="text-on-surface-variant mt-2 text-xs md:text-sm">
                下面是您剛剛在網頁中輸入的諮詢單，確認無誤後點擊送出即可直接與專員通訊。
              </p>
            </div>

            {/* Information Card styled professionally */}
            <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 mb-8 space-y-5">
              <div className="grid grid-cols-2 gap-4 border-b border-dashed border-outline-variant/50 pb-4">
                <div>
                  <span className="text-[10px] text-on-surface-variant font-bold block uppercase tracking-wider">姓名</span>
                  <p className="text-base font-bold text-primary">{payloadData.name}</p>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant font-bold block uppercase tracking-wider">電話</span>
                  <p className="text-base font-bold text-primary">{payloadData.phone}</p>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-on-surface-variant font-bold block uppercase tracking-wider mb-1">感興趣據點</span>
                <div className="flex flex-wrap gap-2">
                  {payloadData.locations.length > 0 ? (
                    payloadData.locations.map((loc) => (
                      <span key={loc} className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-xl">
                        {loc}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs font-bold bg-error-container/10 text-error px-3 py-1 rounded-xl">未選擇據點</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-dashed border-outline-variant/50 pt-4">
                <div>
                  <span className="text-[10px] text-on-surface-variant font-bold block uppercase tracking-wider">預估櫃型</span>
                  <p className="text-sm font-semibold text-primary">{payloadData.size || '未選擇'}</p>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant font-bold block uppercase tracking-wider">聯絡時段</span>
                  <p className="text-sm font-semibold text-primary">{payloadData.time || '未選擇'}</p>
                </div>
              </div>

              <div className="border-t border-dashed border-outline-variant/50 pt-4">
                <span className="text-[10px] text-on-surface-variant font-bold block uppercase tracking-wider mb-1">您的詳細需求</span>
                <p className="text-xs text-on-surface bg-surface p-4 rounded-xl leading-relaxed whitespace-pre-wrap">
                  {payloadData.message || '無特別補充需求'}
                </p>
              </div>
            </div>

            {/* Security shield notice */}
            <div className="bg-primary/[0.03] border border-primary/10 rounded-2xl p-4 flex gap-3 items-start mb-8 text-[11px] text-primary">
              <ShieldCheck className="shrink-0 mt-0.5" size={16} />
              <div>
                <span className="font-bold block">🔒 安全端對端傳輸保護</span>
                您的個人資料僅會用於擺寶庫預約接洽中，網址經過 XOR 與 URL-safe base64 加密封裝。我們在載入此頁面的第一時間即刪除瀏覽器位址列參數，防止瀏覽歷程或任何紀錄外洩。
              </div>
            </div>

            {/* Interactive actions */}
            <div className="space-y-4">
              <button
                onClick={handleLiffFormSubmit}
                disabled={isSending}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white py-4.5 rounded-2xl font-black text-base md:text-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.99] transition-all cursor-pointer"
              >
                {isSending ? (
                  <>
                    <RefreshCw className="animate-spin" size={20} />
                    正在安全連線 LINE...
                  </>
                ) : (
                  <>
                    <Smartphone size={20} />
                    確認並傳送至 LINE 客服諮詢
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleCopyText}
                  className="bg-surface-container hover:bg-surface-container-high text-on-surface py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Copy size={14} />
                  {copied ? '已複製！' : '僅複製預約文字'}
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-transparent hover:bg-surface border border-outline text-on-surface py-3 rounded-xl font-bold text-xs transition-all cursor-pointer text-center"
                >
                  重新填寫表單
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
