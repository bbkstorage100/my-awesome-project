import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Shirt, Tent, Gamepad2, BookOpen, Package, Tv } from 'lucide-react';

import householdStorageImg from '../assets/images/household_storage_1779261602128.png';
import campingStorageImg from '../assets/images/camping_storage_1779261619655.png';
import collectiblesStorageImg from '../assets/images/collectibles_storage_1779261636372.png';
import documentStorageImg from '../assets/images/document_storage_1779261654750.png';
import ecommerceStorageImg from '../assets/images/ecommerce_storage_1779261671775.png';
import furnitureStorageImg from '../assets/images/furniture_storage_1779261686753.png';

interface SolutionItem {
  title: string;
  desc: string;
  img: string;
  icon: React.ReactNode;
}

export default function SolutionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const solutions: SolutionItem[] = [
    {
      title: "居家物品衣物保存",
      desc: "換季衣被、精緻服飾、居家生活雜物。為您的日常起居留出更多呼吸與舒心空間。",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Gemini_Generated_Image_2ahcfw2ahcfw2ahc_01.jpg",
      icon: <Shirt className="w-8 h-8" />
    },
    {
      title: "露營與戶外裝備",
      desc: "帳篷、睡袋、折疊桌椅、防火台及大型登山裝備。告別廁所與客廳堆積，讓每次出發更從容。",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Gemini_Generated_Image_2ahcfw2ahcfw2ahc_02.jpg",
      icon: <Tent className="w-8 h-8" />
    },
    {
      title: "公仔與玩具收藏",
      desc: "珍貴限量模型、公仔、及藝術珍藏。全天候恆溫恆濕防護，珍藏歲月不變質。",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Gemini_Generated_Image_2ahcfw2ahcfw2ahc_03.jpg",
      icon: <Gamepad2 className="w-8 h-8" />
    },
    {
      title: "公司資料保存",
      desc: "少用書籍、公司會計憑證、合約稅單及各類重要檔案。專屬獨立鎖防護，隱密安全。",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Gemini_Generated_Image_2ahcfw2ahcfw2ahc_04.jpg",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "網拍、電商出貨",
      desc: "微型創業、網拍商品庫存、包材與出貨備品物資。24H隨時自由存取，創業的最佳後盾。",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Gemini_Generated_Image_2ahcfw2ahcfw2ahc_05.jpg",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "搬家裝修家具保管",
      desc: "搬家裝潢過渡期之沙發、冰箱、洗衣機等大件家具。寬敞防護空間，保障家庭資產。",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Gemini_Generated_Image_2ahcfw2ahcfw2ahc_06.jpg",
      icon: <Tv className="w-8 h-8" />
    }
  ];

  // Element-center detection on scroll to update dynamic bullets / highlights
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('[data-slide-item]');
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const cardCenter = cardRect.left + cardRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setCurrentIndex(closestIndex);
  };

  // Safe scroll transition wrapper
  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('[data-slide-item]');
    const targetCard = cards[index] as HTMLElement;
    if (!targetCard) return;

    const containerWidth = container.clientWidth;
    const offsetLeft = targetCard.offsetLeft;
    
    // We scroll targetCard to be perfectly centered inside the container view
    const targetScrollLeft = offsetLeft - (containerWidth - targetCard.clientWidth) / 2;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % solutions.length;
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + solutions.length) % solutions.length;
    scrollToCard(prevIndex);
  };

  return (
    <div className="relative w-full py-6 select-none">
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none; /* IE, Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}} />

      {/* Navigation Arrow Buttons for Larger Screens */}
      <button
        onClick={handlePrev}
        id="carousel-prev"
        className="hidden md:flex absolute -left-6 top-[45%] -translate-y-1/2 z-20 bg-white hover:bg-primary text-primary hover:text-on-primary w-14 h-14 rounded-full items-center justify-center shadow-lg border border-outline-variant/35 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={handleNext}
        id="carousel-next"
        className="hidden md:flex absolute -right-6 top-[45%] -translate-y-1/2 z-20 bg-white hover:bg-primary text-primary hover:text-on-primary w-14 h-14 rounded-full items-center justify-center shadow-lg border border-outline-variant/35 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Main Responsive Snapping Container Track */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full gap-4 px-[10%] md:px-0 scroll-smooth pb-4"
      >
        {solutions.map((s, idx) => {
          const isFocused = currentIndex === idx;

          return (
            <div
              key={idx}
              data-slide-item
              className="shrink-0 snap-center w-[80%] md:w-[calc((100%-2rem)/3)] transition-all duration-500"
              onClick={() => {
                if (currentIndex !== idx) {
                  scrollToCard(idx);
                }
              }}
            >
              <div
                className={`h-[430px] md:h-[480px] bg-white p-4 md:p-8 rounded-[2rem] border flex flex-col gap-3 md:gap-5 soft-shadow transition-all duration-500 group ${
                  isFocused 
                    ? 'border-primary opacity-100 scale-100 shadow-md' 
                    : 'border-outline-variant/30 opacity-70 scale-[0.96] md:opacity-100 md:scale-100 md:hover:border-primary/50'
                } cursor-pointer`}
              >
                <div className="mb-0">
                  {/* Icon details */}
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-2.5 md:mb-4 transition-all duration-500 ${
                    isFocused 
                      ? 'bg-primary text-on-primary scale-110' 
                      : 'bg-primary/5 text-primary group-hover:bg-primary/10'
                  }`}>
                    {React.cloneElement(s.icon as React.ReactElement, { className: "w-5 h-5 md:w-8 md:h-8" })}
                  </div>
                  <h3 className="text-base md:text-2xl font-bold text-primary mb-1 md:mb-2 leading-snug">{s.title}</h3>
                  <p className="text-on-surface-variant text-[11px] md:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                
                {/* Visual Imagery */}
                <div className="overflow-hidden rounded-xl md:rounded-2xl flex-1 w-full relative shadow-inner">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dot Indicators */}
      <div className="flex justify-center items-center gap-2.5 mt-4">
        {solutions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx 
                ? 'bg-primary w-8' 
                : 'bg-primary/15 hover:bg-primary/40 w-2.5'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
