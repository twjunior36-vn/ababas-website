import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

// Context Providers
import { UIProvider } from './context/UIContext';
import { SearchProvider } from './context/SearchContext';

// Layout & Global Components
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Toast from './components/ui/Toast';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import CollectionDetail from './pages/CollectionDetail';
import Partners from './pages/Partners';
import About from './pages/About';
import Contact from './pages/Contact';
import Lookbook from './pages/Lookbook';
import SearchResults from './pages/SearchResults';
import SizeGuide from './pages/SizeGuide';
import Policy from './pages/Policy';
import NotFound from './pages/NotFound';

import { initGA } from './utils/analytics';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/san-pham" element={<Products />} />
        <Route path="/san-pham/:slug" element={<ProductDetail />} />
        <Route path="/bo-suu-tap" element={<Collections />} />
        <Route path="/bo-suu-tap/:slug" element={<CollectionDetail />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/doi-tac" element={<Partners />} />
        <Route path="/ve-chung-toi" element={<About />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/tim-kiem" element={<SearchResults />} />
        <Route path="/huong-dan-size" element={<SizeGuide />} />
        <Route path="/chinh-sach" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <UIProvider>
        <SearchProvider>
          <Router>
            <ScrollToTop />
            <Toast />
            <div className="flex flex-col min-h-screen bg-light text-dark font-poppins selection:bg-primary selection:text-white">
              <AnnouncementBar />
              <Navbar />
              <main className="flex-grow">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </Router>
        </SearchProvider>
      </UIProvider>
    </HelmetProvider>
  );
}
