import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, getFeaturedProducts } from '../data/products';
import { useDebounce } from '../hooks/useDebounce';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView, trackSearch } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const debouncedQuery = useDebounce(searchInput, 300);

  useEffect(() => {
    trackPageView(`/tim-kiem?q=${initialQuery}`, `Kết Quả Tìm Kiếm | ${BRAND_NAME}`);
    if (initialQuery) {
      trackSearch(initialQuery);
    }
  }, [initialQuery]);

  // Sync debounced search to URL
  useEffect(() => {
    if (debouncedQuery.trim()) {
      setSearchParams({ q: debouncedQuery.trim() }, { replace: true });
    }
  }, [debouncedQuery, setSearchParams]);

  // Filter products by query & category
  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    const q = debouncedQuery.toLowerCase();
    let list = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    return list;
  }, [debouncedQuery, selectedCategory]);

  const featuredFallback = getFeaturedProducts();

  const filterChips = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'sandal', label: 'Sandal' },
    { id: 'lao', label: 'Dép Lào' },
    { id: 'cao-got', label: 'Cao Gót' },
    { id: 'the-thao', label: 'Thể Thao' },
  ];

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="search-results-page py-10 bg-light min-h-screen font-poppins"
    >
      <Helmet>
        <title>Tìm Kiếm: {initialQuery || 'Sản Phẩm'} | {BRAND_NAME}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search Header Box */}
        <div className="bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-black text-navy">
            Tìm Kiếm Dép ABABAS
          </h1>

          <div className="relative max-w-xl mx-auto">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="text"
              placeholder="Nhập tên sản phẩm, loại dép, màu sắc..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-pill border-2 border-gray-200 focus:border-primary focus:outline-none text-sm font-medium"
            />
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {filterChips.map((chip) => (
              <button
                key={chip.id}
                onClick={() => setSelectedCategory(chip.id)}
                className={`px-3.5 py-1.5 rounded-pill text-xs font-bold transition-colors ${
                  selectedCategory === chip.id
                    ? 'bg-primary text-white'
                    : 'bg-light text-muted hover:text-navy border border-gray-200'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-muted">
            {debouncedQuery.trim() ? (
              <>
                Tìm thấy <strong className="text-navy">{searchResults.length}</strong> sản phẩm cho từ khóa "{debouncedQuery}"
              </>
            ) : (
              'Vui lòng nhập từ khóa để tìm kiếm'
            )}
          </div>
        </div>

        {/* Results Grid or Fallback */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-card p-12 border border-gray-100 shadow-sm text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
              <Sparkles size={32} />
            </div>
            <h3 className="text-lg font-bold text-navy">
              Không tìm thấy mẫu dép nào phù hợp với từ khóa "{debouncedQuery}"
            </h3>
            <p className="text-xs text-muted">
              Bạn có thể tham khảo một số mẫu dép bán chạy nhất dưới đây:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {featuredFallback.slice(0, 3).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
