import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { collections } from '../data/collections';
import { pageTransitionVariant, staggerContainerVariant, fadeUpVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function Collections() {
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView('/bo-suu-tap', `Bộ Sưu Tập | ${BRAND_NAME}`);
  }, []);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="collections-page py-12 bg-background min-h-screen"
    >
      <Helmet>
        <title>Bộ Sưu Tập Dép Thời Trang | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Khám phá các bộ sưu tập dép Clog bánh mì, Sandal EVA và Charm 3D độc quyền từ thương hiệu ABABAS."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="glass-card p-8 sm:p-14 mb-12 text-center bg-surface-cream">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-montserrat font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-secondary" />
            <span>Concepts & Lookbook 2024 – 2025</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-quicksand font-bold text-primary mb-4">
            Bộ Sưu Tập ABABAS
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant font-montserrat max-w-xl mx-auto">
            Mỗi bộ sưu tập là một câu chuyện phong cách riêng biệt, mang tinh thần tự do và năng động của thế hệ trẻ.
          </p>
        </div>

        {/* Collections Masonry Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {collections.map((col) => (
            <motion.div
              key={col.id}
              variants={fadeUpVariant}
              onClick={() => navigate(`/bo-suu-tap/${col.slug}`)}
              className="glass-card group cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div className="h-72 overflow-hidden bg-surface-container relative p-6 flex items-center justify-center">
                <img
                  src={col.image}
                  alt={col.name}
                  loading="lazy"
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-montserrat font-bold text-dark">
                  {col.itemCount} sản phẩm
                </div>
              </div>

              <div className="p-8 bg-surface-cream flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-quicksand font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                    {col.name}
                  </h2>
                  <p className="text-sm text-on-surface-variant font-montserrat line-clamp-2 mb-6 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-xs font-montserrat font-bold text-secondary group-hover:text-primary transition-colors flex items-center gap-1.5">
                    <span>Xem tất cả sản phẩm</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-xs text-muted font-montserrat">
                    Ra mắt {col.season || '2024'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
