import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Monitor, Shield, Navigation, LayoutGrid } from 'lucide-react';

export default function Locations() {
  const locations = [
    {
      id: "xinzhuang-fuda",
      name: "新莊輔大倉",
      address: "新北市新莊區建國一路 100 號",
      phone: "02-2277-XXXX",
      hours: "24H 全民進出",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs-z2U3OQ5I3-a-pYFvj394Qf-wI020_0yXmHREz9fE1JvjY5W6Y-9L5C_6R2H-YI9Rz3H1N1N",
      features: ["捷運站步行 5 分鐘", "專屬卸貨區", "智慧門禁系統"]
    },
    {
      id: "tucheng-central",
      name: "土城中央倉",
      address: "新北市土城區中央路三段 80 號",
      phone: "02-2266-XXXX",
      hours: "24H 全民進出",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs-z2U3OQ5I3-a-pYFvj394Qf-wI020_0yXmHREz9fE1JvjY5W6Y-9L5C_6R2H-YI9Rz3H1N1N",
      features: ["近土城交流道", "溫濕度恆控", "全室錄影監控"]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-on-surface mb-6"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8j3NEOnWtvYZtR2Kk3JZ1NcGMbC_rYQHNjV2hInl7oLN5kccKLqiGneCi42AW_D1eQwbQnhQwPqIj4Y4LIggrmZ5mv00P6WsGjQpe2MMbPcbBEeHjM1_tpcYikw4E69yxSasQ7Bd6hdqdHoIDvVFfBiLbfDlaO4AD0M47Gv9tnoZiZFs2rpCZxgWnNeBHD2KW2JT1o5UMixadGO2lqDEpyulTX8d9xcGCXvIYuJWnpQpO5bO7GP5NT9c_Jm372ChyAu_LkArUOida" 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2">
                  <Shield size={14} /> 專業保全
                </div>
              </div>
              
              <div className="p-10">
                <h2 className="text-3xl font-bold text-on-surface mb-6">{loc.name}</h2>
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
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {loc.features.map((f, i) => (
                    <span key={i} className="bg-surface-container px-4 py-2 rounded-xl text-xs text-on-surface-variant font-medium"># {f}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-primary text-on-primary py-4 rounded-2xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    <Navigation size={18} /> 路線導航
                  </button>
                  <button className="flex-1 border-2 border-primary/20 text-primary py-4 rounded-2xl font-bold hover:bg-primary/5 transition-all">
                    實地參觀
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Locations Tracking */}
        <section className="mt-24 text-center p-16 bg-surface-container rounded-[4rem] border border-outline-variant/30 relative overflow-hidden">
           <div className="relative z-10">
             <LayoutGrid className="mx-auto text-primary mb-6 w-12 h-12 opacity-50" />
             <h3 className="text-2xl font-bold mb-4">更多據點規劃中</h3>
             <p className="text-on-surface-variant mb-0 max-w-sm mx-auto">
                我們正積極尋找下一個極簡空間。板橋、中和、永和據點即將登場。
             </p>
           </div>
           <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl -z-0" />
        </section>
      </div>
    </div>
  );
}
