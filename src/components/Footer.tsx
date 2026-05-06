import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-2">
          <Link to="/" className="flex items-center mb-6">
            <img 
              src="input_file_0.png" 
              alt="擺寶庫 Logo" 
              className="h-14 w-auto"
            />
          </Link>
          <p className="text-on-surface-variant max-w-sm text-base leading-relaxed">
            Bringing peace of mind to your space. <br />
            透過整理，我們共同創造更有呼吸感的生活品質。以日式簡約美學為核心，為您打造理想的微型倉儲方案。
          </p>
        </div>

        <div>
          <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-6">聯絡資訊</h4>
          <ul className="space-y-4">
            <li className="text-sm text-on-surface-variant">
              Email: <a href="mailto:bbkstorage100@gmail.com" className="hover:text-primary underline decoration-primary/30">bbkstorage100@gmail.com</a>
            </li>
            <li className="text-sm text-on-surface-variant">
              <a href="#" className="hover:text-primary underline decoration-primary/30">Line Official</a>
            </li>
            <li className="text-sm text-on-surface-variant">
              <a href="#" className="hover:text-primary underline decoration-primary/30">Facebook Page</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-6">法律條款</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-sm text-on-surface-variant hover:text-primary underline decoration-primary/30">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-sm text-on-surface-variant hover:text-primary underline decoration-primary/30">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-outline-variant/10 text-center">
        <p className="text-on-surface-variant text-xs opacity-70">
          © 2024 Kanketsu Storage. Bringing peace of mind to your space.
        </p>
      </div>
    </footer>
  );
}
