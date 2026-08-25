import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

export default function StatsCounter() {
  const [sectionRef, isVisible] = useScrollAnimation();

  const countCustomers = useCountUp(10000, 2000, isVisible);
  const countRating = useCountUp(4.9, 2000, isVisible);
  const countPartners = useCountUp(500, 2000, isVisible);

  return (
    <section ref={sectionRef} className="py-16 bg-neutral text-white font-body relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Stat 1: 10000+ */}
          <div className="py-4 md:py-0 px-4">
            <div className="text-4xl sm:text-5xl font-bold font-headline text-beige tracking-tight mb-2">
              {countCustomers.toLocaleString('vi-VN')}+
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-200 font-headline">
              Khách Hàng Hài Lòng
            </p>
            <span className="text-xs text-gray-400 mt-1 block font-body">Trên toàn quốc</span>
          </div>

          {/* Stat 2: 4.9★ */}
          <div className="py-4 md:py-0 px-4">
            <div className="text-4xl sm:text-5xl font-bold font-headline text-tertiary tracking-tight mb-2">
              {countRating}★
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-200 font-headline">
              Đánh Giá Trung Bình
            </p>
            <span className="text-xs text-gray-400 mt-1 block font-body">Từ hơn 2.500 lượt review</span>
          </div>

          {/* Stat 3: 500+ */}
          <div className="py-4 md:py-0 px-4">
            <div className="text-4xl sm:text-5xl font-bold font-headline text-secondary tracking-tight mb-2">
              {countPartners}+
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-200 font-headline">
              Đại Lý & Điểm Bán
            </p>
            <span className="text-xs text-gray-400 mt-1 block font-body">Hệ thống phân phối rộng khắp</span>
          </div>

        </div>
      </div>
    </section>
  );
}
