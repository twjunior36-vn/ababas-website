import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { HOTLINE, SUPPORT_EMAIL, WORK_HOURS, STORE_LOCATIONS, SOCIAL_LINKS, BRAND_NAME } from '../utils/constants';
import { pageTransitionVariant, staggerContainerVariant, fadeUpVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';

export default function Contact() {
  useEffect(() => {
    trackPageView('/lien-he', `Liên Hệ & Cửa Hàng | ${BRAND_NAME}`);
  }, []);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="contact-page py-10 bg-light min-h-screen font-poppins space-y-14"
    >
      <Helmet>
        <title>Liên Hệ & Hệ Thống Cửa Hàng | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Thông tin liên hệ hotline, email và hệ thống showroom ABABAS tại Hà Nội, TP.HCM và Đà Nẵng."
        />
        <link rel="canonical" href="https://ababas.netlify.app/lien-he" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section 1: Page Header */}
        <div className="bg-white rounded-card p-8 sm:p-12 border border-gray-100 shadow-sm text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle size={15} />
            <span>Chăm Sóc Khách Hàng</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy mb-3">
            Kết Nối Cùng ABABAS
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ tư vấn chọn size, chính sách đổi trả và giải đáp mọi thắc mắc của bạn 24/7.
          </p>
        </div>

        {/* Section 2: 3 Contact Info Cards */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Hotline */}
          <motion.div
            variants={fadeUpVariant}
            className="bg-white rounded-card p-8 border border-gray-100 shadow-sm text-center flex flex-col items-center group hover:shadow-card hover:border-primary/40 transition-all"
          >
            <div className="w-14 h-14 rounded-btn bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone size={26} />
            </div>
            <h3 className="font-bold text-base text-navy mb-1">Hotline CSKH</h3>
            <p className="text-xs text-muted mb-4">Hỗ trợ đặt hàng & tư vấn size 24/7</p>
            <a
              href={`tel:${HOTLINE.replace(/\s/g, '')}`}
              className="text-lg font-black text-primary hover:underline"
            >
              {HOTLINE}
            </a>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            variants={fadeUpVariant}
            className="bg-white rounded-card p-8 border border-gray-100 shadow-sm text-center flex flex-col items-center group hover:shadow-card hover:border-primary/40 transition-all"
          >
            <div className="w-14 h-14 rounded-btn bg-navy/10 text-navy flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-colors">
              <Mail size={26} />
            </div>
            <h3 className="font-bold text-base text-navy mb-1">Hòm Thư Điện Tử</h3>
            <p className="text-xs text-muted mb-4">Hợp tác đại lý & phản hồi dịch vụ</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm font-extrabold text-navy hover:text-primary transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </motion.div>

          {/* Card 3: Work Hours */}
          <motion.div
            variants={fadeUpVariant}
            className="bg-white rounded-card p-8 border border-gray-100 shadow-sm text-center flex flex-col items-center group hover:shadow-card hover:border-primary/40 transition-all"
          >
            <div className="w-14 h-14 rounded-btn bg-gold/20 text-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
              <Clock size={26} />
            </div>
            <h3 className="font-bold text-base text-navy mb-1">Giờ Hoạt Động</h3>
            <p className="text-xs text-muted mb-4">Tất cả các ngày trong tuần</p>
            <div className="text-sm font-extrabold text-navy">
              {WORK_HOURS}
            </div>
          </motion.div>
        </motion.div>

        {/* Section 4: Store Locations Grid (4 Locations with Orange Dot) */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Trải Nghiệm Trực Tiếp</span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1">Hệ Thống Cửa Hàng</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STORE_LOCATIONS.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-card p-6 border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{store.status}</span>
                  </div>
                  <h3 className="font-bold text-sm text-navy mb-2">{store.name}</h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">{store.address}</p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs font-semibold text-navy flex items-center gap-1.5">
                  <Phone size={13} className="text-primary" />
                  <span>{store.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Social Media Section (Navy BG) */}
        <div className="bg-navy text-white rounded-card p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Kênh Mạng Xã Hội Chính Thức
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto mb-8">
            Theo dõi các hoạt động, video review và chương trình livestream tặng quà của ABABAS trên các nền tảng:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-pill bg-white/10 hover:bg-primary text-xs font-bold text-white transition-all hover:scale-105"
              >
                <span>{s.name} ({s.handle})</span>
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
