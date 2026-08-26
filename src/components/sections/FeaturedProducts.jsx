import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'clog') return p.category === 'clog';
    if (activeTab === 'sandal') return p.category === 'sandal';
    if (activeTab === 'charm') return p.category === 'charm';
    return true;
  }).slice(0, 4);

  return (
    <section className="w-full section-padding bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-primary mb-2">
              Sản Phẩm Bán Chạy
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant font-montserrat">
              Những mẫu dép được yêu thích nhất mùa này.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'clog', label: 'Dép Clog' },
                { id: 'sandal', label: 'Dép Bánh Mì' },
                { id: 'charm', label: 'Charm 3D' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-montserrat font-bold whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-secondary text-white shadow-sm'
                      : 'bg-white text-dark hover:bg-surface-cream border border-outline-variant/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <Link
              to="/san-pham"
              className="text-secondary font-bold text-xs font-montserrat hover:text-tertiary transition-colors hidden md:flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Xem tất cả</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/san-pham"
            className="btn-secondary text-xs"
          >
            <span>Xem tất cả sản phẩm</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
