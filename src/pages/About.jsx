import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function About() {
  useEffect(() => {
    trackPageView('/ve-chung-toi', `Về Chúng Tôi – Câu Chuyện Thương Hiệu | ${BRAND_NAME}`);
  }, []);

  const milestones = [
    { year: '2023', title: 'Khởi Đầu Sáng Tạo', desc: 'Thành lập studio thiết kế và nghiên cứu vật liệu bọt khí EVA mật độ cao.' },
    { year: '2024', title: 'Ra Mắt Dòng Clog 3D DIY', desc: 'Đột phá với hơn 50.000 đôi dép Clog và set Charm 3D tùy chỉnh đến tay khách hàng trẻ.' },
    { year: '2025', title: 'Mở Rộng Hệ Thống B2B', desc: 'Phủ sóng hơn 150 đại lý toàn quốc và phát triển công nghệ sản xuất bền vững thân thiện môi trường.' },
  ];

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="about-page py-12 bg-background min-h-screen space-y-16"
    >
      <Helmet>
        <title>Về Chúng Tôi – Câu Chuyện Thương Hiệu | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Khám phá hành trình xây dựng thương hiệu dép thời trang ABABAS – Dép xinh nâng tầm phong cách, êm ái từng bước chân."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Split Layout */}
        <div className="glass-card p-8 sm:p-14 bg-surface-cream grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-montserrat font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-secondary" />
              <span>Câu Chuyện Thương Hiệu</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-quicksand font-bold text-primary leading-tight">
              Định Nghĩa Lại <span className="text-secondary">Đôi Dép</span> Cho Thế Hệ Trẻ
            </h1>

            <p className="text-sm sm:text-base text-on-surface-variant font-montserrat leading-relaxed">
              Ababas ra đời từ khát khao tạo ra những đôi dép vừa có độ êm ái vượt trội từ công nghệ bọt khí EVA cao cấp, vừa là món phụ kiện thời trang sành điệu giúp bạn tự tin thể hiện chất riêng mỗi ngày.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-outline-variant/30">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-xs font-montserrat text-dark font-medium">Chất liệu EVA đúc nguyên khối siêu nhẹ</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-xs font-montserrat text-dark font-medium">Hơn 100+ mẫu Charm 3D DIY độc quyền</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-card">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsBG4c2MrWIaefSpc_9IpcxUiTeDfXQIHg6YpPEkmPS0gdOFVTaMqbbltshN1ADLcvjc6vJVkxvP2YOBYbsdVuptbggq4NQhB6xMDFZnHtWV9kkAItSLSncRsPWpyU3uZUCroFTKrn1V0247pTXUUw9jvEBAeV6WcOfnZcS2fBvIZbil0IMGTzhx2G1SCWZBk9CqjfTjOTfBN2cLU4bOL7O2by9qd4IBScPn8U08UvdpmQBMql3Kw7tA"
              alt="Ababas Studio"
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container text-secondary flex items-center justify-center mx-auto mb-4">
              <Heart size={26} />
            </div>
            <h3 className="font-quicksand font-bold text-xl text-primary mb-2">Êm Ái Tuyệt Đối</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant font-montserrat leading-relaxed">
              Trọng lượng siêu nhẹ chỉ từ 190g kết hợp đệm bọt khí nâng đỡ cấu trúc vòm chân hoàn hảo.
            </p>
          </div>

          <div className="bento-card p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary-container text-primary flex items-center justify-center mx-auto mb-4">
              <Sparkles size={26} />
            </div>
            <h3 className="font-quicksand font-bold text-xl text-primary mb-2">Sáng Tạo Không Giới Hạn</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant font-montserrat leading-relaxed">
              Thỏa sức gắn charm 3D theo sở thích cá nhân, biến mỗi đôi dép thành tác phẩm độc bản.
            </p>
          </div>

          <div className="bento-card p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-container text-tertiary flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={26} />
            </div>
            <h3 className="font-quicksand font-bold text-xl text-primary mb-2">Chất Lượng Bền Bỉ</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant font-montserrat leading-relaxed">
              Kháng nước 100%, không bong keo, không hôi chân và bảo hành chính hãng 6 tháng.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="glass-card p-8 sm:p-12 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-quicksand font-bold text-primary mb-2">
              Hành Trình Phát Triển
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-montserrat">
              Những dấu mốc đáng nhớ trên con đường định vị thương hiệu dép giới trẻ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-cream border border-outline-variant/30 text-center">
                <div className="font-quicksand font-bold text-3xl text-secondary mb-2">{m.year}</div>
                <h4 className="font-quicksand font-bold text-base text-primary mb-2">{m.title}</h4>
                <p className="text-xs font-montserrat text-on-surface-variant leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
