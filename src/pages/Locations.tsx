import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Shield, Navigation, LayoutGrid, Bus, TrainFront, ParkingCircle, CalendarCheck, User, UserRound } from 'lucide-react';

export default function Locations() {
  const locations = [
    {
      id: "xinzhuang-fuda-1",
      name: "新莊輔大1倉",
      address: "新北市新莊區中正路651-1號6樓(遠東動力園區)",
      phone: "(02)2906-6337",
      hours: "24H憑門禁卡自由進出",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-651-6F/20240423_153944-1.png",
      features: ["捷運站步行 5 分鐘", "專屬卸貨區", "智慧門禁系統"],
      extraInfo: {
        appointment: "參觀倉儲採預約制",
        toilet: "大樓提供廁所",
        transport: {
          bus: "111、235、637、638、639、801、802、藍2",
          mrt: "中和新蘆線"
        },
        parking: [
          "遠東動力園區卸貨碼頭1F/B1，免費臨時卸貨停車。",
          "1F：上班時間開放(9:00AM ~ 06:00PM)",
          "B1：卸貨碼頭24小時開放(卸貨臨停要請管理室放下停車位欄杆)。",
          "或由中正路的地下停車場入口進入園區，地下二樓也有付費停車位。"
        ]
      }
    },
    {
      id: "xinzhuang-fuda-2",
      name: "新莊輔大2倉",
      address: "新北市新莊區中正路651-1號8樓(遠東動力園區)",
      phone: "(02)2906-6337",
      hours: "24H憑門禁卡自由進出",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-651-8F/1719560262092-1.png",
      features: ["捷運站步行 5 分鐘", "專屬卸貨區", "智慧門禁系統"],
      extraInfo: {
        appointment: "參觀倉儲採預約制",
        toilet: "大樓提供廁所",
        transport: {
          bus: "111、235、637、638、639、801、802、藍2",
          mrt: "中和新蘆線"
        },
        parking: [
          "遠東動力園區卸貨碼頭1F/B1，免費臨時卸貨停車。",
          "1F：上班時間開放(9:00AM ~ 06:00PM)",
          "B1：卸貨碼頭24小時開放(卸貨臨停要請管理室放下停車位欄杆)。",
          "或由中正路的地下停車場入口進入園區，地下二樓也有付費停車位。"
        ]
      }
    },
    {
      id: "tucheng-central",
      name: "土城中央倉",
      address: "新北市土城區中央路二段209號B1",
      phone: "(02)2906-6337",
      hours: "24H憑門禁卡自由進出",
      img: "https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/S-209-B1/20230331_191055-1.png",
      features: ["近土城交流道", "溫濕度恆控", "全室錄影監控"],
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
            我們選址於城市便利的地段，結合高品質的安全技術，讓您的物品在離家不遠處也能享有尊榮款待。
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
                <h2 className="text-3xl font-bold text-primary mb-6">{loc.name}</h2>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-surface-container/50 rounded-3xl border border-outline-variant/10">
                    <h4 className="flex items-center gap-2 text-primary font-bold text-sm mb-3">
                      <Bus size={16} /> 大眾運輸
                    </h4>
                    <div className="space-y-2 text-[11px] leading-relaxed">
                      <div>
                        <div className="text-on-surface-variant/60 font-bold mb-0.5 flex items-center gap-1">
                          <Bus size={10} /> 公車
                        </div>
                        <p className="text-on-surface-variant">{loc.extraInfo.transport.bus}</p>
                      </div>
                      <div>
                        <div className="text-on-surface-variant/60 font-bold mb-0.5 flex items-center gap-1">
                          <TrainFront size={10} /> 捷運
                        </div>
                        <p className="text-on-surface-variant">{loc.extraInfo.transport.mrt}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-surface-container/50 rounded-3xl border border-outline-variant/10">
                    <h4 className="flex items-center gap-2 text-primary font-bold text-sm mb-3">
                      <ParkingCircle size={16} /> 停車資訊
                    </h4>
                    <ul className="space-y-1.5 text-[11px] text-on-surface-variant list-none leading-relaxed">
                      {loc.extraInfo.parking.map((p, i) => (
                        <li key={i} className="flex gap-1.5">
                          <span className="text-primary mt-1 shrink-0">•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
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
    </div>
  );
}
