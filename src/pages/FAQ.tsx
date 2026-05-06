import { motion } from 'motion/react';
import { Clock, Info, LayoutGrid, HelpCircle, ChevronDown, MessageSquare, ChevronRight, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIdx, setOpenIdx] = useState(-2);

  const categories = [
    { 
      icon: <Clock size={18} />, 
      label: "租約與期程",
      questions: [
        {
          q: "最短租期是多少？",
          a: "我們的最短租期為一個月（30天）。租約採按月自動續約制，讓您隨時可以根據需求調整。"
        },
        {
          q: "如果想退租，需要提前多久告知？",
          a: "請於搬出日前 14 天透過 LINE 或是臨櫃告知我們。我們將協助您辦理結算與押金退還手續。"
        },
        {
          q: "租金支付方式有哪些？",
          a: "我們接受信用卡自動扣款、ATM 轉帳以及匯款。建議使用信用卡扣款，以免逾期產生遲延金。"
        }
      ]
    },
    { 
      icon: <Shield size={18} />, 
      label: "保險與安全",
      questions: [
        {
          q: "存放物品有保險嗎？",
          a: "是的，每一位用戶都享有基礎的財產火險與竊盜保險。若有高單價物品需求，亦可加購進階保險。"
        },
        {
          q: "監控系統是 24 小時的嗎？",
          a: "是的，全館配備高畫質監控攝影機，並由知名保全公司遠端即時監測，確保您的物品安全無虞。"
        },
        {
          q: "我的倉儲空間只有我有鑰匙嗎？",
          a: "沒錯。您的個人倉位由您自備掛鎖，或是向我們購買專業鎖頭。工作人員在非緊急狀況下不會進入您的空間。"
        }
      ]
    },
    { 
      icon: <LayoutGrid size={18} />, 
      label: "存放規則",
      questions: [
        {
          q: "哪些物品是被禁止存放的？",
          a: "禁止存放：易燃物、化學品、活體、非法禁藥、武器、腐壞品或任何強烈異味的物品。"
        },
        {
          q: "可以在倉庫內塞滿東西嗎？",
          a: "您可以依容量儲存，但建議預留進出動線，並注意物品堆疊的高度不要擋住消防灑水頭。"
        },
        {
          q: "倉庫環境有除濕嗎？",
          a: "全館採 24H 恆溫恆濕控制，濕度維持在 55%-65% 之間，適合存放衣物、書籍與皮革製品。"
        }
      ]
    },
    { 
      icon: <HelpCircle size={18} />, 
      label: "進出管理",
      questions: [
        {
          q: "我可以在晚上去倉庫拿東西嗎？",
          a: "沒問題。所有會員皆享有 24 小時進出權限，您可以使用專屬的門禁卡或密碼隨時進入。"
        },
        {
          q: "可以帶親友一起進入嗎？",
          a: "您可以陪同親友進入，但基於安全考量，請勿將門禁卡與密碼借予他人單獨使用。"
        },
        {
          q: "櫃台營業時間是什麼時候？",
          a: "櫃台專人服務時間為週一至週五 10:00 - 19:00。非服務時段則採全方位智慧化門禁管理。"
        }
      ]
    }
  ];

  const currentQuestions = categories[activeCategory].questions;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <section className="mb-20">
           <div className="bg-surface-container-low rounded-[3rem] p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 block">Support Center</span>
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">常見問題解答</h1>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  我們致力於為您提供最簡便的倉儲體驗。在這裡您可以找到有關租期、安全及存放規定的細節。
                </p>
              </div>
              <div className="h-64 md:h-full relative z-10">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJOHyV7MFR7Xz9qqJBbj2n8jVp8rt-Py9r8L0eKG4RbM4J1P8PPri66wfJ9uHDaowPAA3p1LjwxQcR95EsVfGAHr05VdZtF5qqyrkHUxCDlMsyzEArL5bvkCxY1lnDoOgyy0TqeKSP5_tdjsJcDUXalH_zaeas7RWkbLvKYYwlCYYIVSHBS2LpprNuxIqViAl_apC1cW9IVlsIUR80b6bLi6kVTtiCgsN0QfWc4Qp5_PaDh93TUyTFv_9sswPaoI7v7VOpV4adPk8r" 
                  alt="Storage Space" 
                  className="rounded-[2.5rem] w-full h-full object-cover soft-shadow"
                />
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-40 blur-3xl -rotate-12 translate-x-1/2" />
           </div>
        </section>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28">
              <h3 className="text-xl font-bold text-primary mb-8 ml-2">問題分類</h3>
              <nav className="space-y-4">
                 {categories.map((nav, i) => (
                   <button 
                     key={i} 
                     onClick={() => {
                       setActiveCategory(i);
                       setOpenIdx(-2);
                     }}
                     className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeCategory === i ? 'bg-primary-container text-on-primary-container font-bold shadow-md' : 'text-on-surface-variant hover:bg-surface-container'}`}
                   >
                     {nav.icon} {nav.label}
                   </button>
                 ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-8">
             <div className="space-y-4">
                {currentQuestions.map((faq, idx) => {
                  const isOpen = openIdx === idx || openIdx === -2; // -2 means all open
                  return (
                    <motion.div 
                      key={idx}
                      className="bg-white rounded-3xl border border-outline-variant/30 overflow-hidden"
                    >
                      <button 
                        onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                        className="w-full flex justify-between items-center px-10 py-8 text-left hover:bg-surface-container-low transition-colors"
                      >
                        <span className="font-bold text-lg md:text-xl text-on-surface">{faq.q}</span>
                        <motion.div 
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="text-primary shrink-0"
                        >
                           <ChevronDown size={24} />
                        </motion.div>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        className="overflow-hidden bg-surface-container-low/50"
                      >
                        <div className="px-10 pb-10 pt-2 text-on-surface-variant leading-relaxed text-base border-t border-outline-variant/10 italic">
                          {faq.a}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
             </div>
          </main>
        </div>
      </div>
    </div>
  );
}
