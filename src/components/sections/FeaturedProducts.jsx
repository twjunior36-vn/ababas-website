import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import Button from '../ui/Button';
import { getFeaturedProducts } from '../../data/products';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainerVariant, fadeUpVariant } from '../../utils/animations';

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const [sectionRef, isVisible] = useScrollAnimation();
  const featured = getFeaturedProducts();

  return (
    <section id="featured-products-section" ref={sectionRef} className="py-20 bg-light font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Flame size={15} />
            <span>Top Bán Chạy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-sm sm:text-base text-muted">
            Những mẫu dép được yêu thích nhất với thiết kế êm ái, bền bỉ và thời thượng.
          </p>
        </div>

        {/* 6 Featured Products Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={fadeUpVariant}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/san-pham')}
            icon={<ArrowRight size={18} />}
          >
            Xem Tất Cả Sản Phẩm
          </Button>
        </div>

      </div>
    </section>
  );
}
