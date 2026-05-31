import { Link } from 'react-router-dom';
import { Phone, Smartphone, MessageCircle, PhoneCall, Facebook, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="col-span-1">
          <Link to="/" className="flex items-center mb-6">
            <img 
              src="https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/20260515%20Logo-360x120%20T.png" 
              alt="擺寶庫迷你倉 Logo" 
              className="h-[60px] md:h-[72px] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-on-surface-variant max-w-sm text-base leading-relaxed">
            Bringing peace of mind to your space. <br />
            透過整理，我們共同創造更有呼吸感的生活品質。以客為本，為您打造理想的微型倉儲方案。
          </p>
        </div>

        <div>
          <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-6">聯絡資訊</h4>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-on-surface-variant">
              <Phone size={16} className="text-primary" />
              <span>代表號：(02)2906-6337</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-on-surface-variant">
              <Smartphone size={16} className="text-primary" />
              <span>手機：0908-775-797</span>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors" title="LINE ID: @anb6544c">
              <MessageCircle size={20} />
            </a>
            <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors" title="LINE 免費通話">
              <PhoneCall size={20} />
            </a>
            <a href="https://www.facebook.com/bbk100storage" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors" title="Facebook">
              <Facebook size={20} />
            </a>
            <a href="mailto:bbkstorage100@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors" title="Email">
              <Mail size={20} />
            </a>
            <a href="https://www.bbkstorage.com.tw" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors" title="Official Website">
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-outline-variant/10 text-center">
        <p className="text-on-surface-variant text-xs opacity-70">
          Copyright © {new Date().getFullYear()} 擺寶庫實業有限公司 . All rights reserved. 本網站部分內容/圖片由 AI 生成.
        </p>
      </div>
    </footer>
  );
}
