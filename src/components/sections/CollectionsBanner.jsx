import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { collections } from '../../data/products';

export default function CollectionsBanner() {
  return (
    <section className="w-full section-padding bg-surface-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-dark rounded-full text-xs font-montserrat font-bold mb-3">
              <Sparkles size={14} className="text-secondary-rose" />
              <span>Dòng sản phẩm độc quyền</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-dark mb-2">
              Bộ Sưu Tập Nổi Bật
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant font-montserrat">
              Từ êm ái hàng ngày đến phong cách dạo phố cá tính.
            </p>
          </div>

          <Link
            to="/bo-suu-tap"
            className="inline-flex items-center gap-2 text-sm font-montserrat font-bold text-secondary-rose hover:text-primary transition-colors"
          >
            <span>Xem tất cả bộ sưu tập</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Collections 4-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card group flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div className="h-56 overflow-hidden bg-surface-container flex items-center justify-center p-6 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 bg-surface-cream flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-quicksand font-bold text-lg text-dark group-hover:text-primary transition-colors mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-montserrat line-clamp-2 mb-4 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <Link
                  to={`/bo-suu-tap/${item.slug}`}
                  className="inline-flex items-center justify-between text-xs font-montserrat font-bold text-dark group-hover:text-primary pt-3 border-t border-outline-variant/30 transition-colors"
                >
                  <span>Khám phá ngay</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
