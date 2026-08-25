import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, ArrowRight, Flame } from 'lucide-react';
import Badge from '../ui/Badge';
import { formatVND } from '../../utils/formatCurrency';
import { trackProductView } from '../../utils/analytics';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const handleCardClick = () => {
    trackProductView(product);
    navigate(`/san-pham/${product.slug}`);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={handleCardClick}
      className="group bg-white rounded-card overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer select-none relative font-poppins"
    >
      {/* Image & Badges Container */}
      <div className="relative w-full aspect-square bg-light overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges Stack (Top-Left) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isHot && <Badge variant="hot">HOT</Badge>}
          {product.isNew && <Badge variant="new">MỚI</Badge>}
          {product.discount > 0 && <Badge variant="sale">-{product.discount}%</Badge>}
        </div>

        {/* Wishlist Heart Button (Top-Right) */}
        <button
          onClick={handleWishlistClick}
          aria-label="Thêm vào danh sách yêu thích"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-navy hover:text-red-500 transition-colors border border-gray-100"
        >
          <Heart
            size={15}
            className={`transition-colors ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-500'}`}
          />
        </button>

        {/* Low Stock Warning Badge */}
        {product.stock <= 5 && (
          <div className="absolute bottom-3 left-3 z-10 bg-navy/90 text-gold text-[10px] font-bold px-2.5 py-0.5 rounded-pill flex items-center gap-1 backdrop-blur-xs">
            <Flame size={12} className="text-primary" />
            <span>Còn {product.stock} sản phẩm</span>
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill={i < Math.floor(product.rating) ? '#FFD700' : 'none'}
                  stroke="#FFD700"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-muted">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-sm text-navy group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Color preview dots */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-[11px] text-muted font-medium">Màu:</span>
              <div className="flex gap-1">
                {product.colors.map((c) => (
                  <span
                    key={c.name}
                    title={c.name}
                    className="w-3.5 h-3.5 rounded-full border border-gray-200"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price & Quick Action */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="font-black text-base text-primary">
              {formatVND(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-muted line-through">
                {formatVND(product.originalPrice)}
              </div>
            )}
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs font-bold text-navy group-hover:text-primary transition-colors"
          >
            <span>Chi tiết</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
