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
      maxPrice: maxPriceParam ? Number(maxPriceParam) : 500000,
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
    if (updated.maxPrice < 500000) params.set('maxPrice', updated.maxPrice.toString());
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
      maxPrice: 500000,
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
    if (filters.maxPrice < 500000) {
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
      className="products-page py-10 bg-light min-h-screen font-poppins"
    >
      <Helmet>
        <title>Sản Phẩm Dép Thời Trang | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Khám phá toàn bộ sản phẩm dép sandal, dép lào, dép cao gót và dép thể thao chính hãng ABABAS."
        />
        <link rel="canonical" href="https://ababas.netlify.app/san-pham" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="bg-white rounded-card p-6 sm:p-10 mb-8 border border-gray-100 shadow-sm text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            <span>Bộ Sưu Tập Đầy Đủ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-navy mb-2">
            Tất Cả Mẫu Dép ABABAS
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto">
            Khám phá 24 mẫu thiết kế đúc nguyên khối siêu nhẹ, đệm bọt khí êm ái và phong cách dẫn đầu xu hướng.
          </p>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Desktop Filter Sidebar (Sticky) */}
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
            <div className="bg-white rounded-card p-4 border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs sm:text-sm font-semibold text-muted">
                Hiển thị <strong className="text-navy">{filteredProducts.length}</strong> / {products.length} sản phẩm
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Trigger Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-btn bg-primary text-white text-xs font-bold shadow-sm"
                >
                  <SlidersHorizontal size={14} />
                  <span>Lọc ({filters.category.length + filters.colors.length + filters.sizes.length})</span>
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <ArrowUpDown size={14} className="text-muted" />
                  <select
                    value={filters.sort}
                    onChange={(e) => updateFiltersAndURL({ sort: e.target.value, page: 1 })}
                    className="bg-light border border-gray-200 text-xs font-bold text-navy px-3 py-2 rounded-btn focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="newest">Mới Nhất</option>
                    <option value="popular">Bán Chạy Nhất</option>
                    <option value="price-asc">Giá: Thấp Đến Cao</option>
                    <option value="price-desc">Giá: Cao Đến Thấp</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid */}
            <ProductGrid
              products={filteredProducts}
              isLoading={isLoading}
              itemsPerPage={9}
              currentPage={filters.page}
              onPageChange={(p) => updateFiltersAndURL({ page: p })}
            />

          </div>

        </div>

      </div>

      {/* MOBILE BOTTOM SHEET FILTER */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-navy"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto p-6 z-10 space-y-6 shadow-2xl"
            >
              {/* Drag Handle & Header */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-4" />
                <div className="w-full flex items-center justify-between">
                  <h3 className="text-base font-bold text-navy">Bộ Lọc Sản Phẩm</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-muted">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Filter Content */}
              <ProductFilter
                filters={filters}
                onFilterChange={updateFiltersAndURL}
                onResetFilters={handleResetFilters}
                totalResults={filteredProducts.length}
              />

              {/* Apply Button */}
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3.5 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-pill shadow-glow"
              >
                Áp Dụng ({filteredProducts.length} sản phẩm)
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
