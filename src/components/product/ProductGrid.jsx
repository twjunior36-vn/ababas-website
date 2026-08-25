import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import Skeleton from '../ui/Skeleton';
import { staggerContainerVariant, fadeUpVariant } from '../../utils/animations';

export default function ProductGrid({
  products = [],
  isLoading = false,
  itemsPerPage = 9,
  currentPage = 1,
  onPageChange,
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(itemsPerPage)].map((_, i) => (
          <Skeleton key={i} type="product-card" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-light rounded-card border border-dashed border-gray-200">
        <h3 className="font-poppins font-bold text-lg text-dark mb-2">
          Không tìm thấy sản phẩm nào
        </h3>
        <p className="text-sm text-muted">
          Hãy thử điều chỉnh bộ lọc hoặc tìm kiếm bằng từ khóa khác.
        </p>
      </div>
    );
  }

  // Pagination slice
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Products Grid */}
      <motion.div
        variants={staggerContainerVariant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {paginatedProducts.map((product) => (
          <motion.div key={product.id} variants={fadeUpVariant}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => onPageChange && onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3.5 py-2 rounded-btn border border-gray-200 text-xs font-semibold text-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-light transition-colors"
          >
            ← Trước
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            const isActive = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange && onPageChange(pageNum)}
                className={`w-9 h-9 rounded-btn text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'bg-white border border-gray-200 text-dark hover:bg-light'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => onPageChange && onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3.5 py-2 rounded-btn border border-gray-200 text-xs font-semibold text-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-light transition-colors"
          >
            Sau →
          </button>
        </div>
      )}
    </div>
  );
}
