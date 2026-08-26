import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowUpCircle, Sparkles, Wand2 } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Chất liệu EVA Cao Cấp',
    description: 'Đúc nguyên khối siêu nhẹ, kháng khuẩn, chống thấm nước và chống trơn trượt chuẩn an toàn mọi bề mặt.',
    badge: 'Chống trượt 100%',
    bgIcon: 'bg-secondary-container text-secondary-rose',
  },
  {
    icon: ArrowUpCircle,
    title: 'Đế Dày Nâng Chiều Cao',
    description: 'Thiết kế đế bánh mì 4 - 5cm tăng chiều cao tự nhiên, êm ái giảm áp lực lên gót chân suốt ngày dài.',
    badge: 'Đế dày 5cm',
    bgIcon: 'bg-tertiary-container text-tertiary',
  },
  {
    icon: Sparkles,
    title: 'Charm 3D Sắc Nét DIY',
    description: 'Tùy biến không giới hạn với hàng trăm mẫu charm 3D nổi bật, dễ dàng tháo lắp theo cá tính riêng.',
    badge: 'Tự do sáng tạo',
    bgIcon: 'bg-primary-light text-primary',
  },
  {
    icon: Wand2,
    title: 'Thiết Kế Thời Thượng',
    description: 'Phong cách Hàn Quốc trẻ trung, bảng màu pastel ngọt ngào, dễ dàng phối mọi trang phục dạo phố.',
    badge: 'Chuẩn Vibe Gen Z',
    bgIcon: 'bg-surface-variant text-dark',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-secondary-rose bg-secondary-container px-3.5 py-1 rounded-full">
            Đặc quyền thương hiệu
          </span>
          <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-dark mt-3 mb-4">
            Vì sao chọn Ababas?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-on-surface-variant font-montserrat">
            Mỗi đôi dép Ababas không chỉ là một phụ kiện di chuyển mà còn là tuyên ngôn phong cách cá nhân đầy tự tin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bento-card p-8 flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bgIcon} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                  <Icon size={30} />
                </div>
                
                <h3 className="font-quicksand font-bold text-xl text-dark mb-3">
                  {item.title}
                </h3>
                
                <p className="font-montserrat text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-outline-variant/30 w-full flex justify-center">
                  <span className="text-xs font-bold text-primary bg-primary-light px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
