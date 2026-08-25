import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Truck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function Policy() {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState('doi-tra');

  useEffect(() => {
    trackPageView('/chinh-sach', `Chính Sách & Quy Định | ${BRAND_NAME}`);
  }, []);

  // Handle URL hash on mount or change
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setActiveSection(id);
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="policy-page py-10 bg-light min-h-screen font-poppins"
    >
      <Helmet>
        <title>Chính Sách Bán Hàng & Đổi Trả | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Chính sách đổi trả 30 ngày, chính sách vận chuyển và bảo mật thông tin khách hàng của ABABAS."
        />
        <link rel="canonical" href="https://ababas.netlify.app/chinh-sach" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-card p-8 sm:p-12 border border-gray-100 shadow-sm text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <FileText size={15} />
            <span>Quy Định Minh Bạch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-navy mb-2">
            Chính Sách & Điều Khoản ABABAS
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Cam kết đảm bảo quyền lợi tối đa cho khách hàng trên toàn quốc.
          </p>
        </div>

        {/* Layout: Sticky Sidebar TOC + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Left Sticky Sidebar: Table of Contents */}
          <div className="lg:col-span-1 sticky top-28 bg-white rounded-card p-5 border border-gray-100 shadow-sm space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
              Mục Lục Chính Sách
            </h3>
            <button
              onClick={() => scrollToSection('doi-tra')}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-btn text-xs font-bold text-left transition-colors ${
                activeSection === 'doi-tra' ? 'bg-primary text-white shadow-sm' : 'text-navy hover:bg-light'
              }`}
            >
              <RefreshCw size={14} />
              <span>Chính Sách Đổi Trả</span>
            </button>

            <button
              onClick={() => scrollToSection('van-chuyen')}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-btn text-xs font-bold text-left transition-colors ${
                activeSection === 'van-chuyen' ? 'bg-primary text-white shadow-sm' : 'text-navy hover:bg-light'
              }`}
            >
              <Truck size={14} />
              <span>Chính Sách Vận Chuyển</span>
            </button>

            <button
              onClick={() => scrollToSection('bao-mat')}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-btn text-xs font-bold text-left transition-colors ${
                activeSection === 'bao-mat' ? 'bg-primary text-white shadow-sm' : 'text-navy hover:bg-light'
              }`}
            >
              <Lock size={14} />
              <span>Bảo Mật Thông Tin</span>
            </button>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* 1. Đổi Trả (#doi-tra) */}
            <div id="doi-tra" className="bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-btn bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <RefreshCw size={22} />
                </div>
                <h2 className="text-xl font-bold text-navy">1. Chính Sách Đổi Trả Hàng (30 Ngày)</h2>
              </div>

              <div className="text-xs sm:text-sm text-dark space-y-3 leading-relaxed">
                <p>
                  ABABAS hỗ trợ đổi size hoặc đổi mẫu miễn phí trong vòng <strong>30 ngày</strong> kể từ ngày nhận hàng với các điều kiện sau:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted">
                  <li>Sản phẩm còn nguyên tem mác, hộp đựng và chưa qua sử dụng ngoài trời.</li>
                  <li>Sản phẩm gặp lỗi sản xuất do nhà máy (bong tróc, đứt quai, rách xốp) sẽ được đổi mới 1-1 ngay lập tức.</li>
                  <li>Nếu khách hàng muốn đổi size không vừa, ABABAS hỗ trợ giao tận nơi và thu hồi sản phẩm cũ miễn phí.</li>
                </ul>
              </div>
            </div>

            {/* 2. Vận Chuyển (#van-chuyen) */}
            <div id="van-chuyen" className="bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-btn bg-primary/10 text-primary flex items-center justify-center">
                  <Truck size={22} />
                </div>
                <h2 className="text-xl font-bold text-navy">2. Chính Sách Vận Chuyển & Giao Hàng</h2>
              </div>

              <div className="text-xs sm:text-sm text-dark space-y-3 leading-relaxed">
                <p>
                  Chúng tôi hợp tác với các đơn vị vận chuyển hàng đầu (GHTK, GHN, Viettel Post) để đảm bảo hàng hóa đến tay bạn nhanh nhất:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-btn bg-light border border-gray-100">
                    <div className="font-bold text-navy mb-1">Nội Thành Hà Nội / TP.HCM</div>
                    <p className="text-xs text-muted">Thời gian giao: 1 – 2 ngày làm việc. Hỗ trợ giao hỏa tốc 2 giờ.</p>
                  </div>
                  <div className="p-4 rounded-btn bg-light border border-gray-100">
                    <div className="font-bold text-navy mb-1">Các Tỉnh Thành Khác</div>
                    <p className="text-xs text-muted">Thời gian giao: 2 – 4 ngày làm việc. Đồng kiểm trước khi trả tiền.</p>
                  </div>
                </div>
                <p className="text-xs text-primary font-bold">
                  * Miễn phí 100% phí vận chuyển cho tất cả đơn hàng từ 300.000đ trở lên.
                </p>
              </div>
            </div>

            {/* 3. Bảo Mật (#bao-mat) */}
            <div id="bao-mat" className="bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-btn bg-navy/10 text-navy flex items-center justify-center">
                  <Lock size={22} />
                </div>
                <h2 className="text-xl font-bold text-navy">3. Bảo Mật Thông Tin Khách Hàng</h2>
              </div>

              <div className="text-xs sm:text-sm text-dark space-y-3 leading-relaxed">
                <p>
                  ABABAS cam kết bảo vệ tuyệt đối thông tin cá nhân và dữ liệu thanh toán của khách hàng:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted">
                  <li>Thông tin họ tên, số điện thoại và địa chỉ chỉ được sử dụng cho mục đích giao hàng và chăm sóc hậu mãi.</li>
                  <li>Không chia sẻ hay bán thông tin cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý của khách hàng.</li>
                  <li>Mọi giao dịch thanh toán trực tuyến đều được mã hóa theo tiêu chuẩn an toàn SSL.</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
