import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      className="collections-page py-10 bg-light min-h-screen font-poppins"
    >
      <Helmet>
        <title>Bộ Sưu Tập Dép Thời Trang | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Khám phá các bộ sưu tập dép thời trang mới nhất của ABABAS: Hè 2025, Urban Streetwear, Classic Comfort và Limited Edition."
        />
        <link rel="canonical" href="https://ababas.netlify.app/bo-suu-tap" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="bg-white rounded-card p-8 sm:p-12 mb-10 border border-gray-100 shadow-sm text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            <span>Lookbook & Concepts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy mb-3">
            Bộ Sưu Tập ABABAS
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto">
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
              className="group relative h-[420px] rounded-card overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 select-none"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent p-8 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider bg-primary text-white px-3 py-1 rounded-pill">
                    {col.badge}
                  </span>
                  <span className="text-xs text-gray-300 font-semibold">{col.itemCount} Mẫu</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {col.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 mb-6 line-clamp-2">
                  {col.description}
                </p>

                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm bg-white/10 px-5 py-2.5 rounded-pill self-start group-hover:bg-primary group-hover:text-white transition-all">
                  <span>Khám Phá Bộ Sưu Tập</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
