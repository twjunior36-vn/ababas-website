import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingBag } from 'lucide-react';
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={handleCardClick}
      className="glass-card group cursor-pointer select-none relative flex flex-col justify-between"
    >
      {/* Badges Stack (Top-Left) */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
        {product.isHot && (
          <span className="bg-secondary-container text-on-secondary-fixed text-xs font-montserrat font-bold px-3 py-1 rounded-full shadow-2xs">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="bg-tertiary text-on-tertiary text-xs font-montserrat font-bold px-3 py-1 rounded-full shadow-2xs">
            New Arrival
          </span>
        )}
      </div>

      {/* Wishlist Button (Top-Right) */}
      <button
        onClick={handleWishlistClick}
        aria-label="Yêu thích"
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:text-secondary transition-colors shadow-2xs"
      >
        <Heart
          size={16}
          className={`transition-colors ${isWishlisted ? 'text-secondary fill-secondary' : 'text-primary'}`}
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
          {/* Title */}
          <h3 className="font-quicksand font-bold text-lg text-primary group-hover:text-secondary transition-colors line-clamp-1 leading-snug mb-1">
            {product.name}
          </h3>

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-xs text-muted font-montserrat">Màu:</span>
              <div className="flex gap-1.5">
                {product.colors.map((c) => (
                  <span
                    key={c.name}
                    title={c.name}
                    className="w-3 h-3 rounded-full border border-outline-variant/60 shadow-2xs"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price & Action Button */}
        <div>
          <p className="font-montserrat font-bold text-base text-on-surface-variant mb-4">
            {formatVND(product.price)}
          </p>

          <button
            onClick={handleQuickAdd}
            className="w-full btn-secondary py-3 text-xs font-bold"
          >
            <ShoppingBag size={14} />
            <span>Thêm vào giỏ</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
