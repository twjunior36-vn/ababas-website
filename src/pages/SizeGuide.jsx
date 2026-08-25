import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Ruler, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { pageTransitionVariant, staggerContainerVariant, fadeUpVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function SizeGuide() {
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView('/huong-dan-size', `Hướng Dẫn Chọn Size Chuẩn | ${BRAND_NAME}`);
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Đặt Bàn Chân Lên Giấy',
      desc: 'Đặt một tờ giấy trắng phẳng trên sàn sát tường. Đặt bàn chân đứng thẳng lên giấy, gót chân chạm nhẹ vào tường.',
    },
    {
      step: '02',
      title: 'Đánh Dấu Điểm Dài Nhất',
      desc: 'Dùng bút chì giữ vuông góc với mặt sàn, đánh dấu điểm dài nhất của ngón chân (thường là ngón cái hoặc ngón trỏ).',
    },
    {
      step: '03',
      title: 'Đo Chiều Dài & Đối Chiếu',
      desc: 'Dùng thước kẻ đo khoảng cách từ mép gót chân đến điểm đã đánh dấu (cm), sau đó tra bảng size bên dưới.',
    },
  ];

  const sizeTable = [
    { sizeVN: 35, footLength: '22.0 – 22.5 cm', us: '4.5', uk: '3.5', eu: '35' },
    { sizeVN: 36, footLength: '22.5 – 23.0 cm', us: '5.5', uk: '4.5', eu: '36' },
    { sizeVN: 37, footLength: '23.0 – 23.5 cm', us: '6.5', uk: '5.5', eu: '37' },
    { sizeVN: 38, footLength: '23.5 – 24.0 cm', us: '7.5', uk: '6.5', eu: '38' },
    { sizeVN: 39, footLength: '24.0 – 24.5 cm', us: '8.0', uk: '7.0', eu: '39' },
    { sizeVN: 40, footLength: '24.5 – 25.0 cm', us: '8.5', uk: '7.5', eu: '40' },
    { sizeVN: 41, footLength: '25.0 – 25.5 cm', us: '9.0', uk: '8.0', eu: '41' },
    { sizeVN: 42, footLength: '25.5 – 26.0 cm', us: '9.5', uk: '8.5', eu: '42' },
    { sizeVN: 43, footLength: '26.0 – 26.5 cm', us: '10.0', uk: '9.0', eu: '43' },
    { sizeVN: 44, footLength: '26.5 – 27.0 cm', us: '10.5', uk: '9.5', eu: '44' },
  ];

  const tips = [
    'Nên đo kích thước chân vào buổi chiều hoặc tối vì bàn chân có xu hướng dãn nở nhẹ sau một ngày vận động.',
    'Nếu bàn chân của bạn dày hoặc mu bàn chân bè ngang, hãy chọn tăng 1 size để có cảm giác thoải mái nhất.',
    'Đối với dòng dép bánh mì chunky có viền đệm ôm, bạn có thể chọn đúng size chuẩn theo bảng đo.',
    'ABABAS hỗ trợ đổi size hoàn toàn miễn phí trong vòng 30 ngày nếu không vừa chân.',
  ];

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="size-guide-page py-10 bg-light min-h-screen font-poppins space-y-12"
    >
      <Helmet>
        <title>Bảng Size & Hướng Dẫn Đo Chân Chuẩn | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Hướng dẫn cách đo chiều dài bàn chân và bảng quy đổi size dép chuẩn của ABABAS."
        />
        <link rel="canonical" href="https://ababas.netlify.app/huong-dan-size" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section 1: Page Header */}
        <div className="bg-white rounded-card p-8 sm:p-12 border border-gray-100 shadow-sm text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Ruler size={15} />
            <span>Kích Thước Chuẩn</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-navy mb-3">
            Hướng Dẫn Chọn Size Dép ABABAS
          </h1>
          <p className="text-xs sm:text-sm text-muted max-w-lg mx-auto">
            Hãy dành ra 2 phút để đo chân chính xác nhằm chọn được đôi dép êm ái và vừa vặn nhất với bạn.
          </p>
        </div>

        {/* Section 2: 3-Step Measuring Guide */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-navy">
              3 Bước Đo Chiều Dài Bàn Chân
            </h2>
          </div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {steps.map((st, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className="bg-white rounded-card p-6 border border-gray-100 shadow-sm relative overflow-hidden"
              >
                <div className="text-4xl font-black text-primary/20 mb-3">{st.step}</div>
                <h3 className="font-bold text-base text-navy mb-2">{st.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{st.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 3: Size Conversion Table */}
        <div className="bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-black text-navy mb-6">
            Bảng Quy Đổi Size Dép ABABAS Chuẩn
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-primary bg-primary/5 text-navy font-bold text-xs uppercase tracking-wider">
                  <th className="p-3.5">Size VN</th>
                  <th className="p-3.5">Chiều Dài Chân (cm)</th>
                  <th className="p-3.5">Size US</th>
                  <th className="p-3.5">Size UK</th>
                  <th className="p-3.5">Size EU</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {sizeTable.map((row) => (
                  <tr
                    key={row.sizeVN}
                    className="hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    <td className="p-3.5 font-extrabold text-primary">{row.sizeVN}</td>
                    <td className="p-3.5 font-semibold text-navy">{row.footLength}</td>
                    <td className="p-3.5 text-muted">{row.us}</td>
                    <td className="p-3.5 text-muted">{row.uk}</td>
                    <td className="p-3.5 text-muted">{row.eu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Tips Grid */}
        <div className="bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-black text-navy mb-6 flex items-center gap-2">
            <Lightbulb size={22} className="text-gold" />
            <span>Mẹo Chọn Size Hữu Ích</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex gap-3 p-4 rounded-btn bg-light border border-gray-100">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-dark leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: CTA */}
        <div className="bg-navy text-white rounded-card p-8 sm:p-10 text-center shadow-xl flex flex-col items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-black">Vẫn Chưa Chắc Chắn Về Size Chân Của Mình?</h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md">
            Đừng ngần ngại liên hệ hotline hoặc nhắn tin cho đội ngũ tư vấn viên ABABAS để được đo size trực tuyến!
          </p>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/lien-he')}
            icon={<ArrowRight size={16} />}
          >
            Liên Hệ Tư Vấn Size 24/7
          </Button>
        </div>

      </div>
    </motion.div>
  );
}
