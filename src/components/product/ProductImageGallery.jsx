import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductImageGallery({ images = [], productName = '' }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImage = images[selectedIndex] || images[0];

  // Lightbox keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images.length]);

  return (
    <div className="space-y-4">
      {/* Main Image Showcase */}
      <div className="relative aspect-square w-full rounded-card overflow-hidden bg-light border border-gray-100 shadow-sm group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={productName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full object-cover cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)}
          />
        </AnimatePresence>

        {/* Zoom Lightbox Trigger */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-navy shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Phóng to ảnh"
        >
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-20 h-20 rounded-btn overflow-hidden border-2 flex-shrink-0 transition-all ${
                  isSelected ? 'border-primary shadow-sm scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${productName} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-black"
            />

            <div className="relative max-w-4xl max-h-[85vh] z-10 flex flex-col items-center">
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-primary p-2"
              >
                <X size={28} />
              </button>

              <img
                src={currentImage}
                alt={productName}
                className="max-w-full max-h-[80vh] rounded-card object-contain shadow-2xl"
              />

              {images.length > 1 && (
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-primary transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-primary transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
