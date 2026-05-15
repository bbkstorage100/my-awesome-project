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
      label: "什麼是迷你倉？",
      questions: [
        {
          q: "如何判斷自己需要多大的空間呢?",
          a: "以搬家的客人來說，一台3.5噸的貨車大約是220才左右的空間，您就可以在官網對照我們相似材積的櫃型來承租；如果您實在難以估算，歡迎來電或是留言告知客服人員欲存放之物品尺寸與數量我們會代為估算。\n\n請放心就算到了現場如果覺得空間不適合，只要現場還有未出租的櫃型都可以更換喔，只需補租金及押金差額即可。"
        },
        {
          q: "承租後我想更換倉庫尺寸或地點呢？",
          a: "若您承租後發現空間過大 / 過小或是想更換地點，只要該分店尚有適合您的櫃型皆可換櫃。詳情請洽各分店客服人員，我們將提供您最詳細的解說。"
        },
        {
          q: "東西不多，我該租上櫃還是下櫃呢?",
          a: "根據我們的經驗，大部分的客人承租迷你倉後平均一個月存取不到一次。因為上層平均比下層便宜20%左右，如存取次數較低且物品較輕適宜存放在上層的客人建議可選擇租用上層倉型，不但存取上非常輕鬆，可挑選的位置比較多，價格還比較便宜喔。\n\n下層商型很搶手，可以擺放重型的物品，也不用抬上抬下，適合經常搬動重物的客人。"
        },
        {
          q: "可以預約參觀的時間?",
          a: "為了提供更完善的服務，參觀門市請提前預約，客服人員會為您配對最適合的門市與櫃型。\n\n本公司採不定點不定時人巡點制度，提前預約的客人有專人導覽，並協助客戶存取物品。此外，已承租的客人只要使用已設定的門禁悠遊卡，仍可24小時自行刷卡進出。\n\n國定休假日仍可留言聯繫我們， 我們將盡快回覆您。"
        },
        {
          q: "有提供停車位嗎?",
          a: "各分店均備有免費停車場，詳情請參閱各分店資訊。"
        },
        {
          q: "承租迷你倉後，要如何進出存取物品呢？",
          a: "承租後，現場客服人員會將您提供的悠遊卡內碼加入我們的門禁系統，您將能透過這張悠遊卡24小時自由進出倉庫喔。"
        }
      ]
    },
    { 
      icon: <Shield size={18} />, 
      label: "迷你倉安全嗎?",
      questions: [
        {
          q: "我的東西放在擺寶庫安全嗎?",
          a: "是的，非常安全。我們有24小時的錄影監視、警民合作連線、人員進出都必須用簽約時登記的悠遊卡，安全滴水不漏，迷你倉內並提供明亮的環境與工業用強力除濕機的濕度控制系統濕度維持55%~65%以下，讓您的物品得到妥善的保存。\n\n倉庫選用台灣製造堅固、高成本的防火鋼材，客戶可以使用我們借用的密碼鎖頭或自行購置鎖頭，各分店亦有投保公共意外責任險。\n\n雖然我們做了很多努力，由於台灣屬於較潮溼的海島型氣候國家，我們仍建議長期存放的客人不定時抽空前來檢查一次物品，並使用塑膠箱來進行長時間的收納，因為根據經驗紙箱很容易受潮且收納時濕氣將會悶在紙箱內容易造成發霉現象。"
        },
        {
          q: "如果東西遺失或損毀了怎麼辦呢？",
          a: "我們的迷你倉內各角落都有 24 小時監控錄影，皆會不定期觀看錄影監視狀況。\n\n若您的有損毀或短少的事情發生，請立即與各據點客服人員聯繫，我們會先調錄影資料與您核對，另外將會請保險公司人員與您接洽，並協助後續事宜。\n\n迷你倉無法取代銀行保險箱功能，不應存放貴重物品如現鈔、骨董、金飾、珠寶、有價證卷及藝術品(單價五萬以下之 圖畫、雕刻品等類似性質之物品，非屬此範疇，不在此限)等。"
        },
        {
          q: "有什麼東西不能放在迷你倉呢?",
          a: "在這裡您可以隨意存放任何物品(例如：搬家暫存、換季衣物、公司存貨、私人物品…等)。\n\n但為了安全我們的儲物空間內一律禁止存放下列物品：\nA.任何形式的活物(包括植物)與任何形式的遺體(包括動物)。\nB.食物、易腐壞或影 響公共衛生之物品(泡麵、罐頭、餅乾及蔬菜等易腐爛變質的物品)。\nC.油品、溶劑、化工原料等易燃物品。\nD.炮竹、火藥、瓦斯、武器等任何會冒煙、易燃、易爆裂物品。\nE.化學品、輻射物、 生化物、有毒廢料等危害公眾安全物品。\nF.任何發生異味、噪音、震動之物品。\nG.非法取得、法律禁止或有違反公序良俗之物品 如毒品、槍械、贓物等物品。\nH. 貴重物品如現鈔、骨董、金飾、珠寶、有價證卷及藝術品。\n如發現違禁品立即解約。如發現有違法物品，一律通報警消人員。詳情請參閱合約內容。"
        }
      ]
    },
    { 
      icon: <LayoutGrid size={18} />, 
      label: "簽約與費用",
      questions: [
        {
          q: "簽約需要準備什麼?",
          a: "個人戶承租：承租人的身份證（外籍人士請提供居留證或護照）、第二證件（健保卡/駕照/護照）、悠遊卡1-2張(設定門禁使用）、租金以及兩個月保證金。\n\n公司戶承租：公司設立登記表（包含當地政府設立函及變更登記表）、負責人雙證件影本（如無法提供，則提供聯絡窗口雙證件影本、名片，並請公司簽署委託書）、公司大小章、悠遊卡1-2張(設定門禁使用），租金以及兩個月保證金。"
        },
        {
          q: "如何計算承租日期呢?",
          a: "一般來說我們會以簽約當天設為倉庫起租日，最短租期以一個月為單位；租期分為月租、季租、半年租及年租，租期長短可享有不同的長租優惠。\n\n如果是預約之後的租倉，請洽現場人員協調租約起始日期。"
        },
        {
          q: "付款方式",
          a: "我們提供多元的繳款管道，以提升客戶繳款的便利性。\n\n付款方式有：現金、ATM轉帳、銀行匯款、街口支付(另加手續費)、信用卡(另加手續費)、LINE PAY(另加手續費)、支付寶等繳款方式。"
        },
        {
          q: "需要繳保證金(押金)嗎?",
          a: "是的。 不論租期長短皆需收兩個月的保證金；租期到了自行清空倉庫且經確認倉位原狀無損後，保證金會在三個工作日內由會計全數匯款給客人。如果提前跟客服人員預約退租時間，現場客服人員可在檢查過後立即退款給您喔。"
        },
        {
          q: "如果續租或超過租期未滿一個月怎麼收費呢？",
          a: "迷你倉租約最短一個月，未滿一個月以一個月計算。\n\n但如果您採月繳付費，承租超過一個月以上，但遷出時當月未滿30天，我們採取以“週”為單位依比例收費。\n\n如果您簽約時採取優惠方式繳款(季繳、半年繳、年繳)，因已經享有租金折扣，如果您提前搬出，則不會退還剩餘租金。"
        },
        {
          q: "我在合約到期後，想繼續使用，請問需要重新簽合約嗎？",
          a: "一般來說會用官方LINE線上文字與您協議續約事宜，如果您需要也可以重新簽訂紙本合約。"
        },
        {
          q: "合約到期續約流程",
          a: "為了保障您的存放權益，當期合約到期的3日前，如果需要續約請用官方LINE@通知我們並繳款後即為續約成功。"
        },
        {
          q: "合約到期解約/退租流程",
          a: "退租或解約請在7日前以官方LINE@通知我們(合約到期前傳送櫃位清空照片及收款帳戶資訊(需包含戶名及帳號))；我們會在退約後三個工作日內備妥文件並審視倉位狀況與處理保證金退款事宜。"
        },
        {
          q: "如果我忘記繳費，怎麼辦？",
          a: "麻煩您立即繳款並連繫擺寶庫客服人員，若超過繳款期限30日未付款，將取消進入倉庫之門禁權限，並將有逾期處理的手續費用200元產生(每30日累計) ，門禁權限待欠款付清後，即可恢復使用。"
        }
      ]
    },
    { 
      icon: <HelpCircle size={18} />, 
      label: "貼心小服務",
      questions: [
        {
          q: "倉儲備品販售中",
          a: "擺寶庫迷你倉每間分店都備有密碼鎖頭、膠帶、層架、台灣製50L物流箱等，供有需要的客戶選購或租用。\n\n50L物流箱尺寸：\n尺寸：55.8 x 40.5×33公分\n內徑：46x31x32公分\n\n均販售鎖、紙箱、層架，請洽現場服務人員。"
        },
        {
          q: "可以推薦搬家公司嗎?",
          a: "如需專業的搬家公司，我們可推薦長期配合服務好、性價比較高的搬家公司。"
        },
        {
          q: "是否有定期消毒?",
          a: "每年乙次各分店針對蟲鼠害進行消毒工作，加強環境維護。"
        },
        {
          q: "是否有代收信件包裹的服務?",
          a: "有的。我們提供非營業用信件包裹代收服務。只要事先知擺寶庫官方LINE@，並於收到通知後盡速取件完成。客戶可以指定我們的倉庫地址作為您的收件地址，不管是私人物品、國內外信件、公司行號指定送達的貨物皆可代收。\n\n如果營業用大量包裹信件代收，請洽詢擺寶庫服務人員。"
        },
        {
          q: "是否有提供輔助器材協助入倉?",
          a: "各分店皆有提供公用推車、簡易梯協助搬運。"
        },
        {
          q: "可否提供用電服務(插頭)?",
          a: "擺寶庫可提供插座用電服務，不過電器種類繁多基於安全考量，請您事先告知我們使用電器種類，我們保有承租與否的權利。"
        },
        {
          q: "悠遊卡遺失怎麼辦?",
          a: "若您的悠遊卡遺失/損壞，請您立即聯絡擺寶庫官方LINE@的客服人員，我們將立即為您的悠遊卡進行鎖卡。\n\n並麻煩您撥空至承租櫃位據點，找客服人員幫您重新設定悠遊卡門禁。"
        },
        {
          q: "我忘了密碼鎖的密碼怎麼辦？",
          a: "若您忘了密碼或鑰匙遺失，只能請鎖匠入倉剪鎖並支付剪鎖費用(約為 200～500 元台幣)。\n\n建議您於密碼設定完成後先拍照存檔，避免忘記密碼喔。"
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
