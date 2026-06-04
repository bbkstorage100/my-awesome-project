import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Locations from './pages/Locations';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import LiffSubmit from './pages/LiffSubmit';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Global interceptor for secure LIFF transit parameters
function GlobalLiffInterceptor() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payload = params.get('payload');
    if (payload && location.pathname !== '/liff-submit') {
      navigate(`/liff-submit?payload=${encodeURIComponent(payload)}`, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalLiffInterceptor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/liff-submit" element={<LiffSubmit />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
