import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const solutions: SolutionItem[] = [
    {
      title: "換季衣物與居家雜物",
      desc: "換季衣被、精緻服飾、居家生活瑣碎雜物。為您的日常起居留出更多呼吸與舒心空間。",
      img: householdStorageImg,
      icon: <Shirt className="w-8 h-8" />
    },
    {
      title: "露營與戶外裝備",
      desc: "帳篷、睡袋、折疊桌椅及大型登山裝備。告別陽台與客廳堆積，讓每次出發更從容。",
      img: campingStorageImg,
      icon: <Tent className="w-8 h-8" />
    },
    {
      title: "動漫公仔與玩具收藏",
      desc: "珍貴限量模型、公仔、黑膠唱片及藝術珍藏。全天候恆溫恆濕防護，珍藏歲月不變質。",
      img: collectiblesStorageImg,
      icon: <Gamepad2 className="w-8 h-8" />
    },
    {
      title: "書籍、文件與辦公檔案",
      desc: "少用書籍、公司會計憑證、合約稅單及各類重要檔案。專屬獨立鎖防護，隱密安全。",
      img: documentStorageImg,
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "網拍、電商物資與出貨",
      desc: "微型創業、網拍商品庫存、包材與出貨備品物資。24H隨時自由存取，最佳出貨後盾。",
      img: ecommerceStorageImg,
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "家具與大型家電隨時儲",
      desc: "搬家裝潢過渡期之沙發、冰箱、洗衣機等大件家具。寬敞防護空間，保障家庭資產。",
      img: furnitureStorageImg,
      icon: <Tv className="w-8 h-8" />
    }
  ];

  // Detect screen size for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = solutions.length;
  // If desktop, since we show 3 items, index ranges from 0 to 3 to avoid blank space.
  // If mobile, it shows 1 item, so index ranges from 0 to 5.
  const maxIndex = isMobile ? totalItems - 1 : totalItems - 3;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleDotClick = (index: number) => {
    if (index <= maxIndex) {
      setCurrentIndex(index);
    }
  };

  // Drag handles for swiping
  const handleDragEnd = (_event: any, info: any) => {
    const threshold = 50; 
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  // Desktop Translation calculation: moves left by (index * 33.3333%)
  // Mobile Translation calculation: W = 78%, center offsets centered around W, leaving ~11% peek on both sides
  const desktopTranslate = `translateX(-${currentIndex * 33.333333}%)`;
  const mobileTranslate = `calc(11% - ${currentIndex * 78}%)`;

  return (
    <div className="relative w-full overflow-hidden py-6 px-4 md:px-12 select-none" ref={containerRef}>
      
      {/* Desktop Navigation Arrow Buttons */}
      {!isMobile && (
        <>
          <button
            onClick={handlePrev}
            id="carousel-prev"
            className="absolute left-2 top-[45%] -translate-y-1/2 z-20 bg-white hover:bg-primary text-primary hover:text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-outline-variant/35 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            id="carousel-next"
            className="absolute right-2 top-[45%] -translate-y-1/2 z-20 bg-white hover:bg-primary text-primary hover:text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-outline-variant/35 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Main Track Window */}
      <div className="relative w-full overflow-visible md:overflow-hidden">
        <motion.div
          animate={{
            transform: isMobile ? mobileTranslate : desktopTranslate,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          className="flex flex-nowrap gap-0 w-full cursor-grab active:cursor-grabbing pb-4"
        >
          {solutions.map((s, idx) => {
            const isFocused = isMobile ? currentIndex === idx : (idx >= currentIndex && idx < currentIndex + 3);

            return (
              <div
                key={idx}
                style={{
                  width: isMobile ? '78%' : '33.333333%',
                }}
                className="shrink-0 px-2 md:px-4 transition-all duration-500"
              >
                <div
                  className={`h-full bg-white p-7 md:p-8 rounded-[2.2rem] border flex flex-col justify-between soft-shadow h-[480px] md:h-[500px] transition-all duration-300 ${
                    isFocused 
                      ? 'border-outline-variant/50 opacity-100 scale-100' 
                      : 'border-transparent opacity-40 scale-95 md:opacity-100 md:scale-100'
                  } hover:border-primary/60`}
                >
                  <div className="mb-4">
                    <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary transition-all duration-500">
                      {s.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 leading-snug">{s.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                      {s.desc}
                    </p>
                  </div>
                  
                  <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full mt-auto relative shadow-inner">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Pagination / Indicator Dots */}
      <div className="flex justify-center items-center gap-3 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
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
