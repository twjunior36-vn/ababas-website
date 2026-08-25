import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  Ruler,
  ShoppingBag,
  Heart,
  ChevronRight,
  Sparkles,
  Flame,
  CheckCircle2
} from 'lucide-react';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductCard from '../components/product/ProductCard';
import Badge from '../components/ui/Badge';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { formatVND } from '../utils/formatCurrency';
import { useUI } from '../context/UIContext';
import { pageTransitionVariant } from '../utils/animations';
import { trackProductView, trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { showToast } = useUI();
  const addToCartBtnRef = useRef(null);

  const product = getProductBySlug(slug);

  // States
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // 'description' | 'material' | 'reviews'
  const [sizeShake, setSizeShake] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  // Guard against not found
  useEffect(() => {
    if (!product) {
      navigate('/404', { replace: true });
      return;
    }
    trackPageView(`/san-pham/${slug}`, `${product.name} | ${BRAND_NAME}`);
    trackProductView(product);

    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    setSelectedSize(null);
    setQuantity(1);
  }, [slug, product, navigate]);

  // Sticky Add-to-Cart bar detection on mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (addToCartBtnRef.current) {
      observer.observe(addToCartBtnRef.current);
    }
    return () => observer.disconnect();
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeShake(true);
      showToast('⚠️ Vui lòng chọn kích cỡ (Size) dép trước khi thêm vào giỏ!', 'error');
      setTimeout(() => setSizeShake(false), 600);
      return;
    }

    showToast(`Đã thêm ${product.name} (Size ${selectedSize}, Màu ${selectedColor?.name || 'Tiêu chuẩn'}) vào giỏ hàng! 🎉`, 'success');
  };

  const relatedList = getRelatedProducts(product.id);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="product-detail-page py-8 bg-light min-h-screen font-poppins"
    >
      <Helmet>
        <title>{product.name} | {BRAND_NAME} – Dép Thời Trang</title>
        <meta name="description" content={`Mua ${product.name} giá ${formatVND(product.price)}. ${product.description}`} />
        <meta property="og:title" content={`${product.name} | ${BRAND_NAME}`} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:url" content={`https://ababas.netlify.app/san-pham/${product.slug}`} />
        <link rel="canonical" href={`https://ababas.netlify.app/san-pham/${product.slug}`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6 overflow-x-auto whitespace-nowrap py-1">
          <Link to="/" className="hover:text-primary">Trang Chủ</Link>
          <ChevronRight size={14} />
          <Link to="/san-pham" className="hover:text-primary">Sản Phẩm</Link>
          <ChevronRight size={14} />
          <Link to={`/san-pham?category=${product.category}`} className="hover:text-primary capitalize">
            {product.category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-navy font-bold">{product.name}</span>
        </div>

        {/* Main Product Layout (2 Columns) */}
        <div className="bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Column 1: Image Gallery */}
          <div>
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Column 2: Buy Info & Selection Controls */}
          <div className="space-y-6">
            
            {/* Badges & Stock */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                {product.isHot && <Badge variant="hot">HOT TREND</Badge>}
                {product.isNew && <Badge variant="new">MỚI</Badge>}
                {product.discount > 0 && <Badge variant="sale">Giảm {product.discount}%</Badge>}
              </div>

              {product.stock <= 5 && (
                <span className="text-xs font-semibold text-secondary-dark flex items-center gap-1 font-label">
                  <span className="w-2 h-2 rounded-full bg-secondary-dark animate-pulse" />
                  <span>Chỉ còn {product.stock} sản phẩm</span>
                </span>
              )}
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl font-bold font-headline text-dark leading-tight">
              {product.name}
            </h1>

            {/* Rating Stars & Sold Count */}
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill={i < Math.floor(product.rating) ? '#F59E0B' : 'none'}
                    stroke="#F59E0B"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-dark">{product.rating}</span>
              <span className="text-xs text-muted">({product.reviewCount} đánh giá)</span>
              <span className="text-border text-xs">•</span>
              <span className="text-xs text-muted">Đã bán: <strong className="text-dark">{product.soldCount}</strong></span>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-4 p-4 rounded-card bg-primary-light/50 border border-primary/20">
              <div className="text-3xl font-black text-primary">
                {formatVND(product.price)}
              </div>
              {product.originalPrice && (
                <div className="text-base text-muted line-through">
                  {formatVND(product.originalPrice)}
                </div>
              )}
            </div>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-navy mb-2.5">
                  Màu Sắc: <span className="text-primary font-black">{selectedColor?.name}</span>
                </div>
                <div className="flex gap-2.5">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor?.name === c.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        title={c.name}
                        className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${
                          isSelected ? 'border-primary ring-2 ring-primary ring-offset-2 scale-110' : 'border-gray-200 hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.hex }}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className={sizeShake ? 'animate-[shake_0.5s_ease_in_out]' : ''}>
              <div className="flex items-center justify-between mb-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-navy">
                  Kích Cỡ (Size): <span className="text-primary font-black">{selectedSize || 'Chưa chọn'}</span>
                </div>
                <Link
                  to="/huong-dan-size"
                  className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1"
                >
                  <Ruler size={14} />
                  <span>Hướng dẫn chọn size</span>
                </Link>
              </div>

              {/* Sizes Buttons */}
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => {
                  const isUnavailable = product.unavailableSizes?.includes(s);
                  const isSelected = selectedSize === s;

                  return (
                    <button
                      key={s}
                      disabled={isUnavailable}
                      onClick={() => setSelectedSize(s)}
                      className={`w-12 h-12 rounded-btn text-xs font-extrabold transition-all select-none ${
                        isUnavailable
                          ? 'bg-gray-100 text-gray-300 line-through cursor-not-allowed border border-gray-200'
                          : isSelected
                          ? 'bg-primary text-white shadow-glow border-2 border-primary scale-105'
                          : 'bg-white border-2 border-gray-200 text-navy hover:border-primary'
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              
              {/* Quantity Counter */}
              <div className="inline-flex items-center border-2 border-gray-200 rounded-pill p-1 bg-white self-start">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-navy hover:bg-light disabled:opacity-30"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-navy">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-navy hover:bg-light disabled:opacity-30"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <div ref={addToCartBtnRef} className="flex-1 flex gap-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 rounded-pill bg-primary hover:bg-primary-hover text-white font-bold text-sm uppercase tracking-wider shadow-glow hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag size={18} />
                  <span>Thêm Vào Giỏ – {formatVND(product.price * quantity)}</span>
                </button>

                <button
                  onClick={() => setIsWishlist(!isWishlist)}
                  aria-label="Wishlist"
                  className="p-3.5 rounded-pill border-2 border-gray-200 text-navy hover:text-red-500 hover:border-red-500 transition-colors"
                >
                  <Heart size={20} className={isWishlist ? 'text-red-500 fill-red-500' : ''} />
                </button>
              </div>

            </div>

            {/* Guarantee Micro Badges */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-xs text-muted">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck size={20} className="text-primary" />
                <span>Đúc EVA 100%</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw size={20} className="text-emerald-500" />
                <span>Đổi size 30 ngày</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck size={20} className="text-gold" />
                <span>Đồng kiểm khi nhận</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabs Section: Description, Material, Reviews */}
        <div className="mt-12 bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm">
          
          {/* Tab Header */}
          <div className="flex border-b border-gray-200 gap-8 mb-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 text-sm font-bold uppercase tracking-wider relative transition-colors ${
                activeTab === 'description' ? 'text-primary' : 'text-muted hover:text-navy'
              }`}
            >
              <span>Mô Tả Sản Phẩm</span>
              {activeTab === 'description' && (
                <motion.div layoutId="tabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('material')}
              className={`pb-4 text-sm font-bold uppercase tracking-wider relative transition-colors ${
                activeTab === 'material' ? 'text-primary' : 'text-muted hover:text-navy'
              }`}
            >
              <span>Chất Liệu & Bảo Quản</span>
              {activeTab === 'material' && (
                <motion.div layoutId="tabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-bold uppercase tracking-wider relative transition-colors ${
                activeTab === 'reviews' ? 'text-primary' : 'text-muted hover:text-navy'
              }`}
            >
              <span>Đánh Giá ({product.reviewCount})</span>
              {activeTab === 'reviews' && (
                <motion.div layoutId="tabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'description' && (
              <motion.div
                key="desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4 text-sm text-dark leading-relaxed"
              >
                <p>{product.description}</p>
                <div className="pt-4">
                  <h4 className="font-bold text-navy mb-2">Đặc điểm nổi bật:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted">
                    <li>Chất liệu EVA đàn hồi cao giúp giảm áp lực lên các khớp bàn chân.</li>
                    <li>Đế rãnh thoát nước chống trơn trượt hiệu quả ngay cả khi trời mưa.</li>
                    <li>Kiểu dáng trẻ trung, phù hợp mang đi học, đi chơi hoặc du lịch biển.</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'material' && (
              <motion.div
                key="mat"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4 text-sm text-dark leading-relaxed"
              >
                <p><strong>Thành phần chất liệu:</strong> {product.material}</p>
                <div className="pt-2">
                  <h4 className="font-bold text-navy mb-2">Hướng dẫn bảo quản:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted">
                    <li>Rửa sạch với nước thông thường và xà phòng loãng khi bám bẩn.</li>
                    <li>Tránh phơi trực tiếp dưới ánh nắng gay gắt trong nhiều giờ liền để giữ độ bền màu.</li>
                    <li>Bảo quản nơi khô ráo, thoáng mát.</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                key="rev"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 text-sm"
              >
                <div className="flex items-center gap-4 p-4 rounded-card bg-light border border-gray-100">
                  <div className="text-4xl font-black text-primary">{product.rating}</div>
                  <div>
                    <div className="flex text-gold mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
                      ))}
                    </div>
                    <p className="text-xs text-muted">100% đánh giá từ khách hàng đã mua sản phẩm</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-btn border border-gray-100 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-navy">Nguyễn Thanh Tùng</span>
                      <span className="text-xs text-muted">2 ngày trước</span>
                    </div>
                    <div className="flex text-gold"><Star size={12} fill="#FFD700" stroke="#FFD700" /> 5.0</div>
                    <p className="text-xs text-muted">Dép đi êm cực kỳ, form chuẩn size chân. Giao hàng 2 ngày là nhận được.</p>
                  </div>

                  <div className="p-4 rounded-btn border border-gray-100 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-navy">Lê Minh Anh</span>
                      <span className="text-xs text-muted">1 tuần trước</span>
                    </div>
                    <div className="flex text-gold"><Star size={12} fill="#FFD700" stroke="#FFD700" /> 5.0</div>
                    <p className="text-xs text-muted">Màu cam cháy ở ngoài nhìn sang hơn trong ảnh, đóng gói hộp xịn sò.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Related Products */}
        {relatedList.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Gợi Ý Thêm</span>
                <h2 className="text-2xl font-black text-navy">Sản Phẩm Tương Tự</h2>
              </div>
              <Link to="/san-pham" className="text-xs font-bold text-primary hover:text-primary-hover">
                Xem tất cả →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedList.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* MOBILE STICKY ADD-TO-CART BAR */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md p-4 border-t border-gray-200 shadow-2xl flex items-center justify-between sm:hidden"
          >
            <div>
              <div className="text-xs font-bold text-navy line-clamp-1">{product.name}</div>
              <div className="text-sm font-black text-primary">{formatVND(product.price)}</div>
            </div>
            <button
              onClick={handleAddToCart}
              className="px-5 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-pill shadow-glow"
            >
              Thêm Vào Giỏ
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
      `}</style>
    </motion.div>
  );
}
