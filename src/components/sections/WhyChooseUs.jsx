import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Palette, Truck, RefreshCw, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainerVariant, fadeUpVariant } from '../../utils/animations';

export default function WhyChooseUs() {
  const [sectionRef, isVisible] = useScrollAnimation();

  const features = [
    {
      icon: <Trophy size={28} className="text-primary" />,
      bg: 'bg-beige',
      title: 'Chất Lượng Vượt Trội',
      description: 'Chất liệu EVA đúc nguyên khối siêu nhẹ, chống trơn trượt và đạt độ bền thử nghiệm trên 100.000 bước đi.',
    },
    {
      icon: <Palette size={28} className="text-secondary-dark" />,
      bg: 'bg-secondary-light',
      title: 'Thiết Kế Tối Giản',
      description: 'Màu sắc phong phú, form dáng chuẩn công thái học nâng niu vòm chân, phối đồ thời thượng cho giới trẻ.',
    },
    {
      icon: <Truck size={28} className="text-tertiary-dark" />,
      bg: 'bg-tertiary-light',
      title: 'Giao Hàng Toàn Quốc',
      description: 'Đóng gói hộp sang trọng, hỗ trợ kiểm tra hàng trước khi thanh toán và giao nhanh hỏa tốc.',
    },
    {
      icon: <RefreshCw size={28} className="text-primary" />,
      bg: 'bg-beige',
      title: 'Đổi Trả Dễ Dàng',
      description: 'Hỗ trợ đổi size miễn phí tận nhà trong vòng 30 ngày nếu không vừa vặn bàn chân.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-light font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-beige text-dark border border-border text-xs font-semibold uppercase tracking-wider mb-3 font-headline">
            <Sparkles size={14} className="text-primary" />
            <span>Cam Kết Thương Hiệu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark font-headline tracking-tight mb-3">
            Tại Sao Chọn ABABAS?
          </h2>
          <p className="text-sm sm:text-base text-muted font-body">
            Trải nghiệm sự khác biệt trên từng bước đi cùng triết lý: High Style, Low Effort.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              whileHover={{ y: -6 }}
              className="bg-white rounded-card p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 border border-border`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-base text-dark mb-2 font-headline">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-body">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
