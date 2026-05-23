import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Shield, Navigation, LayoutGrid, Bus, TrainFront, ParkingCircle, CalendarCheck, User, UserRound, Plus, Minus, Maximize2, ExternalLink, X } from 'lucide-react';

export default function Locations() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const locations = [
    {
      id: "xinzhuang-fuda-1",
      name: "新莊輔大1倉",
      address: "新北市新莊區中正路651-1號6樓(遠東動力園區)",
      serviceAreas: "新莊、板橋、樹林、三峽 及新莊捷運沿線居民學子",
      phone: "(02)2906-6337",
      hours: "24H憑門禁卡自由進出",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-651-6F/20240423_153944-1.png",
      priceImg: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Price-S-651-6.jpg",
      features: ["捷運站步行 5 分鐘", "專屬卸貨區", "智慧門禁系統"],
      extraInfo: {
        appointment: "參觀倉儲採預約制",
        toilet: "大樓提供廁所",
        transport: {
          bus: "111、235、637、638、639、801、802、藍2",
          mrt: "中和新蘆線"
        },
        parking: [
          "遠東動力園B區卸貨碼頭1F/B1，免費臨時卸貨停車。",
          "1F：卸貨碼頭僅上班時間開放(7:00AM ~ 06:30PM)",
          "B1：卸貨碼頭24小時開放(30分鐘免費，卸貨臨停要請管理室放下停車位欄杆)。",
          "B2：中正路的地下停車場入口進入園區，地下二樓也有付費停車位。"
        ]
      }
    },
    {
      id: "xinzhuang-fuda-2",
      name: "新莊輔大2倉",
      address: "新北市新莊區中正路651-1號8樓(遠東動力園區)",
      serviceAreas: "新莊、板橋、樹林、三峽 捷運動力沿線通勤族",
      phone: "(02)2906-6337",
      hours: "24H憑門禁卡自由進出",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-651-8F/1719560262092-1.png",
      priceImg: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Price-S-651-8.jpg",
      features: ["捷運站步行 5 分鐘", "專屬卸貨區", "智慧門禁系統"],
      extraInfo: {
        appointment: "參觀倉儲採預約制",
        toilet: "大樓提供廁所",
        transport: {
          bus: "111、235、637、638、639、801、802、藍2",
          mrt: "中和新蘆線"
        },
        parking: [
          "遠東動力園B區卸貨碼頭1F/B1，免費臨時卸貨停車。",
          "1F：卸貨碼頭僅上班時間開放(7:00AM ~ 06:30PM)",
          "B1：卸貨碼頭24小時開放(30分鐘免費，卸貨臨停要請管理室放下停車位欄杆)。",
          "B2：中正路的地下停車場入口進入園區，地下二樓也有付費停車位。"
        ]
      }
    },
    {
      id: "tucheng-central",
      name: "土城中央倉",
      address: "新北市土城區中央路二段209號B1",
      serviceAreas: "土城、板橋、三峽、樹林 及周邊商圈家庭與電商",
      phone: "(02)2906-6337",
      hours: "24H憑門禁卡自由進出",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-209-B1/20230331_191055-1.png",
      priceImg: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/web/Price-S-209-B1.jpg",
      features: ["近土城交流道", "濕度恆控", "全室錄影監控"],
      extraInfo: {
        appointment: "參觀倉儲採預約制",
        toilet: "本場所提供廁所",
        transport: {
          bus: "土城農會站573、705、707、805、1851、1962",
          mrt: "板南線土城捷運站二號出口步行5分鐘就到了"
        },
        parking: [
          "本場所提供兩個免費的臨時卸貨車位在社區大樓B2層(18、19號停車位)。"
        ]
      }
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[38px] font-bold text-primary mb-6"
          >
            尋找最靠近您的<br />極簡據點
          </motion.h1>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            擺寶庫優質倉儲全面覆蓋<strong>新莊、板橋、樹林、土城、三峽</strong>等新北主要生活圈。我們選址於便捷、交通發達的園區地段，結合高品質的 24H 恆溫除濕、智慧門禁技術，讓您的物品在離街坊不遠處也能隨時享有細緻與尊貴的儲存款待。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[3rem] overflow-hidden border border-outline-variant/30 soft-shadow group"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={loc.img} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2">
                  <Shield size={14} /> 專業保全
                </div>
              </div>
              
              <div className="p-10">
                <h2 className="text-3xl font-bold text-primary mb-2">{loc.name}</h2>
                
                {/* SEO Region Service Highlight Badge */}
                <div className="mb-6 flex items-start gap-2.5 bg-primary/[0.04] p-3.5 rounded-2xl border border-primary/10">
                  <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded-md shrink-0 mt-0.5 uppercase tracking-wide">地區服務</span>
                  <p className="text-xs font-semibold text-primary/95 leading-relaxed">
                    精準服務：{loc.serviceAreas}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <MapPin className="text-primary shrink-0" size={20} />
                    <span className="text-sm font-medium">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <Phone className="text-primary shrink-0" size={20} />
                    <span className="text-sm font-medium">{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <Clock className="text-primary shrink-0" size={20} />
                    <span className="text-sm font-medium">{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <CalendarCheck className="text-primary shrink-0" size={20} />
                    <span className="text-sm font-medium">{loc.extraInfo.appointment}</span>
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <div className="flex -space-x-2.5 items-center">
                      <User className="text-primary shrink-0" size={20} />
                      <UserRound className="text-primary shrink-0" size={20} />
                    </div>
                    <span className="text-sm font-medium">{loc.extraInfo.toilet}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {/* Accordion 1: 大眾運輸 */}
                  <div className="border border-outline-variant/20 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <button
                      onClick={() => toggleSection(`${loc.id}-transport`)}
                      className="w-full flex items-center justify-between px-6 py-4 bg-surface-container-low/60 hover:bg-surface-container-low/90 transition-colors duration-200 cursor-pointer select-none text-left"
                    >
                      <span className="flex items-center gap-3 text-primary font-bold text-sm">
                        <Bus size={18} /> 大眾運輸資訊
                      </span>
                      <span className="text-primary p-1 bg-primary-container/20 rounded-full">
                        {openSections[`${loc.id}-transport`] ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    {openSections[`${loc.id}-transport`] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden border-t border-outline-variant/10"
                      >
                        <div className="p-5 space-y-3 text-xs leading-relaxed text-on-surface-variant">
                          <div className="bg-surface p-3 rounded-2xl border border-outline-variant/10">
                            <div className="text-primary font-bold mb-1 flex items-center gap-1.5">
                              <Bus size={14} /> 聯營公車
                            </div>
                            <p className="text-on-surface-variant">{loc.extraInfo.transport.bus}</p>
                          </div>
                          <div className="bg-surface p-3 rounded-2xl border border-outline-variant/10">
                            <div className="text-primary font-bold mb-1 flex items-center gap-1.5">
                              <TrainFront size={14} /> 捷運路線
                            </div>
                            <p className="text-on-surface-variant">{loc.extraInfo.transport.mrt}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Accordion 2: 停車資訊 */}
                  <div className="border border-outline-variant/20 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <button
                      onClick={() => toggleSection(`${loc.id}-parking`)}
                      className="w-full flex items-center justify-between px-6 py-4 bg-surface-container-low/60 hover:bg-surface-container-low/90 transition-colors duration-200 cursor-pointer select-none text-left"
                    >
                      <span className="flex items-center gap-3 text-primary font-bold text-sm">
                        <ParkingCircle size={18} /> 停車與卸貨資訊
                      </span>
                      <span className="text-primary p-1 bg-primary-container/20 rounded-full">
                        {openSections[`${loc.id}-parking`] ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    {openSections[`${loc.id}-parking`] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden border-t border-outline-variant/10"
                      >
                        <div className="p-5 text-xs text-on-surface-variant leading-relaxed space-y-2 bg-surface">
                          <ul className="space-y-2 list-none text-[11px]">
                            {loc.extraInfo.parking.map((p, i) => (
                              <li key={i} className="flex gap-2 bg-white p-2.5 rounded-xl border border-outline-variant/10">
                                <span className="text-primary font-extrabold shrink-0">•</span>
                                <span className="text-on-surface-variant font-medium leading-relaxed">{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Accordion 3: 倉型&簡易價目表 */}
                  <div className="border border-outline-variant/20 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <button
                      onClick={() => toggleSection(`${loc.id}-pricing`)}
                      className="w-full flex items-center justify-between px-6 py-4 bg-surface-container-low/60 hover:bg-surface-container-low/90 transition-colors duration-200 cursor-pointer select-none text-left"
                    >
                      <span className="flex items-center gap-3 text-primary font-bold text-sm">
                        <LayoutGrid size={18} /> 倉型 & 簡易價目表
                      </span>
                      <span className="text-primary p-1 bg-primary-container/20 rounded-full">
                        {openSections[`${loc.id}-pricing`] ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    {openSections[`${loc.id}-pricing`] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden border-t border-outline-variant/10"
                      >
                        <div className="p-5 space-y-3.5 text-xs text-on-surface-variant leading-relaxed">
                          <p className="text-[10px] text-on-surface-variant/85 select-none font-medium">
                            ※ 點擊下方配置價目圖表，可放大檢視高解析度格局與尺寸：
                          </p>

                          <div 
                            onClick={() => setLightboxImage(loc.priceImg)}
                            className="relative group/chart border border-outline-variant/20 rounded-2xl overflow-hidden cursor-zoom-in bg-white"
                          >
                            <img 
                              src={loc.priceImg} 
                              alt={`${loc.name} 價目配置表`} 
                              className="w-full h-auto object-contain max-h-48 group-hover/chart:scale-[1.02] transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/chart:opacity-100 flex items-center justify-center transition-opacity duration-300 gap-2 text-white font-bold text-xs">
                              <Maximize2 size={14} /> 點擊放大查看圖檔
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {loc.features.map((f, i) => (
                    <span key={i} className="bg-surface-container px-4 py-2 rounded-xl text-xs text-on-surface-variant font-medium"># {f}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-on-primary py-4 rounded-2xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation size={18} /> 路線導航
                  </a>
                  <a 
                    href="https://line.me/R/ti/p/@anb6544c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-primary/20 text-primary py-4 rounded-2xl font-bold hover:bg-primary/5 transition-all flex items-center justify-center"
                  >
                    聯繫客服
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Locations Tracking */}
        <section className="mt-24 text-center p-16 bg-surface-container rounded-[4rem] border border-outline-variant/30 relative overflow-hidden">
           <div className="relative z-10">
             <LayoutGrid className="mx-auto text-primary mb-6 w-12 h-12 opacity-50" />
             <h3 className="text-2xl font-bold text-primary mb-4">更多據點規劃中</h3>
             <p className="text-on-surface-variant mb-0 max-w-sm mx-auto">
                我們正在積極尋找下一個倉儲空間，歡迎聯繫我們。
             </p>
           </div>
           <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl -z-0" />
        </section>
      </div>

      {/* Interactive Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center" 
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute -top-14 right-0 bg-white/10 text-white hover:bg-white/20 p-2.5 rounded-full transition-all border border-white/10 cursor-pointer"
                title="關閉"
              >
                <X size={20} />
              </button>
              <div className="bg-white p-3 rounded-[2rem] shadow-2xl overflow-hidden max-h-[75vh] flex items-center justify-center">
                <img 
                  src={lightboxImage} 
                  alt="價格/配置表圖檔" 
                  className="max-w-full max-h-[72vh] object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-white text-xs">
                <span className="opacity-70 text-center">點擊任意空白處即可關閉</span>
                <span className="hidden sm:inline opacity-30">|</span>
                <a 
                  href={lightboxImage} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary hover:underline flex items-center gap-1.5 font-bold"
                >
                  <ExternalLink size={14} /> 另開視窗觀看高畫質大圖
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
