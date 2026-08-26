import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, ArrowRight, ShoppingBag } from 'lucide-react';
import { formatVND } from '../../utils/formatCurrency';
import { trackProductView, trackAddToCart } from '../../utils/analytics';
import { useUI } from '../../context/UIContext';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { showToast } = useUI();
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const handleCardClick = () => {
    trackProductView(product);
    navigate(`/san-pham/${product.slug}`);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    showToast(
      isWishlisted ? 'Đã xóa khỏi danh sách yêu thích' : 'Đã thêm vào danh sách yêu thích',
      'info'
    );
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    trackAddToCart(product);
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={handleCardClick}
      className="glass-card group cursor-pointer select-none relative flex flex-col justify-between"
    >
      {/* Badges Stack (Top-Left) */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
        {product.isHot && (
          <span className="bg-secondary-container text-dark text-xs font-montserrat font-bold px-3 py-1 rounded-full shadow-sm">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="bg-tertiary text-white text-xs font-montserrat font-bold px-3 py-1 rounded-full shadow-sm">
            Mới
          </span>
        )}
        {product.discount > 0 && (
          <span className="bg-primary text-white text-xs font-montserrat font-bold px-2.5 py-0.5 rounded-full shadow-sm">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Wishlist Button (Top-Right) */}
      <button
        onClick={handleWishlistClick}
        aria-label="Yêu thích"
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-dark hover:text-red-500 transition-colors shadow-sm"
      >
        <Heart
          size={16}
          className={`transition-colors ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
        />
      </button>

      {/* Image Container with Studio Backdrop */}
      <div className="h-64 overflow-hidden bg-surface-container flex items-center justify-center p-6 relative">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Product Information */}
      <div className="p-6 bg-surface-cream flex flex-col flex-grow justify-between gap-4">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(product.rating) ? '#D4AF37' : 'none'}
                  stroke="#D4AF37"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-muted">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-quicksand font-bold text-base text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-3">
              <span className="text-xs text-muted font-montserrat">Màu:</span>
              <div className="flex gap-1.5">
                {product.colors.map((c) => (
                  <span
                    key={c.name}
                    title={c.name}
                    className="w-3.5 h-3.5 rounded-full border border-outline-variant shadow-2xs"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price & Action Button */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-quicksand font-bold text-xl text-primary">
              {formatVND(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted line-through font-montserrat">
                {formatVND(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            className="w-full btn-secondary py-2.5 text-xs font-bold"
          >
            <ShoppingBag size={14} />
            <span>Thêm vào giỏ</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
