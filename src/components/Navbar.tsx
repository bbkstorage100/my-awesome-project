import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '最新優惠', path: '/offers' },
    { name: '服務據點', path: '/locations' },
    { name: '常見問題', path: '/faq' },
    { name: '聯絡我們', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-28 md:h-32">
        <Link to="/" className="flex items-center">
          <img 
            src="https://ttmythpjaukwxdaapwlu.supabase.co/storage/v1/object/public/image/20260515%20Logo-360x120%20T.png" 
            alt="擺寶庫迷你倉 Logo" 
            className="h-[78px] md:h-[93px] w-auto object-contain animate-fadeIn"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
              } relative py-1`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
          <a href="https://line.me/R/ti/p/@anb6544c" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-bold active:scale-95 transition-transform">
            立即預約
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-surface-container border-b border-outline-variant/20 px-6 py-8 flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://line.me/R/ti/p/@anb6544c"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-on-primary text-center py-4 rounded-xl font-bold"
            >
              立即預約
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
