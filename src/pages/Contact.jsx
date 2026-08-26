import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, MessageCircle, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react';
import { HOTLINE, SUPPORT_EMAIL, WORK_HOURS, STORE_LOCATIONS, BRAND_NAME } from '../utils/constants';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { useUI } from '../context/UIContext';

export default function Contact() {
  const { showToast } = useUI();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Tư vấn chọn size',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    trackPageView('/lien-he', `Liên Hệ & Cửa Hàng | ${BRAND_NAME}`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && (formData.phone || formData.email)) {
      setIsSubmitted(true);
      showToast('Đã gửi tin nhắn! Nhân viên chăm sóc khách hàng sẽ phản hồi trong 15 phút.', 'success');
    }
  };

  const faqs = [
    {
      q: 'Làm thế nào để chọn size dép Ababas chuẩn nhất?',
      a: 'Bạn có thể xem bảng đo chiều dài bàn chân (cm) trong mục "Hướng dẫn đo size" ở từng trang sản phẩm. Nếu chân bè hoặc mu bàn chân dày, nên tăng 1 size để mang êm nhất.'
    },
    {
      q: 'Chính sách đổi hàng và bảo hành như thế nào?',
      a: 'Ababas hỗ trợ đổi size miễn phí trong vòng 7 ngày kể từ khi nhận hàng. Tất cả sản phẩm dép Clog và Sandal EVA đều được bảo hành 6 tháng.'
    },
    {
      q: 'Thời gian giao hàng toàn quốc mất bao lâu?',
      a: 'Khu vực nội thành Hà Nội & TP.HCM nhận hàng trong 24h. Các tỉnh thành khác từ 2 - 3 ngày làm việc qua các đơn vị vận chuyển uy tín.'
    },
  ];

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="contact-page py-12 bg-background min-h-screen space-y-16"
    >
      <Helmet>
        <title>Liên Hệ & Hệ Thống Cửa Hàng | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Thông tin liên hệ hotline, showroom và biểu mẫu hỗ trợ khách hàng 24/7 của thương hiệu ABABAS."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="glass-card p-8 sm:p-14 text-center bg-surface-cream">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-dark text-xs font-montserrat font-bold uppercase tracking-wider mb-4">
            <MessageCircle size={15} className="text-secondary-rose" />
            <span>Trung Tâm Hỗ Trợ Khách Hàng</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-quicksand font-bold text-dark mb-4">
            Kết Nối Cùng Ababas
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant font-montserrat max-w-xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ tư vấn sản phẩm, chọn size dép và giải đáp mọi thắc mắc của bạn nhanh chóng.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 text-center bg-white flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-quicksand font-bold text-lg text-dark mb-1">Hotline & Zalo</h3>
            <p className="text-xs text-muted font-montserrat mb-3">{WORK_HOURS}</p>
            <a href={`tel:${HOTLINE}`} className="text-base font-quicksand font-bold text-primary hover:underline">
              {HOTLINE}
            </a>
          </div>

          <div className="glass-card p-8 text-center bg-white flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container text-secondary-rose flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-quicksand font-bold text-lg text-dark mb-1">Email Hỗ Trợ</h3>
            <p className="text-xs text-muted font-montserrat mb-3">Phản hồi trong 2 giờ</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-base font-quicksand font-bold text-secondary-rose hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </div>

          <div className="glass-card p-8 text-center bg-white flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-container text-tertiary flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="font-quicksand font-bold text-lg text-dark mb-1">Giờ Làm Việc</h3>
            <p className="text-xs text-muted font-montserrat mb-3">Tất cả các ngày trong tuần</p>
            <span className="text-sm font-montserrat font-bold text-dark">08:00 – 22:00</span>
          </div>
        </div>

        {/* Contact Form & Showrooms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 bg-surface-cream">
            <h2 className="font-quicksand font-bold text-2xl text-dark mb-2">Gửi Lời Nhắn Trực Tiếp</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-montserrat mb-6">
              Bạn có câu hỏi hoặc cần khiếu nại dịch vụ? Hãy để lại thông tin để được hỗ trợ.
            </p>

            {isSubmitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-secondary-container">
                <CheckCircle2 size={40} className="text-primary mx-auto mb-3" />
                <h3 className="font-quicksand font-bold text-lg text-dark mb-1">Đã Nhận Tin Nhắn!</h3>
                <p className="text-xs font-montserrat text-on-surface-variant">
                  Cảm ơn bạn đã gửi lời nhắn. Chuyên viên chăm sóc khách hàng sẽ liên hệ lại ngay.
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
                      placeholder="Nguyễn Thị Mai"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-dark mb-1.5">Số điện thoại *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0912 345 678"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-dark mb-1.5">Chủ đề cần hỗ trợ</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="Tư vấn chọn size">Tư vấn chọn size dép</option>
                    <option value="Đổi trả & Bảo hành">Yêu cầu đổi size / bảo hành</option>
                    <option value="Hợp tác đại lý B2B">Hợp tác kinh doanh đại lý</option>
                    <option value="Khác">Chủ đề khác</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-dark mb-1.5">Nội dung chi tiết *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mô tả thắc mắc của bạn..."
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3.5 text-sm">
                  <Send size={16} />
                  <span>Gửi tin nhắn ngay</span>
                </button>
              </form>
            )}
          </div>

          {/* Showrooms & FAQs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Showroom List */}
            <div className="glass-card p-6 sm:p-8 bg-white">
              <h3 className="font-quicksand font-bold text-lg text-dark mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Hệ Thống Showroom Trải Nghiệm</span>
              </h3>
              
              <div className="space-y-4 font-montserrat text-xs">
                {STORE_LOCATIONS.map((loc, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-surface-cream border border-outline-variant/30">
                    <h4 className="font-bold text-dark mb-1">{loc.name}</h4>
                    <p className="text-on-surface-variant mb-1">{loc.address}</p>
                    <p className="text-primary font-bold">Hotline: {loc.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="glass-card p-6 sm:p-8 bg-white">
              <h3 className="font-quicksand font-bold text-lg text-dark mb-4">
                Câu Hỏi Thường Gặp
              </h3>

              <div className="space-y-3 font-montserrat">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-outline-variant/30 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full p-3.5 text-left font-quicksand font-bold text-xs sm:text-sm text-dark flex justify-between items-center bg-surface-cream"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={15} className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="p-3.5 text-xs text-on-surface-variant bg-white leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
