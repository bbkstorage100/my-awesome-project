import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Calendar, Droplets, ShoppingBag, Box, House, MessageCircle, ClipboardCheck, Key, Search, User, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionsCarousel from '../components/SolutionsCarousel';

export default function Home() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "1. Line線上/電話詢價",
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
      desc: "備妥身分證件，現場快速簽約並登錄您的悠遊卡當門禁卡。"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "4. 隨時入倉儲放",
      desc: "簽約完成立即生效，享 24H 不限次數隨時自由進出。"
    }
  ];

  const pricing = [
    { 
      type: "上層倉型", 
      title: "極簡上層空間", 
      price: "980", 
      suitable: "適合：珍貴收藏、文件帳冊、小型生活雜物",
      featured: false,
      btnColor: "bg-primary text-on-primary",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-651-8F/1683028442931.jpg"
    },
    { 
      type: "下層倉型", 
      title: "黃金便利空間", 
      price: "1,680", 
      suitable: "適合：露營裝備、換季衣物、中型收納箱",
      featured: true,
      btnColor: "bg-secondary text-on-secondary",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-209-B1/20230328_150107-1.png"
    },
    { 
      type: "獨立大倉", 
      title: "商務超值空間", 
      price: "2,800", 
      suitable: "適合：電商存貨、大型家具、公司資產",
      featured: false,
      btnColor: "bg-primary-container text-on-primary-container",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-209-B1/20230328_150216-1.png"
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
            <h1 className="text-[38px] font-bold text-primary mb-8 leading-[1.1]">
              給生活一點留白，<br />找回空間的純粹。
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              擺寶庫迷你倉提供新北<strong>新莊、板橋、土城、樹林、三峽</strong>等地區最優質、便利的 24H 恆溫除濕個人倉庫與自存倉服務。讓雜物退場，迎接舒適居住空間，給您的不僅是儲存空間，更是個人與商務精緻生活的完美延續。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/95 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                <MessageCircle size={20} />
                立即詢價
              </a>
              <Link to="/offers" className="border-2 border-primary/25 hover:border-primary/50 text-primary px-10 py-4 rounded-2xl font-bold hover:bg-primary/5 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer text-center">
                最新優惠訊息
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
              src="https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/20260516%20image.png"
              alt="Japanese Minimalism Hero"
              className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/3] soft-shadow border border-white"
              referrerPolicy="no-referrer"
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
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">各種收納可能</h2>
            <p className="text-on-surface-variant">不論是個人嗜好或商務需求，我們都有完美的空間對策。</p>
          </div>
          
          <SolutionsCarousel />
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 leading-tight">比您的居家空間，<br />想得更多一點。</h2>
            <div className="space-y-10">
              {[
                { icon: <Calendar />, title: "彈性儲存空間", desc: "彈性租約，最短租期一個月，臨時空間需求的好幫手。" },
                { icon: <Shield />, title: "24H 門禁監控守護", desc: "智慧門禁系統搭配高畫質監控攝影機，您的物品安全是優先項目。" },
                { icon: <Droplets />, title: "工業級除濕", desc: "工業級濕度控制系統，倉庫內濕度保持在55~60°，保護您的收藏不因潮濕發霉或質變。" }
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
          <div className="lg:w-1/3 w-full">
            <div className="bg-gradient-to-br from-[#FFFCEE] via-[#EAB33B] to-[#926210] p-10 rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(146,98,16,0.45)] text-center relative overflow-hidden border-[4px] border-[#FFF1C5] flex flex-col items-center justify-center min-h-[380px] group hover:-translate-y-1 transition-all duration-500">
              {/* Glossy metallic light sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s] ease-out-quint" />
              
              {/* Concentric luxury line details */}
              <div className="absolute inset-2 border border-[#FFE79E]/45 rounded-[2.6rem] pointer-events-none" />
              <div className="absolute inset-2.5 border border-[#926210]/15 rounded-[2.5rem] pointer-events-none" />
              
              {/* 3D Golden Award Seal & Ribbon Graphic */}
              <div className="relative mb-4 flex flex-col items-center">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300 via-[#EAB33B] to-yellow-600 rounded-full blur-xl opacity-35 animate-pulse" />
                
                {/* Outer ring of medal */}
                <div className="relative bg-gradient-to-b from-[#FFF2CB] via-[#E6AD2E] to-[#B27D16] p-4.5 rounded-full shadow-[0_12px_28px_rgba(110,75,10,0.5),_inset_0_2px_4px_rgba(255,255,255,1)] border-2 border-[#FFE8A3] flex items-center justify-center z-10">
                  <Award className="w-14 h-14 text-[#5c3e06] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]" />
                </div>
                
                {/* 3D Ribbon Tails */}
                <div className="absolute top-[80%] flex gap-3.5 z-0 justify-center">
                  <div className="w-4 h-12 bg-gradient-to-b from-[#E0A221] to-[#805305] rounded-b-md transform -rotate-12 origin-top shadow-md border-r border-white/10" />
                  <div className="w-4 h-12 bg-gradient-to-b from-[#E0A221] to-[#805305] rounded-b-md transform rotate-12 origin-top shadow-md border-l border-white/10" />
                </div>
              </div>

              {/* Five Golden Stars */}
              <div className="flex gap-1.5 mb-2 mt-3 relative z-10">
                {[1, 2, 3, 4, 5].map((_, starIdx) => (
                  <span key={starIdx} className="text-xl drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)] text-[#FFEAA7] animate-bounce" style={{ animationDelay: `${starIdx * 0.15}s` }}>★</span>
                ))}
              </div>

              {/* Giant 99% satisfaction display */}
              <h3 className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_4px_8px_rgba(80,50,5,0.5)] mb-1 relative z-10 select-none">
                99%
              </h3>
              
              <p className="text-sm uppercase tracking-widest font-black text-[#4E3100] mb-4 relative z-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
                客戶滿意度
              </p>
              
              <div className="mt-2 pt-5 border-t border-[#4E3100]/15 text-sm font-semibold text-[#3E2500] leading-relaxed max-w-[260px] relative z-10">
                擺寶庫始終承諾為您提供最高標準的恆溫濕控與全天候隨時存取的頂級服務，最值得您信賴。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-24 bg-background border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">輕鬆租倉四步驟</h2>
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
                <h3 className="text-xl font-bold text-primary mb-4">{s.title}</h3>
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
            <h2 className="text-4xl font-bold text-primary mb-4">挑選適合您的空間</h2>
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
                <div className="w-full bg-surface-container-low rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
                  {p.img ? (
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="aspect-video w-full flex items-center justify-center">
                      <Box className="w-20 h-20 text-primary opacity-20" />
                    </div>
                  )}
                </div>
                <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container mb-4">{p.type}</span>
                <h3 className="text-2xl font-bold text-primary mb-4">{p.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 relative z-10">現在就開始您的空間極簡計畫</h2>
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
