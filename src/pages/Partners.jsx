import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Truck, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { useUI } from '../context/UIContext';
import { BRAND_NAME } from '../utils/constants';

const tiers = [
  {
    name: 'Đại Lý Bạc (Silver)',
    minOrder: 'Đơn từ 10.000.000₫',
    discount: 'Chiết khấu 30%',
    perks: ['Cung cấp hình ảnh sản phẩm chuẩn studio', 'Hỗ trợ đổi size 7 ngày', 'Giao hàng miễn phí toàn quốc'],
    badge: 'Khởi đầu thuận lợi',
    featured: false
  },
  {
    name: 'Đại Lý Vàng (Gold)',
    minOrder: 'Đơn từ 30.000.000₫',
    discount: 'Chiết khấu 38%',
    perks: ['Tặng kệ trưng bày POSM chính hãng', 'Ưu tiên nhập các BST giới hạn', 'Hỗ trợ chạy quảng cáo khu vực', 'Chiết khấu thưởng theo quý'],
    badge: 'Phổ biến nhất',
    featured: true
  },
  {
    name: 'Nhà Phân Phối Kim Cương (Diamond)',
    minOrder: 'Đơn từ 80.000.000₫',
    discount: 'Chiết khấu 45%',
    perks: ['Độc quyền phân phối theo khu vực / tỉnh', 'Hỗ trợ thiết kế bảng hiệu showroom', 'Chính sách công nợ linh hoạt 30 ngày', 'Chuyên viên đào tạo bán hàng riêng'],
    badge: 'Đặc quyền tối đa',
    featured: false
  }
];

export default function Partners() {
  const { showToast } = useUI();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    trackPageView('/doi-tac', `Hợp Tác Đại Lý & B2B | ${BRAND_NAME}`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      showToast('Đã gửi thông tin đăng ký đại lý! Chuyên viên B2B sẽ liên hệ trong 2h.', 'success');
    }
  };

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="partners-page py-12 bg-background min-h-screen"
    >
      <Helmet>
        <title>Hợp Tác Kinh Doanh & Đại Lý B2B | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Chính sách chiết khấu đại lý dép thời trang Ababas lên đến 45%, hỗ trợ toàn diện tư liệu marketing POSM và nguồn hàng chất lượng cao."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="glass-card p-8 sm:p-14 text-center bg-surface-cream">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-montserrat font-bold uppercase tracking-wider mb-4">
            <Handshake size={15} />
            <span>Mạng Lưới Phân Phối Toàn Quốc</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-quicksand font-bold text-primary mb-4">
            Hợp Tác Kinh Doanh Cùng Ababas
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant font-montserrat max-w-2xl mx-auto leading-relaxed">
            Đồng hành cùng thương hiệu dép EVA & Charm 3D hàng đầu dành cho giới trẻ, bứt phá doanh số với chính sách chiết khấu đại lý tốt nhất thị trường.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '150+', label: 'Điểm bán & Showroom' },
            { num: '45%', label: 'Chiết khấu đại lý tối đa' },
            { num: '50.000+', label: 'Đôi dép xuất kho / tháng' },
            { num: '24h', label: 'Thời gian xử lý giao hàng' }
          ].map((st, i) => (
            <div key={i} className="glass-card p-6 text-center bg-white">
              <div className="text-3xl sm:text-4xl font-quicksand font-bold text-primary mb-1.5">{st.num}</div>
              <p className="text-xs font-montserrat font-bold text-muted uppercase tracking-wider">{st.label}</p>
            </div>
          ))}
        </div>

        {/* Tiers Breakdown */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-on-secondary-fixed bg-secondary-container px-3.5 py-1 rounded-full">
              Chính sách chiết khấu
            </span>
            <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-primary mt-3 mb-2">
              Các Gói Hợp Tác Đại Lý
            </h2>
            <p className="text-sm text-on-surface-variant font-montserrat">
              Linh hoạt theo quy mô cửa hàng và ngân sách kinh doanh của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className={`glass-card p-8 flex flex-col justify-between relative transition-transform duration-300 hover:-translate-y-2 ${
                  t.featured ? 'border-2 border-secondary bg-surface-cream shadow-md' : 'bg-white'
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-montserrat font-bold px-4 py-1 rounded-full shadow-sm">
                    {t.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-quicksand font-bold text-xl text-primary mb-1">{t.name}</h3>
                  <p className="text-xs font-montserrat text-muted mb-4">{t.minOrder}</p>
                  
                  <div className="text-2xl sm:text-3xl font-quicksand font-bold text-secondary mb-6">
                    {t.discount}
                  </div>

                  <ul className="space-y-3 font-montserrat text-xs sm:text-sm text-on-surface-variant mb-8">
                    {t.perks.map((p, pi) => (
                      <li key={pi} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#b2b-form"
                  className={`w-full py-3 rounded-full text-center font-montserrat font-bold text-xs transition-all ${
                    t.featured ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Đăng ký gói này
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* B2B Registration Form */}
        <div id="b2b-form" className="glass-card p-8 sm:p-14 bg-surface-cream">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-quicksand font-bold text-primary mb-2">
                Đăng Ký Nhận Báo Giá & Hợp Tác B2B
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant font-montserrat">
                Điền thông tin bên dưới, chuyên viên phân phối của Ababas sẽ liên hệ tư vấn trong vòng 2 giờ làm việc.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-secondary-container">
                <CheckCircle2 size={48} className="text-secondary mx-auto mb-3" />
                <h3 className="text-xl font-quicksand font-bold text-primary mb-2">Gửi Thông Tin Thành Công!</h3>
                <p className="text-xs font-montserrat text-on-surface-variant">
                  Cảm ơn bạn đã quan tâm. Đội ngũ Ababas B2B sẽ gọi điện trực tiếp qua số điện thoại bạn cung cấp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-montserrat text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-dark mb-1.5">Họ và tên *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-dark mb-1.5">Số điện thoại / Zalo *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0987 654 321"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-dark mb-1.5">Email liên hệ</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-dark mb-1.5">Khu vực / Tỉnh thành *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Hà Nội, TP.HCM, Đà Nẵng,..."
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-dark mb-1.5">Lời nhắn hoặc mô tả mô hình kinh doanh hiện tại</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tôi đang có shop giày dép thời trang tại Cầu Giấy và muốn nhập số lượng 200 đôi..."
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-secondary"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-sm mt-2">
                  <PhoneCall size={16} />
                  <span>Gửi yêu cầu hợp tác ngay</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
