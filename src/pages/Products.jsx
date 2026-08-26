import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import { products } from '../data/products';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize filters from URL
  const [filters, setFilters] = useState(() => {
    const categoryParam = searchParams.get('category');
    const colorParam = searchParams.get('color');
    const sizeParam = searchParams.get('size');
    const maxPriceParam = searchParams.get('maxPrice');
    const sortParam = searchParams.get('sort');
    const pageParam = searchParams.get('page');

    return {
      category: categoryParam ? categoryParam.split(',') : [],
      colors: colorParam ? colorParam.split(',') : [],
      sizes: sizeParam ? sizeParam.split(',').map(Number) : [],
      minPrice: 0,
      maxPrice: maxPriceParam ? Number(maxPriceParam) : 600000,
      sort: sortParam || 'newest',
      page: pageParam ? Number(pageParam) : 1,
    };
  });

  useEffect(() => {
    trackPageView('/san-pham', `Tất Cả Sản Phẩm | ${BRAND_NAME}`);
  }, []);

  // Sync state changes to URL Params
  const updateFiltersAndURL = (newFilterValues) => {
    setIsLoading(true);
    const updated = { ...filters, ...newFilterValues };
    setFilters(updated);

    const params = new URLSearchParams();
    if (updated.category.length > 0) params.set('category', updated.category.join(','));
    if (updated.colors.length > 0) params.set('color', updated.colors.join(','));
    if (updated.sizes.length > 0) params.set('size', updated.sizes.join(','));
    if (updated.maxPrice < 600000) params.set('maxPrice', updated.maxPrice.toString());
    if (updated.sort !== 'newest') params.set('sort', updated.sort);
    if (updated.page > 1) params.set('page', updated.page.toString());

    setSearchParams(params, { replace: true });

    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const handleResetFilters = () => {
    const defaultFilters = {
      category: [],
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 600000,
      sort: 'newest',
      page: 1,
    };
    setFilters(defaultFilters);
    setSearchParams({}, { replace: true });
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    // Color filter
    if (filters.colors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) =>
          filters.colors.some((fc) => c.name.toLowerCase().includes(fc.toLowerCase()))
        )
      );
    }

    // Size filter
    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => filters.sizes.includes(s))
      );
    }

    // Max price filter
    if (filters.maxPrice < 600000) {
      result = result.filter((p) => p.price <= filters.maxPrice);
    }

    // Sort
    if (filters.sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'popular') {
      result.sort((a, b) => b.soldCount - a.soldCount);
    } else {
      // 'newest'
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [filters]);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="products-page py-12 bg-background min-h-screen"
    >
      <Helmet>
        <title>Sản Phẩm Dép & Charm 3D | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Khám phá toàn bộ sản phẩm dép Clog bánh mì, Sandal EVA và Set Charm 3D chính hãng ABABAS."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="glass-card p-8 sm:p-14 mb-10 text-center bg-surface-cream">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-montserrat font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-secondary" />
            <span>Bộ Sưu Tập Đầy Đủ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-quicksand font-bold text-primary mb-3">
            Tất Cả Mẫu Dép & Phụ Kiện
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant font-montserrat max-w-xl mx-auto">
            Khám phá các thiết kế đúc bọt khí EVA nguyên khối siêu nhẹ, êm ái và phong cách dẫn đầu xu hướng.
          </p>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block sticky top-28">
            <ProductFilter
              filters={filters}
              onFilterChange={updateFiltersAndURL}
              onResetFilters={handleResetFilters}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Main Products Grid Area (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Top Toolbar: Count + Sort */}
            <div className="glass-card p-4 bg-white flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs sm:text-sm font-semibold text-muted font-montserrat">
                Hiển thị <strong className="text-primary font-bold">{filteredProducts.length}</strong> / {products.length} sản phẩm
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Trigger Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden btn-secondary py-2 px-3 text-xs"
                >
                  <SlidersHorizontal size={14} />
                  <span>Bộ lọc</span>
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <ArrowUpDown size={14} className="text-muted" />
                  <select
                    value={filters.sort}
                    onChange={(e) => updateFiltersAndURL({ sort: e.target.value, page: 1 })}
                    className="text-xs font-montserrat font-bold bg-surface-cream border border-outline-variant rounded-full px-3.5 py-2 text-dark focus:outline-none focus:border-secondary cursor-pointer"
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="popular">Bán chạy nhất</option>
                    <option value="price-asc">Giá: Thấp đến Cao</option>
                    <option value="price-desc">Giá: Cao đến Thấp</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid products={filteredProducts} isLoading={isLoading} />

          </div>

        </div>

      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-dark/50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-4">
                  <span className="font-quicksand font-bold text-lg text-primary">Bộ Lọc Tìm Kiếm</span>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1 rounded-full text-muted hover:text-dark"
                  >
                    <X size={20} />
                  </button>
                </div>

                <ProductFilter
                  filters={filters}
                  onFilterChange={updateFiltersAndURL}
                  onResetFilters={handleResetFilters}
                  totalResults={filteredProducts.length}
                />
              </div>

              <div className="pt-4 border-t border-outline-variant/30 mt-6">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="btn-primary w-full py-3 text-xs"
                >
                  Xem kết quả ({filteredProducts.length})
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
