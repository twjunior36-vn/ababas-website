import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { ANNOUNCEMENT_MESSAGES } from '../../utils/constants';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(() => {
    return localStorage.getItem('ababas_hide_announcement') !== 'true';
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate messages every 3s
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('ababas_hide_announcement', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white text-xs sm:text-sm font-semibold py-2 px-4 relative z-40 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[22px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-center tracking-wide flex items-center gap-2"
          >
            <Sparkles size={14} className="text-gold" />
            <span>{ANNOUNCEMENT_MESSAGES[currentIndex]}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={handleClose}
        aria-label="Close announcement bar"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1 transition-colors"
      >
        <X size={15} />
      </button>
    </div>
  );
}
