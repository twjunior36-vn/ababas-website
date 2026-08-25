import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Search, Flame } from 'lucide-react';
import Button from '../components/ui/Button';
import { pageTransitionVariant } from '../utils/animations';
import { BRAND_NAME } from '../utils/constants';

export default function NotFound() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="not-found-page py-16 bg-light min-h-[80vh] flex items-center justify-center font-poppins relative overflow-hidden"
    >
      <Helmet>
        <title>404 – Không Tìm Thấy Trang | {BRAND_NAME}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Floating background decorative icons */}
      <div className="absolute top-10 left-10 text-primary/10 animate-float pointer-events-none">
        <Flame size={80} />
      </div>
      <div className="absolute bottom-10 right-10 text-navy/10 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <Flame size={100} />
      </div>

      <div className="max-w-xl mx-auto px-4 text-center space-y-6 relative z-10">
        
        {/* Large Decorative 404 */}
        <div className="text-8xl sm:text-9xl font-black text-primary tracking-tighter leading-none select-none">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy">
          Rất Tiếc, Trang Này Không Tồn Tại!
        </h1>

        <p className="text-xs sm:text-sm text-muted max-w-md mx-auto">
          Đường dẫn bạn vừa truy cập có thể đã bị thay đổi hoặc sản phẩm đã ngừng phân phối. Hãy thử tìm kiếm mẫu dép khác nhé:
        </p>

        {/* Quick Search Form */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto relative flex items-center">
          <Search size={18} className="absolute left-4 text-primary" />
          <input
            type="text"
            placeholder="Tìm dép Sandal, dép bánh mì..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-24 py-3 rounded-pill border-2 border-gray-200 focus:border-primary focus:outline-none text-xs sm:text-sm bg-white font-medium shadow-sm"
          />
          <button
            type="submit"
            className="absolute right-1.5 px-4 py-2 bg-primary text-white text-xs font-bold uppercase rounded-pill hover:bg-primary-hover transition-colors"
          >
            Tìm
          </button>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/')}
            icon={<Home size={16} />}
            iconPosition="left"
          >
            Về Trang Chủ
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={() => navigate('/san-pham')}
            icon={<ShoppingBag size={16} />}
            iconPosition="left"
          >
            Xem Sản Phẩm
          </Button>
        </div>

      </div>
    </motion.div>
  );
}
