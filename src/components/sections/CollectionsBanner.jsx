import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { collections } from '../../data/collections';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainerVariant, fadeUpVariant } from '../../utils/animations';

export default function CollectionsBanner() {
  const navigate = useNavigate();
  const [sectionRef, isVisible] = useScrollAnimation();
  const displayCollections = collections.filter((c) => c.featured).slice(0, 3);

  return (
    <section ref={sectionRef} className="py-20 bg-white font-body border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-beige text-dark border border-border text-xs font-semibold uppercase tracking-wider mb-3 font-headline">
            <Sparkles size={14} className="text-primary" />
            <span>Lookbook & Concepts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark font-headline tracking-tight mb-3">
            Bộ Sưu Tập Mới Nhất
          </h2>
          <p className="text-sm sm:text-base text-muted font-body">
            Khám phá những phong cách độc đáo được thiết kế cho từng khoảnh khắc trong cuộc sống.
          </p>
        </div>

        {/* 3-Column Collections Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayCollections.map((col) => (
            <motion.div
              key={col.id}
              variants={fadeUpVariant}
              onClick={() => navigate(`/bo-suu-tap/${col.slug}`)}
              className="group relative h-96 rounded-card overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 select-none border border-border"
            >
              {/* Background Image */}
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Static Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-neutral/30 to-transparent" />

              {/* Sliding Full Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-neutral/85 flex flex-col justify-center items-center text-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <span className="text-xs font-semibold text-beige uppercase tracking-widest mb-2 font-headline">
                  {col.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 font-headline">
                  {col.name}
                </h3>
                <p className="text-xs text-gray-300 mb-6 line-clamp-3 font-body">
                  {col.description}
                </p>
                <div className="inline-flex items-center gap-2 text-white font-medium text-sm bg-primary px-5 py-2 rounded-pill hover:bg-primary-hover transition-colors font-headline">
                  <span>Khám Phá</span>
                  <ArrowRight size={15} />
                </div>
              </div>

              {/* Default Content at bottom */}
              <div className="absolute bottom-6 left-6 right-6 text-white group-hover:opacity-0 transition-opacity duration-200">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-beige text-dark px-2.5 py-0.5 rounded-pill mb-2 font-label">
                  {col.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-1 font-headline">
                  {col.name}
                </h3>
                <p className="text-xs text-gray-300 font-body">
                  {col.subtitle}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
