import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Flame, Target, Compass, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import StatsCounter from '../components/sections/StatsCounter';
import { pageTransitionVariant, staggerContainerVariant, fadeUpVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME, BRAND_SLOGAN, BRAND_TAGLINE } from '../utils/constants';

export default function About() {
  useEffect(() => {
    trackPageView('/ve-chung-toi', `Về Chúng Tôi – Câu Chuyện Thương Hiệu | ${BRAND_NAME}`);
  }, []);

  const timeline = [
    { year: '2023', title: 'Khởi Đầu Đầy Đam Mê', desc: 'Thành lập studio thiết kế đầu tiên tại Hà Nội, phát triển mẫu dép đúc quai ngang ABABAS Classic.' },
    { year: '2024', title: 'Đột Phá Thị Trường', desc: 'Cán mốc 50.000 đôi dép bán ra, phủ sóng trên các sàn TMĐT và chuỗi cửa hàng thời trang.' },
    { year: '2025', title: 'Nâng Tầm Trải Nghiệm', desc: 'Ra mắt công nghệ đệm khí Cushion Cloud và mở rộng hệ thống đại lý trên toàn quốc.' },
  ];

  const team = [
    { name: 'Nguyễn Thành Nam', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80' },
    { name: 'Trần Thảo Linh', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80' },
    { name: 'Lê Hoàng Quân', role: 'Production Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80' },
    { name: 'Vũ Hải Yến', role: 'Brand & Marketing Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80' },
  ];

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="about-page py-10 bg-light min-h-screen font-poppins space-y-16"
    >
      <Helmet>
        <title>Về Chúng Tôi – Câu Chuyện Thương Hiệu | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Khám phá hành trình xây dựng thương hiệu dép thời trang ABABAS – Bước đi phong cách, tự tin tỏa sáng."
        />
        <link rel="canonical" href="https://ababas.netlify.app/ve-chung-toi" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Hero Split Layout */}
        <div className="bg-white rounded-card p-8 sm:p-14 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Khởi Nguồn Thương Hiệu</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-navy leading-tight">
              Định Nghĩa Lại <span className="text-primary">Đôi Dép</span> Cho Thế Hệ Mới
            </h1>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              ABABAS ra đời với niềm tin rằng dép không đơn thuần là vật dụng đi lại trong nhà hay đi chơi, mà là một phụ kiện thời trang thể hiện cá tính tự do và sự phóng khoáng của giới trẻ.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Chúng tôi tập trung vào 3 yếu tố cốt lõi: <strong>Độ êm ái vượt trội</strong>, <strong>Thiết kế form dáng trẻ trung</strong> và <strong>Độ bền đúc khối đỉnh cao</strong>.
            </p>
          </div>

          <div className="relative rounded-card overflow-hidden h-80 sm:h-96 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80"
              alt="ABABAS Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Section 2: Timeline */}
        <div className="bg-white rounded-card p-8 sm:p-12 border border-gray-100 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Hành Trình Kiến Tạo</span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1">Cột Mốc Phát Triển</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {timeline.map((item, idx) => (
              <div key={idx} className="p-6 rounded-card bg-light border border-gray-100 relative">
                <div className="text-3xl font-black text-primary mb-2">{item.year}</div>
                <h3 className="font-bold text-base text-navy mb-2">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-card p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="w-14 h-14 rounded-btn bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Target size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Sứ Mệnh</h3>
              <p className="text-sm text-muted leading-relaxed">
                Tạo nên những đôi dép thời trang chất lượng cao nhất với mức giá hợp lý nhất cho mọi bạn trẻ Việt Nam, đồng hành cùng bạn trên mọi hành trình khám phá cuộc sống.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-card p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="w-14 h-14 rounded-btn bg-navy/10 flex items-center justify-center text-navy mb-6">
              <Compass size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Tầm Nhìn</h3>
              <p className="text-sm text-muted leading-relaxed">
                Trở thành thương hiệu dép thời trang Gen Z hàng đầu Đông Nam Á, được công nhận bởi sự sáng tạo không ngừng nghỉ và trách nhiệm với môi trường.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Section 4: Stats Counter */}
      <StatsCounter />

      {/* Section 5: Team Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Đội Ngũ Phát Triển</span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy mt-1">Con Người Đằng Sau ABABAS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card overflow-hidden border border-gray-100 shadow-sm hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="aspect-square bg-light overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-sm text-navy">{member.name}</h4>
                <p className="text-xs text-primary font-semibold mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
