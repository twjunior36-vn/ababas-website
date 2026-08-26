import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PartnersStrip() {
  return (
    <section className="w-full section-padding bg-surface-container-high relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card p-8 sm:p-12 lg:p-16 border-2 border-primary/20 bg-surface-cream">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text side */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-tertiary-container text-tertiary rounded-full text-xs font-montserrat font-bold mb-4">
                <Handshake size={15} />
                <span>Cơ hội hợp tác B2B</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-dark mb-4 leading-snug">
                Trở thành đại lý & nhà phân phối <br className="hidden sm:inline" />
                <span className="text-primary">chính thức của Ababas</span>
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant font-montserrat mb-8 max-w-2xl leading-relaxed">
                Chiết khấu đại lý hấp dẫn lên đến <strong>45%</strong>, hỗ trợ toàn diện tư liệu marketing, hình ảnh người mẫu cao cấp, bảng biển POSM và chính sách đổi size linh hoạt.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/70 p-3.5 rounded-xl border border-outline-variant/30">
                  <TrendingUp size={20} className="text-primary shrink-0" />
                  <span className="text-xs font-montserrat font-bold text-dark">Chiết khấu đến 45%</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 p-3.5 rounded-xl border border-outline-variant/30">
                  <Truck size={20} className="text-tertiary shrink-0" />
                  <span className="text-xs font-montserrat font-bold text-dark">Giao hàng 24 - 48h</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 p-3.5 rounded-xl border border-outline-variant/30">
                  <ShieldCheck size={20} className="text-secondary-rose shrink-0" />
                  <span className="text-xs font-montserrat font-bold text-dark">Đổi trả linh hoạt</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/doi-tac" className="btn-primary">
                  <span>Tìm hiểu chính sách đại lý</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/lien-he" className="btn-secondary">
                  <span>Tư vấn trực tiếp</span>
                </Link>
              </div>
            </div>

            {/* Quick Stat Counter box */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="bg-white p-6 rounded-2xl border border-outline-variant/40 shadow-sm text-center">
                <div className="font-quicksand font-bold text-4xl text-primary mb-1">150+</div>
                <p className="text-xs font-montserrat text-muted uppercase tracking-wider font-semibold">Đại lý toàn quốc</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-outline-variant/40 shadow-sm text-center">
                <div className="font-quicksand font-bold text-4xl text-secondary-rose mb-1">50.000+</div>
                <p className="text-xs font-montserrat text-muted uppercase tracking-wider font-semibold">Đôi dép bán ra mỗi tháng</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
