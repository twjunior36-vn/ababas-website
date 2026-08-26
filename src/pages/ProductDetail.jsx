import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import Modal from '../components/ui/Modal';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { formatVND } from '../utils/formatCurrency';
import { useUI } from '../context/UIContext';
import { pageTransitionVariant } from '../utils/animations';
import { trackProductView, trackAddToCart, trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { showToast } = useUI();

  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product);

  // Component States
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [includeCharmAddon, setIncludeCharmAddon] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('specs'); // 'specs' | 'size' | 'shipping'

  // Initialize Product Data
  useEffect(() => {
    if (!product) {
      navigate('/404', { replace: true });
      return;
    }
    trackPageView(`/san-pham/${slug}`, `${product.name} | ${BRAND_NAME}`);
    trackProductView(product);

    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
      if (product.colors[0].images && product.colors[0].images.length > 0) {
        setSelectedImage(product.colors[0].images[0]);
      } else {
        setSelectedImage(product.images[0]);
      }
    } else {
      setSelectedImage(product.images[0]);
    }
    setSelectedSize(null);
    setQuantity(1);
    setIncludeCharmAddon(false);
  }, [slug, product, navigate]);

  if (!product) return null;

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (color.images && color.images.length > 0) {
      setSelectedImage(color.images[0]);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes && product.sizes.length > 0 && product.sizes[0] !== 'Free Size') {
      showToast('Vui lòng chọn size dép trước khi thêm vào giỏ!', 'warning');
      return;
    }

    trackAddToCart({
      ...product,
      selectedColor: selectedColor?.name,
      selectedSize,
      quantity,
      charmAddon: includeCharmAddon
    });

    const charmText = includeCharmAddon ? ' (Kèm Set Charm 3D)' : '';
    showToast(`Đã thêm ${quantity}x "${product.name}"${charmText} vào giỏ hàng!`, 'success');
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? '' : key);
  };

  const currentPrice = includeCharmAddon ? product.price + 69000 : product.price;

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="product-detail-page bg-background min-h-screen pb-20"
    >
      <Helmet>
        <title>{product.name} | {BRAND_NAME}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} | ${BRAND_NAME}`} />
        <meta property="og:image" content={product.images[0]} />
      </Helmet>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant font-montserrat">
          <li><Link to="/" className="hover:text-secondary transition-colors">Trang chủ</Link></li>
          <ChevronRight size={14} />
          <li><Link to="/san-pham" className="hover:text-secondary transition-colors">Sản phẩm</Link></li>
          <ChevronRight size={14} />
          <li className="font-bold text-dark truncate max-w-[200px] sm:max-w-xs">{product.name}</li>
        </ol>
      </nav>

      {/* Main Product Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Gallery (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Stage Image */}
            <div className="glass-card aspect-square bg-surface-container relative overflow-hidden flex items-center justify-center p-8">
              <img
                src={selectedImage || product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-110 cursor-zoom-in"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isHot && (
                  <span className="bg-secondary-container text-on-secondary-fixed text-xs font-montserrat font-bold px-3 py-1 rounded-full shadow-2xs">
                    Best Seller
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-tertiary text-white text-xs font-montserrat font-bold px-2.5 py-1 rounded-full shadow-2xs">
                    Tiết kiệm {product.discount}%
                  </span>
                )}
              </div>

              {/* Wishlist button */}
              <button
                onClick={() => {
                  setIsWishlisted(!isWishlisted);
                  showToast(isWishlisted ? 'Đã xóa khỏi yêu thích' : 'Đã lưu vào yêu thích', 'info');
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:text-secondary transition-colors shadow-2xs"
              >
                <Heart size={18} className={isWishlisted ? 'text-secondary fill-secondary' : 'text-primary'} />
              </button>
            </div>

            {/* Thumbnails list */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-2xl bg-surface-container p-2 shrink-0 border-2 transition-all duration-200 overflow-hidden ${
                    selectedImage === imgUrl ? 'border-secondary shadow-sm scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${i}`} className="w-full h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info & Actions (5 Cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 bg-surface-cream flex flex-col gap-6">
            
            {/* Title & Ratings */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" stroke="#D4AF37" />
                  ))}
                </div>
                <span className="text-xs font-bold text-dark font-montserrat">
                  {product.rating} ({product.reviewCount} đánh giá)
                </span>
                <span className="text-xs text-muted font-montserrat">• Đã bán {product.soldCount}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-quicksand font-bold text-primary leading-snug">
                {product.name}
              </h1>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-white/80 border border-outline-variant/30 flex items-baseline gap-3">
              <span className="text-3xl font-quicksand font-bold text-secondary">
                {formatVND(currentPrice)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted line-through font-montserrat">
                  {formatVND(product.originalPrice)}
                </span>
              )}
              <span className="text-xs font-bold text-secondary-rose bg-secondary-container px-2.5 py-1 rounded-full ml-auto">
                Tiết kiệm {formatVND((product.originalPrice || product.price) - product.price)}
              </span>
            </div>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="text-xs font-bold text-dark uppercase tracking-wider font-montserrat block mb-2.5">
                  Màu sắc: <span className="text-secondary normal-case font-semibold">{selectedColor?.name}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorChange(color)}
                      className={`px-3.5 py-2 rounded-full border text-xs font-montserrat font-bold flex items-center gap-2 transition-all duration-200 ${
                        selectedColor?.name === color.name
                          ? 'border-primary bg-primary text-white shadow-sm'
                          : 'border-outline-variant/40 bg-white text-dark hover:bg-surface-container'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && product.sizes[0] !== 'Free Size' && (
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-bold text-dark uppercase tracking-wider font-montserrat">
                    Chọn kích cỡ (Size):
                  </label>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-secondary hover:underline"
                  >
                    <Ruler size={13} />
                    <span>Hướng dẫn đo size</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 rounded-xl text-sm font-quicksand font-bold transition-all duration-200 flex items-center justify-center ${
                        selectedSize === size
                          ? 'bg-primary text-white shadow-sm scale-105'
                          : 'bg-white text-dark border border-outline-variant/40 hover:bg-secondary-container hover:border-transparent'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3D Charm Upsell Add-on Box */}
            <div className="p-4 rounded-2xl bg-secondary-container/40 border border-secondary-container flex items-start gap-3 cursor-pointer select-none"
                 onClick={() => setIncludeCharmAddon(!includeCharmAddon)}>
              <input
                type="checkbox"
                checked={includeCharmAddon}
                onChange={(e) => setIncludeCharmAddon(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary"
              />
              <div>
                <div className="flex items-center gap-1.5 font-quicksand font-bold text-sm text-dark">
                  <Sparkles size={15} className="text-secondary" />
                  <span>Gắn thêm Set 6 Charm 3D Cao Cấp DIY (+69.000₫)</span>
                </div>
                <p className="text-xs text-on-surface-variant font-montserrat mt-0.5">
                  Tùy chọn phụ kiện gắn dép cực xinh, giúp đôi dép của bạn nổi bật và độc nhất vô nhị.
                </p>
              </div>
            </div>

            {/* Quantity and CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="flex items-center justify-between border border-outline-variant rounded-full bg-white px-4 py-2 sm:w-32 shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-lg font-bold text-dark hover:text-secondary px-2"
                >
                  -
                </button>
                <span className="font-montserrat font-bold text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-lg font-bold text-dark hover:text-secondary px-2"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn-primary flex-grow py-3.5 text-sm"
              >
                <ShoppingBag size={18} />
                <span>Thêm vào giỏ hàng</span>
              </button>

              <a
                href={product.shopeeUrl || 'https://shopee.vn/ababas_vn'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-3.5 px-4 text-xs font-bold whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <span>Mua trên Shopee</span>
              </a>
            </div>

            {/* Value Props Strip */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-outline-variant/30 text-center text-xs font-montserrat text-on-surface-variant">
              <div className="flex flex-col items-center gap-1">
                <Truck size={18} className="text-tertiary" />
                <span>Giao hàng 2 - 3 ngày</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw size={18} className="text-secondary" />
                <span>Đổi size 7 ngày</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck size={18} className="text-primary" />
                <span>Bảo hành 6 tháng</span>
              </div>
            </div>

            {/* Accordion Tabs */}
            <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/30">
              {/* Accordion 1: Specs */}
              <div className="rounded-xl border border-outline-variant/30 bg-white/60 overflow-hidden">
                <button
                  onClick={() => toggleAccordion('specs')}
                  className="w-full px-4 py-3 text-left font-quicksand font-bold text-sm text-primary flex justify-between items-center"
                >
                  <span>Đặc tính & Chất liệu EVA</span>
                  <ChevronDown size={16} className={`transition-transform ${openAccordion === 'specs' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'specs' && (
                  <div className="px-4 pb-4 text-xs font-montserrat text-on-surface-variant leading-relaxed space-y-1.5">
                    <p>• <strong>Chất liệu:</strong> {product.material}</p>
                    {product.soleHeight && <p>• <strong>Độ cao đế:</strong> {product.soleHeight} (tôn dáng, tăng chiều cao)</p>}
                    {product.weight && <p>• <strong>Trọng lượng:</strong> {product.weight} (siêu nhẹ êm chân)</p>}
                    <p>• <strong>Mô tả:</strong> {product.description}</p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Shipping */}
              <div className="rounded-xl border border-outline-variant/30 bg-white/60 overflow-hidden">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full px-4 py-3 text-left font-quicksand font-bold text-sm text-primary flex justify-between items-center"
                >
                  <span>Chính sách đổi trả & Vận chuyển</span>
                  <ChevronDown size={16} className={`transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'shipping' && (
                  <div className="px-4 pb-4 text-xs font-montserrat text-on-surface-variant leading-relaxed space-y-1.5">
                    <p>• Miễn phí vận chuyển cho đơn hàng từ 299.000₫.</p>
                    <p>• Hỗ trợ đổi size trong vòng 7 ngày nếu không vừa chân.</p>
                    <p>• Kiểm tra hàng trước khi thanh toán (COD toàn quốc).</p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-quicksand font-bold text-primary mb-2">
                Có thể bạn cũng thích
              </h2>
              <p className="text-sm text-on-surface-variant font-montserrat">
                Những mẫu dép cùng bộ sưu tập được ưa chuộng.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Size Guide Modal */}
      <Modal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} title="Hướng Dẫn Chọn Size Dép Ababas">
        <div className="p-6 font-montserrat text-sm space-y-4">
          <p className="text-on-surface-variant text-xs">
            Đặt bàn chân lên tờ giấy trắng, đo chiều dài từ gót đến ngón dài nhất (cm) rồi đối chiếu bảng sau:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-xs border-collapse">
              <thead>
                <tr className="bg-secondary-container text-on-secondary-fixed font-bold">
                  <th className="p-2.5 border border-outline-variant/40">Size VN</th>
                  <th className="p-2.5 border border-outline-variant/40">Chiều dài chân (cm)</th>
                  <th className="p-2.5 border border-outline-variant/40">Size US / EU</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 36, cm: '22.5 - 23.0 cm', eu: '36' },
                  { size: 37, cm: '23.0 - 23.5 cm', eu: '37' },
                  { size: 38, cm: '23.5 - 24.0 cm', eu: '38' },
                  { size: 39, cm: '24.0 - 24.5 cm', eu: '39' },
                  { size: 40, cm: '24.5 - 25.0 cm', eu: '40' },
                  { size: 41, cm: '25.0 - 25.5 cm', eu: '41' },
                  { size: 42, cm: '25.5 - 26.0 cm', eu: '42' },
                ].map((row) => (
                  <tr key={row.size} className="hover:bg-surface-cream">
                    <td className="p-2 font-bold border border-outline-variant/40">{row.size}</td>
                    <td className="p-2 border border-outline-variant/40">{row.cm}</td>
                    <td className="p-2 border border-outline-variant/40">{row.eu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-muted italic">
            *Lưu ý: Nếu bàn chân bè hoặc mu bàn chân dày, khuyến nghị tăng 1 size để có trải nghiệm êm ái nhất.
          </p>
        </div>
      </Modal>

    </motion.div>
  );
}
