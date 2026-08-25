import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    const featuredSection = document.getElementById('featured-products-section');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[90vh] min-h-[580px] max-h-[850px] overflow-hidden flex items-center justify-center font-poppins">
      
      {/* Background with Ken Burns Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/70 to-navy/90" />

      {/* Hero Content with Staggered Delays */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white flex flex-col items-center">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-primary/20 border border-primary/40 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-6 shadow-sm"
        >
          <Sparkles size={15} />
          <span>Bộ Sưu Tập Mùa Hè 2025</span>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase mb-6"
        >
          BƯỚC ĐI <span className="text-primary">PHONG CÁCH</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 font-medium mb-10 max-w-2xl"
        >
          Dép thời trang đúc nguyên khối siêu nhẹ – Đơn giản mà đẳng cấp
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => navigate('/san-pham')}
            icon={<ArrowRight size={18} />}
          >
            Khám Phá Ngay
          </Button>

          <Button
            size="lg"
            variant="white"
            onClick={() => navigate('/bo-suu-tap')}
          >
            Xem Bộ Sưu Tập
          </Button>
        </motion.div>

      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={handleScrollDown}
        aria-label="Cuộn xuống xem sản phẩm"
        className="absolute bottom-8 z-10 text-white/80 hover:text-primary transition-colors flex flex-col items-center gap-1 cursor-pointer animate-bounce"
      >
        <span className="text-[11px] font-bold uppercase tracking-widest">Cuộn xuống</span>
        <ChevronDown size={20} />
      </motion.button>

    </section>
  );
}
