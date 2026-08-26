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
        
        {/* Header matching Stitch */}
        <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-primary mb-12 text-center">
          Lookbook
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          
          {/* Main Large Bento Item (2 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-card relative group overflow-hidden h-[340px] sm:h-[420px] md:h-full cursor-pointer"
          >
            <div
              className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${mainLookbook.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <h3 className="text-2xl sm:text-3xl font-quicksand font-bold mb-2">
                {mainLookbook.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-montserrat max-w-md mb-4 line-clamp-2">
                {mainLookbook.outfit}
              </p>
              <Link
                to="/lookbook"
                className="inline-flex items-center gap-1.5 font-montserrat font-bold text-xs sm:text-sm text-secondary-fixed-dim hover:text-white transition-colors"
              >
                <span>Khám phá</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Side Stack (2 Rows) */}
          <div className="flex flex-col gap-6 h-[480px] md:h-full">
            {sideLookbooks.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card flex-1 relative group overflow-hidden cursor-pointer"
              >
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h4 className="text-lg sm:text-xl font-quicksand font-bold mb-1">
                    {item.title}
                  </h4>
                  <Link
                    to="/lookbook"
                    className="inline-flex items-center gap-1 text-xs font-montserrat font-bold text-secondary-fixed-dim hover:text-white transition-colors"
                  >
                    <span>Khám phá</span>
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
