import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Tag } from 'lucide-react';
import { lookbooks, products } from '../data/products';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { formatVND } from '../utils/formatCurrency';

export default function Lookbook() {
  useEffect(() => {
    trackPageView('/lookbook', 'Lookbook Cảm Hứng Phối Đồ | Ababas');
  }, []);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="lookbook-page bg-background min-h-screen pb-20"
    >
      <Helmet>
        <title>Lookbook Ababas | Cảm Hứng Phối Đồ & Phong Cách Giới Trẻ</title>
        <meta
          name="description"
          content="Gợi ý cách mix & match trang phục thời trang cùng dép Clog EVA Ababas và Charm 3D độc đáo. Nổi bật cá tính mọi lúc mọi nơi."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-surface-cream py-14 sm:py-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-on-secondary-fixed rounded-full text-xs font-montserrat font-bold mb-4">
            <Sparkles size={14} className="text-secondary" />
            <span>Lookbook Collection 2024 – 2025</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-quicksand font-bold text-primary mb-4">
            Cảm Hứng Phối Đồ Cùng Ababas
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant font-montserrat max-w-2xl mx-auto">
            Không chỉ là một đôi dép êm ái, Ababas là mảnh ghép hoàn hảo cho outfit hằng ngày của bạn từ phong cách thanh lịch đến cá tính nổi loạn.
          </p>
        </div>
      </section>

      {/* Lookbook Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {lookbooks.map((item, idx) => {
            const product = products.find((p) => p.id === item.featuredProduct) || products[0];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card overflow-hidden flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-dark/70 backdrop-blur-md text-white text-xs font-bold font-montserrat px-3 py-1.5 rounded-full">
                    {item.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-surface-cream flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="font-quicksand font-bold text-xl text-primary mb-2">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-on-surface-variant font-montserrat mb-4 leading-relaxed">
                      {item.subtitle}
                    </p>

                    {/* Outfit description pill */}
                    <div className="bg-white p-3.5 rounded-xl border border-outline-variant/30 text-xs font-montserrat text-dark mb-6 flex items-start gap-2">
                      <Tag size={15} className="text-secondary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block mb-0.5">Gợi ý trang phục:</span>
                        <span className="text-muted">{item.outfit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Shoppable Product Card */}
                  <div className="pt-4 border-t border-outline-variant/30">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted font-montserrat block mb-2">
                      Sản phẩm trong ảnh:
                    </span>
                    <Link
                      to={`/san-pham/${product.slug}`}
                      className="flex items-center justify-between p-3 bg-white hover:bg-surface-cream rounded-xl border border-outline-variant/40 transition-colors group/item"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-contain bg-surface-container p-1"
                        />
                        <div>
                          <h3 className="font-quicksand font-bold text-xs text-dark line-clamp-1 group-hover/item:text-secondary">
                            {product.name}
                          </h3>
                          <span className="font-quicksand font-bold text-xs text-secondary">
                            {formatVND(product.price)}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-muted group-hover/item:text-secondary transition-transform group-hover/item:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
