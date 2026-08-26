import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { lookbooks } from '../../data/products';

export default function LookbookBento() {
  const mainLookbook = lookbooks[0];
  const sideLookbooks = lookbooks.slice(1, 3);

  return (
    <section className="w-full section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-dark rounded-full text-xs font-montserrat font-bold mb-3">
            <Sparkles size={14} className="text-secondary-rose" />
            <span>Mix & Match Style</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-dark mb-3">
            Lookbook & Cảm Hứng Phối Đồ
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant font-montserrat">
            Khám phá cách giới trẻ biến hóa phong cách mỗi ngày cùng dép Ababas và Charm 3D.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[580px]">
          
          {/* Main Large Bento Item (2 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-card relative group overflow-hidden h-[340px] sm:h-[420px] lg:h-full cursor-pointer"
          >
            <div
              className="bg-cover bg-center w-full h-full transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('${mainLookbook.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold font-montserrat mb-3">
                Outfit nổi bật
              </span>
              <h3 className="text-2xl sm:text-3xl font-quicksand font-bold mb-2">
                {mainLookbook.title}
              </h3>
              <p className="text-sm text-gray-200 font-montserrat max-w-md mb-4 line-clamp-2">
                {mainLookbook.outfit}
              </p>
              <Link
                to="/lookbook"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-montserrat font-bold text-white bg-primary px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors shadow-sm"
              >
                <span>Khám phá Lookbook</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Side Stack (2 Rows) */}
          <div className="flex flex-col gap-6 h-[480px] lg:h-full">
            {sideLookbooks.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card flex-1 relative group overflow-hidden cursor-pointer"
              >
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/15 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h4 className="text-lg sm:text-xl font-quicksand font-bold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-200 font-montserrat line-clamp-1 mb-2">
                    {item.subtitle}
                  </p>
                  <Link
                    to="/lookbook"
                    className="inline-flex items-center gap-1 text-xs font-bold text-secondary-container hover:text-white transition-colors"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
