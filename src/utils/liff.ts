import liff from '@line/liff';

export const LIFF_ID = '2010297592-5RnThVOi';
export const LINE_OFFICIAL_ID = '@anb6544c';

let liffInitPromise: Promise<void> | null = null;

/**
 * Initialize LIFF SDK safely. Ensures it is only initialized once.
 */
export function initLiff(): Promise<void> {
  if (liffInitPromise) {
    return liffInitPromise;
  }

  liffInitPromise = liff.init({
    liffId: LIFF_ID,
    withLoginOnExternalBrowser: false, // Don't block external browser with mandatory login unless required
  })
  .then(() => {
    console.log('LINE LIFF initialized successfully');
  })
  .catch((err) => {
    console.error('LINE LIFF initialization failed:', err);
    throw err;
  });

  return liffInitPromise;
}

/**
 * Format booking details into a highly readable, structured message for LINE chat
 */
export function formatBookingMessage(data: {
  name: string;
  phone: string;
  locations: string[];
  size: string;
  time: string;
  message: string;
}): string {
  const lineStr = "=========================";
  return `擺寶庫迷你倉 預約諮詢單
${lineStr}
👋 姓名：${data.name}
📞 電話：${data.phone}
📍 感興趣據點：${data.locations.length > 0 ? data.locations.join('、') : '未選擇'}
📦 櫃型尺寸：${data.size || '未選擇'}
⏰ 方便聯繫時段：${data.time || '未選擇'}

💬 詳細需求：
${data.message || '無'}
${lineStr}
* 感謝您的預約，我們將盡速為您處理！`.trim();
}

/**
 * Get direct LINE OA link with pre-filled message
 * This uses the official schema: https://line.me/R/oaMessage/{LINE_ID}/?{Text}
 * It will open LINE OA and fill their keyboard text-box with the data automatically.
 */
export function getLineOADirectLink(messageText: string): string {
  return `https://line.me/R/oaMessage/${LINE_OFFICIAL_ID}/?${encodeURIComponent(messageText)}`;
}
export function getLineOALink(): string {
  return `https://line.me/R/ti/p/${LINE_OFFICIAL_ID}`;
}
