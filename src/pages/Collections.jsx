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
        <link rel="canonical" href="https://ababas.netlify.app/bo-suu-tap" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="glass-card p-8 sm:p-14 mb-12 text-center bg-surface-cream">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-dark text-xs font-montserrat font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-secondary-rose" />
            <span>Concepts & Lookbook 2024 – 2025</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-quicksand font-bold text-dark mb-4">
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
              className="glass-card overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container flex items-center justify-center p-8">
                <img
                  src={col.image}
                  alt={col.name}
                  loading="lazy"
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 z-10 bg-dark/80 backdrop-blur-md text-white text-xs font-montserrat font-bold px-3 py-1 rounded-full">
                  {col.badge}
                </span>
                <span className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-md text-dark text-xs font-montserrat font-bold px-3 py-1 rounded-full shadow-sm">
                  {col.itemCount} Mẫu thiết kế
                </span>
              </div>

              <div className="p-8 bg-surface-cream flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-quicksand font-bold text-dark group-hover:text-primary transition-colors mb-2">
                    {col.title}
                  </h2>
                  <p className="text-sm text-on-surface-variant font-montserrat mb-6 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-xs font-montserrat font-bold text-dark group-hover:text-primary transition-colors">
                    Khám phá bộ sưu tập
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
