import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-surface-cream">
      {/* Background Image with Gradient Overlay from Stitch */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="bg-cover bg-center w-full h-full opacity-65 mix-blend-multiply transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsBG4c2MrWIaefSpc_9IpcxUiTeDfXQIHg6YpPEkmPS0gdOFVTaMqbbltshN1ADLcvjc6vJVkxvP2YOBYbsdVuptbggq4NQhB6xMDFZnHtWV9kkAItSLSncRsPWpyU3uZUCroFTKrn1V0247pTXUUw9jvEBAeV6WcOfnZcS2fBvIZbil0IMGTzhx2G1SCWZBk9CqjfTjOTfBN2cLU4bOL7O2by9qd4IBScPn8U08UvdpmQBMql3Kw7tA')`
          }}
        />
        {/* Soft Cream Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-cream/95 via-surface-cream/80 to-surface-cream/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-dark font-montserrat font-bold text-xs sm:text-sm rounded-full mb-6 shadow-sm">
            <Sparkles size={16} className="text-secondary-rose" />
            <span>Bộ sưu tập mới 2024 – 2025</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quicksand font-bold text-dark leading-tight mb-6">
            Ababas – Dép xinh <br className="hidden sm:inline" />
            <span className="text-primary bg-clip-text">nâng tầm phong cách</span>
          </h1>

          <p className="text-base sm:text-lg font-montserrat text-on-surface-variant mb-8 max-w-xl leading-relaxed">
            EVA nguyên khối siêu nhẹ • Đế dày 5cm nâng chiều cao tôn dáng • Charm 3D đa dạng thỏa sức sáng tạo phong cách riêng.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/san-pham" className="btn-primary">
              <span>Khám phá ngay</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/doi-tac" className="btn-secondary">
              <span>Dành cho đối tác</span>
            </Link>
          </div>

          {/* Quick Badges */}
          <div className="mt-10 pt-8 border-t border-outline-variant/40 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-on-surface-variant font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-primary" />
              <span>Chính hãng 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-secondary-rose" />
              <span>Free Charm 3D tặng kèm</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-primary" />
              <span>10.000+ Khách hàng hài lòng</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Product Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="glass-card p-6 relative group">
            <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              HOT TREND
            </div>
            
            <div className="h-72 overflow-hidden rounded-2xl bg-surface-container flex items-center justify-center p-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A"
                alt="Cloud Walker Pro"
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-quicksand font-bold text-lg text-dark">Cloud Walker Pro</h3>
                <p className="text-xs text-muted">Kèm bộ 6 Charm 3D ngẫu nhiên</p>
              </div>
              <span className="font-quicksand font-bold text-xl text-primary">450.000₫</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
