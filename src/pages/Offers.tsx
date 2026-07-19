import { motion, AnimatePresence } from 'motion/react';
import { Tag, Sparkles, Truck, Check, MessageCircle, LayoutGrid, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import japaneseStyleMoving from '../assets/images/japanese_style_moving_1784466660368.jpg';

// ⚠️ 這裡定義從 Supabase 捞出來的資料型態 (TypeScript Interface)
interface StoragePromotion {
  id: number;
  warehouse_name: string;
  unit_type: string;
  dimensions: string;
  original_price: number;
  promo_price: number;
  available_count: number;
  image_url: string;
  is_active: boolean;
}

const promotions = [
  {
    id: "tianqian-early",
    type: "new-location",
    icon: <Sparkles size={14} />,
    tagText: "全新據點・搶先預約",
    title: "新莊頭前庄倉 早鳥優惠",
    subtitle: "「搶先部署極簡生活，預留優雅的日常餘裕。」",
    description: (
      <>
        即將落成的新莊頭前庄倉推出限定早鳥方案！不限任何倉型，凡預留登記並預繳一年租金，即享<strong>「加碼多贈送一個月」</strong>的專屬超值禮遇。限額 20 名優先登記中，名額極其有限，額滿即止，立即把握機會搶先卡位！
      </>
    ),
    buttonText: "立即搶先登記",
    buttonLink: "https://line.me/R/ti/p/@anb6544c",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv2Y1DDDJAVCbr2lSfyx0wuu_ia8qZKocSD4TC6ia5h-hB4c1LwWZ8ZlZ5AdR1LZc6MPS_lJYYVF-zJUQyAKOROXAoqV6R3ZQv1DJXQRzTKhwz68Dpf5Rakf51sl0-z9VQk2oh3upTtQXhL0Rzeu1fXri0Z39SHilCGiJ6Nyalu_dPRysN-73S_FgUBU2L8XLEFrTYHhngHCG4SlKuWSOlUqOXEGMSP05nquyt_s3yUXgHklTzZvTWW95w6bcePiplb5AQrc-R68EW",
    badge: "NEW!",
    bgClass: "bg-white",
    borderClass: "border-primary/20",
  },
  {
    id: "fuda-discount",
    type: "promo",
    icon: <Sparkles size={14} />,
    tagText: "特惠活動・限時優惠",
    title: "新莊輔大2倉 震撼優惠",
    subtitle: "「開啟極簡生活，從第一步的體貼開始。」",
    description: (
      <>
        適用於<strong>新莊輔大2倉</strong>全系列倉儲單位。簽約六個月以上即可享有<strong>首月 8 折</strong>的專屬禮遇，協助您輕鬆開啟極簡生活，享受優雅、舒心的極簡居住空間。
      </>
    ),
    buttonText: "立即申請名額",
    buttonLink: "https://line.me/R/ti/p/@anb6544c",
    imageUrl: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-651-8F/1719560262092-1.png",
    badge: "8折",
    bgClass: "bg-white",
    borderClass: "border-primary/20",
  },
  {
    id: "moving-help",
    type: "service",
    icon: <Truck size={14} />,
    tagText: "搬家特惠・貼心服務",
    title: "推薦專業搬家公司",
    subtitle: "「給心愛物品最溫柔的對待。」",
    description: (
      <>
        預約搬家服務，我們提供專業優質的搬家團隊聯絡方式。安全、迅速、省心，一站式解決您的搬遷與入倉需求。限時提供專業搬家諮詢與專屬入倉保障，給心愛物品最溫柔的對待。
      </>
    ),
    buttonText: "LINE 立即諮詢",
    buttonLink: "https://line.me/R/ti/p/@anb6544c",
    imageUrl: japaneseStyleMoving,
    badge: "搬家",
    bgClass: "bg-white",
    borderClass: "border-secondary/20",
  }
];

export default function Offers() {
  // 1. 建立儲存促銷資料的狀態 (State)
  const [featuredUnits, setFeaturedUnits] = useState<StoragePromotion[]>([]);
  // 2. 建立載入中的狀態
  const [loading, setLoading] = useState(true);

  // 3. Carousel 狀態
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // ⚠️ 請在此處填入您的 Supabase 設定（這在 GitHub Pages 前端是公開的，請務必開啟 RLS 安全防護）
  const SUPABASE_URL = "https://ttmythpjaukwxdaapwlu.supabase.co"; 
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXl0aHBqYXVrd3hkYWFwd2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MzA0NTMsImV4cCI6MjA5NDUwNjQ1M30.NFvTSeihg33_XugQXNUV3lkm0H0YXogNRD5sc1bMFQY"; 

  useEffect(() => {
    async function fetchPromotions() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500); // 2.5 秒超時機制

      try {
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/storage_promotions?is_active=eq.true&available_count=gt.0`,
          {
            method: 'GET',
            headers: {
              'apikey': SUPABASE_ANON_KEY,
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json'
            },
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) throw new Error('資料庫連線失敗');
        const data = await response.json();
        
        if (data && data.length > 0) {
          setFeaturedUnits(data);
        } else {
          setFeaturedUnits([]);
        }
      } catch (error) {
        console.warn("無法即時連線 Supabase 資料庫或無數據，已重設促銷：", error);
        setFeaturedUnits([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPromotions();
  }, []);

  // 4. Carousel 自動輪播機制 (當滑鼠懸停時暫停)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length);
  };

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
            className="text-[38px] font-bold text-primary mb-8 leading-tight"
          >
            給您的空間，<br />一份呼吸的餘裕。
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant leading-relaxed"
          >
            我們相信收納不只是整理，更是重新找回生活節奏的藝術。透過本季限定優惠，讓 擺寶庫迷你倉 協助您打造理想的簡約家居。
          </motion.p>
        </header>

        {/* Shocking Offer Card / Carousel */}
        <section className="mb-16 relative">
          {/* Navigation Arrow Buttons for Larger Screens (Desktop Only) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-6 lg:-left-10 top-[45%] -translate-y-1/2 z-20 bg-white hover:bg-primary text-primary hover:text-on-primary w-14 h-14 rounded-full items-center justify-center shadow-lg border border-outline-variant/35 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Previous Offer"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-6 lg:-right-10 top-[45%] -translate-y-1/2 z-20 bg-white hover:bg-primary text-primary hover:text-on-primary w-14 h-14 rounded-full items-center justify-center shadow-lg border border-outline-variant/35 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Next Offer"
          >
            <ChevronRight size={28} />
          </button>

          <div 
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    x: dir > 0 ? 50 : -50,
                    opacity: 0
                  }),
                  center: {
                    x: 0,
                    opacity: 1
                  },
                  exit: (dir) => ({
                    x: dir < 0 ? 50 : -50,
                    opacity: 0
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white rounded-[3rem] border border-outline-variant/30 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center group shadow-sm hover:shadow-xl transition-all border-b-8 border-primary/20 min-h-[500px] select-none"
              >
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold mb-8">
                    {promotions[currentIndex].icon}
                    {promotions[currentIndex].tagText}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                    {promotions[currentIndex].title}
                  </h2>
                  <p className="text-on-surface-variant text-lg mb-8 leading-relaxed italic">
                    {promotions[currentIndex].subtitle}
                  </p>
                  <div className="text-on-surface-variant mb-10 text-sm leading-relaxed max-w-md">
                    {promotions[currentIndex].description}
                  </div>
                  
                  <a 
                    href={promotions[currentIndex].buttonLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-primary text-on-primary px-12 py-4 rounded-2xl font-bold hover:brightness-105 active:scale-95 transition-all shadow-lg text-lg cursor-pointer"
                  >
                    {promotions[currentIndex].buttonText}
                  </a>
                </div>
                
                <div className="flex-1 w-full relative">
                   <div className="aspect-square rounded-[2rem] overflow-hidden bg-surface-container">
                      <img 
                        src={promotions[currentIndex].imageUrl} 
                        alt={promotions[currentIndex].title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 select-none pointer-events-none" 
                        referrerPolicy="no-referrer"
                      />
                   </div>
                   <div className="absolute -top-4 -right-4 bg-white px-6 py-6 rounded-full shadow-2xl border border-primary/10 flex items-center justify-center animate-pulse">
                      <span className="text-primary font-bold text-2xl">{promotions[currentIndex].badge}</span>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Console */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button 
                onClick={handlePrev} 
                className="p-3 rounded-full border border-outline-variant/30 bg-white hover:bg-surface-container transition-all text-primary hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                aria-label="Previous Offer"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center gap-2">
                {promotions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === index ? 'bg-primary w-8' : 'bg-outline-variant/60 hover:bg-outline-variant w-2.5'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext} 
                className="p-3 rounded-full border border-outline-variant/30 bg-white hover:bg-surface-container transition-all text-primary hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                aria-label="Next Offer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Featured Units / Product Options (動態資料渲染區) */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">本月精選特價倉型</h2>
            <p className="text-on-surface-variant">針對不同收納需求，我們精選熱門規格提供專屬降價。</p>
          </div>
          
          {loading ? (
            // 載入中的骨架屏效果 (Skeleton)
            <div className="text-center py-12 text-on-surface-variant font-medium">
              正在為您同步最新倉庫促銷數據...
            </div>
          ) : featuredUnits.length === 0 ? (
            // 資料庫沒資料時的防錯顯示
            <div className="text-center py-16 bg-white border border-outline-variant/25 rounded-[3rem] p-8 md:p-12 max-w-xl mx-auto shadow-sm">
              <Tag className="w-12 h-12 text-[#a3866a]/80 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">本月暫無特價倉庫</h3>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                詳情請聯繫客服人員，專業收納顧問將為您配對最合適的客製化尺寸或最新門市折扣優惠。
              </p>
              <a 
                href="https://line.me/R/ti/p/@anb6544c" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold hover:brightness-105 active:scale-95 transition-all shadow-lg shadow-primary/10"
              >
                <MessageCircle size={18} /> 聯繫客服人員 (LINE)
              </a>
            </div>
          ) : (
            // 當有資料時，使用 .map() 依據 Supabase 的陣列長度自動畫卡片
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredUnits.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2rem] border border-outline-variant/30 relative overflow-hidden group hover:shadow-2xl transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image_url || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"} 
                      alt={item.unit_type} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* ⚠️ 核心功能：依據數量自動更換標籤（當剩餘數量小於 3 顯示即將滿倉，否則顯示特惠中） */}
                    <div className={`absolute top-4 right-4 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm ${
                      item.available_count < 3 ? 'bg-[#a3866a] animate-pulse' : 'bg-primary/90'
                    }`}>
                      {item.available_count < 3 ? `僅剩 ${item.available_count} 倉` : '特惠中'}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs mb-3">
                      <MapPin size={14} /> {item.warehouse_name}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.unit_type}</h4>
                    <p className="text-sm text-on-surface-variant mb-6 flex items-center gap-2">
                      <LayoutGrid size={14} className="text-primary/40" /> {item.dimensions}
                    </p>
                    
                    <div className="flex items-baseline gap-3 mb-8">
                      <span className="text-2xl font-bold text-primary">NT$ {item.promo_price.toLocaleString()}</span>
                      <span className="text-sm text-on-surface-variant/40 line-through font-medium">NT$ {item.original_price.toLocaleString()}</span>
                      <span className="text-xs text-secondary font-bold">/ 月</span>
                    </div>
                    
                    <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="block text-center w-full border-2 border-primary/10 py-3 rounded-xl font-bold group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
                      查看詳情並預約
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter */}
        <section className="mt-24">
          <div className="bg-primary-container/10 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-primary/20">
            <div className="text-center md:text-left">
               <h2 className="text-3xl font-bold text-primary mb-4">訂閱優惠通知</h2>
               <p className="text-on-surface-variant max-w-sm">優先獲得新據點開幕優惠。</p>
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