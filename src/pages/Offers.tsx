import { motion } from 'motion/react';
import { Tag, Sparkles, Truck, Check, ChevronDown, MessageCircle, LayoutGrid, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Offers() {
  const featuredUnits = [
    { 
      title: "輕量個人倉", 
      size: "1.0m x 1.0m", 
      price: "880", 
      oldPrice: "1,200", 
      tag: "熱銷", 
      location: "新莊旗艦倉",
      image: "https://images.unsplash.com/photo-1549194388-f61be84a6e9e?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "衣物收納倉", 
      size: "1.2m x 1.5m", 
      price: "1,380", 
      oldPrice: "1,800", 
      tag: "推薦", 
      location: "土城捷運倉",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "家居雜物倉", 
      size: "1.5m x 1.5m", 
      price: "1,880", 
      oldPrice: "2,500", 
      tag: "超值", 
      location: "板橋府中倉",
      image: "https://images.unsplash.com/photo-1621905252507-b35242f8df69?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "中型家具倉", 
      size: "2.0m x 2.0m", 
      price: "2,880", 
      oldPrice: "3,600", 
      tag: "限時", 
      location: "新店碧潭倉",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "商業物資倉", 
      size: "2.5m x 3.0m", 
      price: "4,580", 
      oldPrice: "5,800", 
      tag: "商用", 
      location: "三重工業倉",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "旗艦儲物間", 
      size: "3.5m x 4.0m", 
      price: "7,280", 
      oldPrice: "9,000", 
      tag: "奢華", 
      location: "中和環球倉",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Hero Section */}
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block"
          >
            Exclusive Promotions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-on-surface mb-8 leading-tight"
          >
            給您的空間，<br />一份呼吸的餘裕。
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant leading-relaxed"
          >
            我們相信收納不只是整理，更是重新找回生活節奏的藝術。透過本季限定優惠，讓 BBK 協助您打造理想的簡約家居。
          </motion.p>
        </header>

        {/* Shocking Offer Card */}
        <section className="mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-[3rem] border border-outline-variant/30 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center group shadow-sm hover:shadow-xl transition-all border-b-8 border-primary/20"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold mb-8">
                <Sparkles size={14} />
                季節限定方案
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6">首月 1 元震撼優惠</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed italic">「開啟極簡生活，從第一步的體貼開始。」</p>
              <p className="text-on-surface-variant mb-10 text-sm leading-relaxed max-w-md">
                適用於全系列中型與大型倉儲單位。簽約六個月以上即可享有首月僅需 1 元的專屬禮遇，協助您輕鬆開啟減物生活。
              </p>
              
              <div className="flex items-end gap-4 mb-10">
                <span className="text-primary font-bold text-4xl">NT$ 1 / 月</span>
                <div className="flex flex-col text-on-surface-variant/40 text-[10px] leading-tight mb-1">
                  <span className="line-through">原價 NT$</span>
                  <span className="line-through">3,200</span>
                </div>
              </div>
              
              <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary px-12 py-4 rounded-2xl font-bold hover:brightness-105 active:scale-95 transition-all shadow-lg text-lg">
                立即申請名額
              </a>
            </div>
            
            <div className="flex-1 w-full relative">
               <div className="aspect-square rounded-[2rem] overflow-hidden bg-surface-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv2Y1DDDJAVCbr2lSfyx0wuu_ia8qZKocSD4TC6ia5h-hB4c1LwWZ8ZlZ5AdR1LZc6MPS_lJYYVF-zJUQyAKOROXAoqV6R3ZQv1DJXQRzTKhwz68Dpf5Rakf51sl0-z9VQk2oh3upTtQXhL0Rzeu1fXri0Z39SHilCGiJ6Nyalu_dPRysN-73S_FgUBU2L8XLEFrTYHhngHCG4SlKuWSOlUqOXEGMSP05nquyt_s3yUXgHklTzZvTWW95w6bcePiplb5AQrc-R68EW" alt="Minimalist Storage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               </div>
               <div className="absolute -top-4 -right-4 bg-white px-6 py-6 rounded-full shadow-2xl border border-primary/10 flex items-center justify-center animate-pulse">
                  <span className="text-primary font-bold text-2xl">NEW!</span>
               </div>
            </div>
          </motion.div>
        </section>

         {/* Secondary Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2.5rem] p-12 border border-outline-variant/30 flex flex-col group hover:shadow-xl transition-all"
           >
              <div className="bg-primary-container/20 text-on-primary-container px-4 py-1 rounded-full text-xs font-bold mb-8 self-start flex items-center gap-2">
                <Truck size={14} /> 搬家特惠
              </div>
              <h3 className="text-3xl font-bold mb-6">專業搬運免運費</h3>
              <p className="text-on-surface-variant mb-auto text-base leading-relaxed">
                預約大型單位一年期，我們提供專業搬家團隊免費載運服務一次。給心愛物品最溫柔的對待。
              </p>
              <div className="mt-12 space-y-4">
                 <div className="flex items-center gap-2 text-secondary font-bold text-sm">
                   <Check size={16} /> 限定雙北地區
                 </div>
                 <button className="w-full border-2 border-primary text-primary py-4 rounded-xl font-bold hover:bg-primary/5 transition-all">
                    查看完整細則
                 </button>
              </div>
           </motion.div>

           <motion.div 
            whileHover={{ y: -5 }}
            className="bg-surface-container rounded-[2.5rem] p-12 border border-outline-variant/30 flex flex-col group hover:shadow-xl transition-all"
           >
              <div className="bg-secondary-container/50 text-secondary px-4 py-1 rounded-full text-xs font-bold mb-8 self-start flex items-center gap-2">
                <Tag size={14} /> 早鳥預約
              </div>
              <h3 className="text-3xl font-bold mb-6">新館開幕超前部署</h3>
              <p className="text-on-surface-variant mb-auto text-base leading-relaxed">
                預約即將落成的新館，享三年不漲價保障與首期八折優惠。限額 20 名優先登記中。
              </p>
              <div className="mt-12">
                 <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    <MessageCircle size={18} /> LINE 群組預留
                 </a>
              </div>
           </motion.div>
        </div>

        {/* Featured Units / Product Options */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">本月精選特價倉型</h2>
            <p className="text-on-surface-variant">針對不同收納需求，我們精選六款熱門規格提供專屬降價。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredUnits.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] border border-outline-variant/30 relative overflow-hidden group hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.tag}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs mb-3">
                    <MapPin size={14} /> {item.location}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant mb-6 flex items-center gap-2">
                    <LayoutGrid size={14} className="text-primary/40" /> {item.size}
                  </p>
                  
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-2xl font-bold text-primary">NT$ {item.price}</span>
                    <span className="text-sm text-on-surface-variant/40 line-through font-medium">NT$ {item.oldPrice}</span>
                    <span className="text-xs text-secondary font-bold">/ 月</span>
                  </div>
                  
                  <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="block text-center w-full border-2 border-primary/10 py-3 rounded-xl font-bold group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
                    查看詳情並預約
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-24">
          <div className="bg-primary-container/10 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-primary/20">
            <div className="text-center md:text-left">
               <h2 className="text-3xl font-bold mb-4">訂閱優惠通知</h2>
               <p className="text-on-surface-variant max-w-sm">第一時間獲得新據點開幕優惠與生活美學講座資訊。</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
               <input className="flex-1 bg-white px-8 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="您的電子郵件" />
               <button className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-bold whitespace-nowrap active:scale-95 transition-transform">訂閱折扣</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
