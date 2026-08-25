import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Handshake, Store, TrendingUp, Award, Quote, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { partnerStats, partnerCategories, testimonials } from '../data/partners';
import { pageTransitionVariant, staggerContainerVariant, fadeUpVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function Partners() {
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView('/doi-tac', `Đối Tác & Đại Lý | ${BRAND_NAME}`);
  }, []);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="partners-page py-10 bg-light min-h-screen font-poppins"
    >
      <Helmet>
        <title>Mạng Lưới Đối Tác & Đại Lý Phân Phối | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Hợp tác kinh doanh cùng thương hiệu dép thời trang ABABAS. Chính sách chiết khấu đại lý hấp dẫn và hỗ trợ toàn diện."
        />
        <link rel="canonical" href="https://ababas.netlify.app/doi-tac" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section 1: Page Hero */}
        <div className="bg-white rounded-card p-8 sm:p-12 border border-gray-100 shadow-sm text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake size={15} />
            <span>Mạng Lưới Phân Phối</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy mb-3">
            Đối Tác & Đại Lý ABABAS
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-2xl mx-auto">
            Đồng hành cùng các sàn thương mại điện tử hàng đầu và chuỗi cửa hàng bán lẻ sneaker trên toàn quốc để mang sản phẩm chất lượng đến với hàng triệu khách hàng.
          </p>
        </div>

        {/* Section 2: Stats Bar (Orange BG) */}
        <div className="bg-primary text-white rounded-card p-8 shadow-glow grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {partnerStats.map((st, i) => (
            <div key={i} className="py-2 md:py-0">
              <div className="text-3xl sm:text-4xl font-black mb-1">{st.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/90">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Section 3: Partner Logo Grid Grouped by Category */}
        <div className="space-y-10">
          {partnerCategories.map((group, idx) => (
            <div key={idx} className="bg-white rounded-card p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-navy mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Store size={20} className="text-primary" />
                <span>{group.category}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.partners.map((p) => (
                  <div
                    key={p.id}
                    className="p-6 rounded-card bg-light border border-gray-100 shadow-xs hover:shadow-card hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-pill">
                        {p.badge}
                      </span>
                    </div>

                    <div className="text-xl font-black text-navy tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {p.logoText}
                    </div>

                    <p className="text-xs text-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section 4: Testimonial Cards */}
        <div className="bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Đánh Giá Hợp Tác</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Đối Tác Nói Gì Về ABABAS?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-card bg-light border-l-4 border-primary shadow-sm flex flex-col justify-between"
              >
                <div className="mb-4">
                  <Quote size={28} className="text-primary/30 mb-2" />
                  <p className="text-sm text-dark italic leading-relaxed">"{t.quote}"</p>
                </div>
                <div>
                  <div className="font-bold text-sm text-navy">{t.author}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: CTA Section */}
        <div className="bg-navy text-white rounded-card p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black">
              Trở Thành Đại Lý Phân Phối Cùng ABABAS
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Nhận ngay chính sách chiết khấu hấp dẫn, hỗ trợ kệ trưng bày POSM và tài liệu truyền thông thương hiệu độc quyền.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/lien-he')}
                icon={<ArrowRight size={18} />}
              >
                Liên Hệ Ngay
              </Button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
