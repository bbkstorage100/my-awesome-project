import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin, Send, Shield } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Inquiry Center</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">讓我們一起找尋<br />屬於您的空間</h1>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
              對我們的倉型有疑問，或是需要空間大小的建議嗎？我們的團隊隨時準備為您服務。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-outline-variant/10 shadow-sm border-b-4 border-b-primary/20">
                <div className="bg-primary-container/20 p-4 rounded-2xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Email</p>
                  <p className="font-semibold">bbkstorage100@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-outline-variant/10 shadow-sm border-b-4 border-b-primary/20">
                <div className="bg-primary-container/20 p-4 rounded-2xl text-primary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">LINE Official</p>
                  <p className="font-semibold">@kanketsu_storage</p>
                </div>
              </div>
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
              <h2 className="text-2xl font-bold text-on-surface">今天我們能如何協助您？</h2>
              <p className="text-on-surface-variant mt-2 text-sm">請寫下您的需求，我們將在 24 小時內回覆您。</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">姓名</label>
                  <input className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none" placeholder="您的姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">電話</label>
                  <input className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none" placeholder="09XX-XXX-XXX" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-on-surface-variant ml-1">感興趣的據點</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex items-center gap-4 p-5 rounded-2xl bg-surface-container border border-outline-variant/30 cursor-pointer hover:border-primary transition-all group">
                    <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" />
                    <div>
                      <p className="font-bold text-sm">新莊輔大倉</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">Xinzhuang</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-4 p-5 rounded-2xl bg-surface-container border border-outline-variant/30 cursor-pointer hover:border-primary transition-all group">
                    <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" />
                    <div>
                      <p className="font-bold text-sm">土城中央倉</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">Tucheng</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">感興趣的櫃型尺寸</label>
                  <select className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none appearance-none">
                    <option value="">請選擇尺寸</option>
                    <option value="mini">小型（衣物、生活雜物）</option>
                    <option value="medium">中型（家具、季節家電）</option>
                    <option value="large">大型（搬家臨時存放、商業物資）</option>
                    <option value="xl">特大型（長期大型收藏、整屋物品）</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">可連絡時段</label>
                  <select className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none appearance-none">
                    <option value="">請選擇時段</option>
                    <option value="morning">早晨 (09:00 - 12:00)</option>
                    <option value="afternoon">下午 (12:00 - 18:00)</option>
                    <option value="evening">傍晚 (18:00 - 20:00)</option>
                    <option value="any">皆可，隨時歡迎</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-1">您的詳細需求</label>
                <textarea rows={4} className="w-full bg-surface-container-low border-b-2 border-primary/10 px-6 py-4 rounded-2xl focus:ring-0 focus:border-primary transition-all outline-none resize-none" placeholder="請告訴我們您想存放的物品類型..." />
              </div>

              <div className="pt-4">
                <button className="w-full bg-primary text-on-primary py-5 rounded-[2rem] font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                  <Send size={20} />
                  送出預約諮詢
                </button>
                <p className="text-[10px] text-center text-on-surface-variant mt-4 opacity-70 italic font-medium">按送出即表示您同意本公司的個人資料保護政策</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
