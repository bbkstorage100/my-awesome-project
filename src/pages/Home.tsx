import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Thermometer, Wind, ShoppingBag, Box, House, MessageCircle, ClipboardCheck, Key, Search, User, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "1. 線上/電話詢價",
      desc: "告知您的收納需求，專業顧問將為您建議最適合的尺寸。"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "2. 現場免費參觀",
      desc: "親自確認空間大小、環境濕度與安全設備，滿意再決定。"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "3. 簽約與支付",
      desc: "備妥身分證件，現場快速簽約並自訂門禁密碼。"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "4. 隨時入倉儲放",
      desc: "簽約完成立即生效，享 24H 不限次數隨時自由進出。"
    }
  ];

  const solutions = [
    {
      title: "換季衣物與雜物",
      desc: "讓家中的衣櫃深呼吸，收納那些暫時用不到的溫暖與回憶。",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1vv60KKOpi5Qpr2Pxe2izJQlJNOesVX5UhoXDV6MKqHQ1HPNsGxNMVqK5v5k09bS9KzrYi39aljSDnEEaCS2mFZh-ICqFYpl56xwtBkdx24xAeBK7naqsNuOq3eNsRTEz4Hl6OefAvRkUEt2XdgKsnnlw9RmBLAqdAWXk45mGee0Mogkpk_-nOTYYWQ_fHCZz4jBfMzBcDpcHjmPMlDf8cNI8A2kgoPr5iDvXNBHT2HtfCZG4pBIbpwxXJ0htIVqeBiEW4LrC57XF",
      span: "md:col-span-2 bg-white",
      icon: <CheckCircle2 className="text-primary w-10 h-10 mb-4" />
    },
    {
      title: "收藏品與露營用品",
      desc: "珍貴的公仔、黑膠唱片，或是佔位的大型露營裝備，在這裡都有家。",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaB7-OivS8NE6bXW7rgQ6xON7_5eGp42LqPHOSVXn4x1OtgiDBjaY5hTtXvg44-5OOO6XqY7aWWoKW_UG_ORy7hHYBCfM1JKh-Dgvct4TrX-CE8tq3Clu1PE0yXjMoOi7YVE2dpbiYApwQJ5lEzSeOktSPgfWfIlytp7Xzizj96mccNTACMYgt9GoJfAxd4rIoSIYHVCfqqpygRV48sHNZhdJRIC7_y4mNg-xXmIz5mD8jH2JmANdFVJZypVki74sLIgkpAVfyi8w_",
      span: "md:col-span-2 bg-surface-container",
      icon: <Box className="text-primary w-10 h-10 mb-4" />
    }
  ];

  const pricing = [
    { 
      type: "小型櫃 / 上層", 
      title: "極簡上層空間", 
      price: "980", 
      suitable: "適合：珍貴收藏、文件帳冊、小型生活雜物",
      featured: false,
      btnColor: "bg-primary text-on-primary"
    },
    { 
      type: "中型櫃 / 下層", 
      title: "黃金便利空間", 
      price: "1,680", 
      suitable: "適合：露營裝備、換季衣物、中型收納箱",
      featured: true,
      btnColor: "bg-secondary text-on-secondary"
    },
    { 
      type: "大型櫃 / 獨立式", 
      title: "商務超值空間", 
      price: "2,800", 
      suitable: "適合：電商存貨、大型家具、公司資產",
      featured: false,
      btnColor: "bg-primary-container text-on-primary-container"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[38px] font-bold text-on-surface mb-8 leading-[1.1]">
              給生活一點留白，<br />找回空間的純粹。
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              擺寶庫迷你倉以提供最便利的服務為出發點，提供不僅是儲存空間，更是精緻生活的延續。讓雜物退場，讓舒適空間進駐。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <MessageCircle size={20} />
                立即詢價
              </a>
              <Link to="/offers" className="border-2 border-primary/20 text-primary px-10 py-4 rounded-2xl font-bold hover:bg-primary/5 transition-all">
                了解方案
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvcdbiRzPWe-RUpvqfWVCvymolw1-W-hGHurNYwYoDeF91cfPVq8JF4oeWiwipf1nISrzgxtgQDPh611w6Nv_TtumgBxO79gvynpZG-r40wJUPH14YFqHj3ja3kJHZoR8jPNq3S8thdP79Kp2eQ8Uj8J_cFSieLkxPnI9eGhABnMNN8XcMOkuFsJ1GRrpyLjr7nWtGM98S2WVe3CgattHA2tPHRsyrACeYP6fummW_Da4R80QdA7brC4k0rE90aoboDtrOb5PdtED1"
              alt="Japanese Minimalism Hero"
              className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/3] soft-shadow border border-white"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-outline-variant/30 hidden md:flex items-center gap-4">
              <div className="bg-secondary-container p-4 rounded-2xl">
                <House className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-on-surface">精選儲物單位</p>
                <p className="text-sm text-on-surface-variant">為您的珍藏量身打造</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Solutions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-4">各種收納可能</h2>
            <p className="text-on-surface-variant">不論是個人嗜好或商務需求，我們都有完美的空間對策。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {solutions.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`${s.span} p-8 rounded-[2.5rem] border border-outline-variant/30 soft-shadow group`}
              >
                {s.icon}
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-on-surface-variant mb-6">{s.desc}</p>
                <div className="overflow-hidden rounded-2xl">
                  <img src={s.img} alt={s.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
            
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-1 bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 flex flex-col justify-between soft-shadow"
            >
              <div>
                <ShoppingBag className="text-primary w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">公司帳冊</h3>
                <p className="text-sm text-on-surface-variant">符合法規的長期存放空間。</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-2 bg-surface-container-high p-8 rounded-[2.5rem] flex items-center gap-6 soft-shadow"
            >
              <div className="flex-1">
                <Box className="text-primary w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">電商倉儲</h3>
                <p className="text-on-surface-variant">微型創業的最佳夥伴，24H 隨時存取。</p>
              </div>
              <div className="hidden sm:block w-1/3">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8j3NEOnWtvYZtR2Kk3JZ1NcGMbC_rYQHNjV2hInl7oLN5kccKLqiGneCi42AW_D1eQwbQnhQwPqIj4Y4LIggrmZ5mv00P6WsGjQpe2MMbPcbBEeHjM1_tpcYikw4E69yxSasQ7Bd6hdqdHoIDvVFfBiLbfDlaO4AD0M47Gv9tnoZiZFs2rpCZxgWnNeBHD2KW2JT1o5UMixadGO2lqDEpyulTX8d9xcGCXvIYuJWnpQpO5bO7GP5NT9c_Jm372ChyAu_LkArUOida" className="rounded-2xl aspect-square object-cover" alt="Storage Hallway" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-1 bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 flex flex-col justify-between soft-shadow"
            >
              <div>
                <House size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">辦公家具</h3>
                <p className="text-sm text-on-surface-variant">搬遷或裝潢時的緩衝站。</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">比您的居家空間，<br />想得更多一點。</h2>
            <div className="space-y-10">
              {[
                { icon: <Thermometer />, title: "恆溫恆濕", desc: "專業控溫系統，保護您的珍藏不因潮濕發霉或質變。" },
                { icon: <Shield />, title: "24H 門禁守護", desc: "智慧門禁系統搭配紅外線監控，您的物品安全是優先項目。" },
                { icon: <Wind />, title: "工業級除濕", desc: "確保空氣清新乾燥，最適合精密儀器與高級皮革儲放。" }
              ].map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary shrink-0 self-start">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcu2-coaz_Ayg5IVgEVJJ6surrnqPHQ5-QXcXJTqkYJ1Ze0vTn_IO6-DMnwiF4opNIX_mmpefLEBbpUMcQCheish9itezUGLIbcAog9G4FXvUlP4QB8j2Ql0FwDGo2g5gMcSEUY6htwVtYarLsjTF56-Vq6rSQmdqwSSE_ShMHlzrlrTyVLAhS-q7ziBxVBDM61H52eZYs4y_IDtUsZng6tSQ2nenpLhVHF_ON8jpuBgNWzcgpRn7RREmLH1z11TbeesEkLao2R4dZ" 
              alt="Family" 
              className="rounded-[3rem] soft-shadow"
            />
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-primary p-10 rounded-3xl shadow-2xl hidden lg:block text-on-primary">
              <p className="text-4xl font-bold mb-1">99%</p>
              <p className="text-xs uppercase tracking-widest opacity-80">客戶滿意度</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-24 bg-background border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">輕鬆租倉四步驟</h2>
            <p className="text-on-surface-variant">我們簡化了所有流程，讓收納變得優雅從容。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-10 bg-white rounded-[2.5rem] border border-outline-variant/30 soft-shadow group hover:border-primary transition-colors"
              >
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {s.desc}
                </p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-outline-variant z-10">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">挑選適合您的空間</h2>
            <p className="text-on-surface-variant">靈活租期，輕鬆收納。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-white p-10 rounded-[2.5rem] flex flex-col items-center h-full text-center border transition-all ${p.featured ? 'border-primary border-2 shadow-xl relative z-10' : 'border-outline-variant/30 hover:border-primary'}`}
              >
                {p.featured && <span className="absolute -top-4 bg-primary text-on-primary px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">熱門推薦</span>}
                <div className="w-full aspect-video bg-surface-container-low rounded-2xl mb-8 flex items-center justify-center">
                   <Box className="w-20 h-20 text-primary opacity-20" />
                </div>
                <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container mb-4">{p.type}</span>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-on-surface-variant text-sm mb-10">{p.suitable}</p>
                <div className="mt-auto pt-8 border-t border-outline-variant/10 w-full">
                  <p className="text-2xl font-bold text-primary mb-6">NT$ {p.price} / 月起</p>
                  <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className={`block w-full py-4 rounded-xl font-bold transition-all shadow-lg hover:brightness-95 text-center ${p.btnColor}`}>
                    立即預約
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="bg-primary-container/20 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">現在就開始您的空間極簡計畫</h2>
            <p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto relative z-10">
              專業顧問將根據您的物品量，提供最精確的尺寸建議與報價。
            </p>
            <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-on-primary px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl relative z-10">
              <MessageCircle /> 獲取即時報價
            </a>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}
