import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, MapPin, Send, Shield } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locations: [] as string[],
    size: '',
    time: '',
    message: ''
  });

  const handleLocationChange = (loc: string) => {
    setFormData(prev => ({
      ...prev,
      locations: prev.locations.includes(loc) 
        ? prev.locations.filter(l => l !== loc)
        : [...prev.locations, loc]
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // 彙整資料內容
    const emailTo = "bbkstorage100@gmail.com";
    const subject = encodeURIComponent(`【擺寶庫迷你倉】諮詢預約 - ${formData.name} 先生/小姐`);
    
    const bodyText = `
擺寶庫迷你倉 預約諮詢單
=========================
姓名：${formData.name}
電話：${formData.phone}
感興趣的據點：${formData.locations.length > 0 ? formData.locations.join('、') : '未選擇'}
感興趣的櫃型：${formData.size || '未選擇'}
方便連繫時段：${formData.time || '未選擇'}

詳細需求：
${formData.message || '無'}
=========================
    `.trim();

    const body = encodeURIComponent(bodyText);
    
    // 開啟郵件軟體
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Inquiry Center</span>
            <h1 className="text-[38px] font-bold text-primary mb-8 leading-tight">讓我們一起找尋<br />屬於您的空間</h1>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
              對我們的倉型有疑問，或是需要空間大小的建議嗎？我們的團隊隨時準備為您服務。
            </p>
            
            <div className="space-y-6">
              <a href="mailto:bbkstorage100@gmail.com?subject=聯繫擺寶庫迷你倉 - 詢問空間需求" className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-outline-variant/10 shadow-sm border-b-4 border-b-primary/20 hover:border-primary transition-all">
                <div className="bg-primary-container/20 p-4 rounded-2xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Email</p>
                  <p className="font-semibold">bbkstorage100@gmail.com</p>
                </div>
              </a>
              
              <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-outline-variant/10 shadow-sm border-b-4 border-b-primary/20 hover:border-primary transition-all">
                <div className="bg-primary-container/20 p-4 rounded-2xl text-primary">
                   <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">LINE Official</p>
                  <p className="font-semibold text-primary">@anb6544c</p>
                </div>
              </a>
            </div>

            <div className="mt-16 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-24 h-24 bg-secondary-container/50 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-secondary w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">專業顧問團隊</h3>
              <p className="text-on-surface-variant italic">「我們看重的不是存多少東西，而是為您的生活騰出多少自在。」</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-outline-variant/20"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-primary">今天我們能如何協助您？</h2>
              <p className="text-on-surface-variant mt-2 text-sm">請寫下您的需求，我們將在一個工作天內回覆您，以可以透過LINE帳號跟我們聯繫，以獲得更即時的協助喔。</p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">姓名</label>
                  <input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none" 
                    placeholder="您的姓名" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">電話</label>
                  <input 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none" 
                    placeholder="09XX-XXX-XXX" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-on-surface-variant ml-1">感興趣的據點</label>
                <div className="grid grid-cols-1 gap-4">
                  <label className={`flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${formData.locations.includes('新莊輔大1倉') ? 'bg-primary/5 border-primary shadow-sm' : 'bg-surface-container border-outline-variant/30 hover:border-primary'}`}>
                    <input 
                      type="checkbox" 
                      checked={formData.locations.includes('新莊輔大1倉')}
                      onChange={() => handleLocationChange('新莊輔大1倉')}
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" 
                    />
                    <div>
                      <p className="font-bold text-sm">新莊輔大1倉</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">新北市新莊區中正路651之1號6樓</p>
                    </div>
                  </label>
                  <label className={`flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${formData.locations.includes('新莊輔大2倉') ? 'bg-primary/5 border-primary shadow-sm' : 'bg-surface-container border-outline-variant/30 hover:border-primary'}`}>
                    <input 
                      type="checkbox" 
                      checked={formData.locations.includes('新莊輔大2倉')}
                      onChange={() => handleLocationChange('新莊輔大2倉')}
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" 
                    />
                    <div>
                      <p className="font-bold text-sm">新莊輔大2倉</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">新北市新莊區中正路651之1號8樓</p>
                    </div>
                  </label>
                  <label className={`flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${formData.locations.includes('土城中央倉') ? 'bg-primary/5 border-primary shadow-sm' : 'bg-surface-container border-outline-variant/30 hover:border-primary'}`}>
                    <input 
                      type="checkbox" 
                      checked={formData.locations.includes('土城中央倉')}
                      onChange={() => handleLocationChange('土城中央倉')}
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" 
                    />
                    <div>
                      <p className="font-bold text-sm">土城中央倉</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">新北市土城區中央路二段209號B1</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">感興趣的櫃型尺寸</label>
                  <select 
                    value={formData.size}
                    onChange={(e) => setFormData({...formData, size: e.target.value})}
                    className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="">請選擇尺寸</option>
                    <option value="小型櫃">小型（衣物、生活雜物）</option>
                    <option value="中型櫃">中型（家具、季節家電）</option>
                    <option value="大型櫃">大型（搬家臨時存放、商業物資）</option>
                    <option value="特大型櫃">特大型（長期大型收藏、整屋物品）</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">可連絡時段</label>
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="">請選擇時段</option>
                    <option value="早晨 (09:00 - 12:00)">早晨 (09:00 - 12:00)</option>
                    <option value="下午 (12:00 - 18:00)">下午 (12:00 - 18:00)</option>
                    <option value="傍晚 (18:00 - 20:00)">傍晚 (18:00 - 20:00)</option>
                    <option value="皆可，隨時歡迎">皆可，隨時歡迎</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-1">您的詳細需求</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none resize-none" 
                  placeholder="請簡單描述您想要寄放的物品大小、數量或是需求，謝謝。" 
                />
              </div>

              <div className="pt-4 text-center">
                <button 
                  type="submit"
                  className="w-full bg-primary text-on-primary py-5 rounded-[2rem] font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  <Send size={20} />
                  送出預約諮詢
                </button>
                <p className="text-[10px] text-on-surface-variant mt-4 opacity-70 italic font-medium">點擊上方按鈕將會開啟您的郵件軟體發送諮詢內容</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
