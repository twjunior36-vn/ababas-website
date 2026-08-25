import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Eye } from 'lucide-react';
import { trackEvent } from '../analytics/ga';

export default function ProductCard({ product }) {
  if (!product) return null;

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const handleCardClick = () => {
    trackEvent('view_product_card', 'Ecommerce', product.name, product.price);
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border-light)',
        transition: 'var(--transition-normal)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      className="product-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
        e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.borderColor = 'var(--border-light)';
      }}
    >
      {/* Image & Badges Container */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '100%', backgroundColor: '#F8F9FB', overflow: 'hidden' }}>
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="product-image"
        />

        {/* Badges */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 2 }}>
          {product.badge && (
            <span
              className={`badge ${product.badge.toLowerCase().includes('hot') ? 'badge-hot' : product.badge.toLowerCase().includes('best') ? 'badge-hot' : 'badge-new'}`}
            >
              {product.badge}
            </span>
          )}
          {product.discountPercent && (
            <span className="badge badge-sale">
              -{product.discountPercent}%
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <Link
          to={`/products/${product.id}`}
          onClick={handleCardClick}
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            color: 'var(--color-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-md)',
            zIndex: 2,
            transition: 'var(--transition-fast)'
          }}
          title="Xem chi tiết"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = 'var(--color-secondary)';
          }}
        >
          <Eye size={18} />
        </Link>
      </div>

      {/* Product Content Details */}
      <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <div style={{ display: 'flex', color: 'var(--color-star)' }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(product.rating) ? 'var(--color-star)' : 'none'}
                  stroke="var(--color-star)"
                />
              ))}
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Product Name */}
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px', lineHeight: '1.4' }}>
            <Link
              to={`/products/${product.id}`}
              onClick={handleCardClick}
              style={{ color: 'var(--color-secondary)' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-secondary)')}
            >
              {product.name}
            </Link>
          </h3>

          {/* Colors available count */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {product.colors.length} màu sắc:
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-main)' }}>
              {product.colors.slice(0, 2).join(', ')}{product.colors.length > 2 ? '...' : ''}
            </span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-primary)' }}>
              {formatPrice(product.price)}
            </div>
            {product.originalPrice && (
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>

          <Link
            to={`/products/${product.id}`}
            onClick={handleCardClick}
            className="btn btn-outline-primary"
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <span>Chi tiết</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
