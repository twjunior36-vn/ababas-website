import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowUpCircle, Sparkles, Wand2 } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Chất liệu EVA',
    description: 'Cao cấp, chống trơn trượt hiệu quả, an toàn mọi địa hình.',
    badge: 'Chống trượt 100%',
    bgIcon: 'bg-secondary-container text-secondary',
  },
  {
    icon: ArrowUpCircle,
    title: 'Đế dày êm ái',
    description: 'Thiết kế nâng chiều cao tinh tế, êm ái từng bước chân.',
    badge: 'Đế dày 5cm',
    bgIcon: 'bg-tertiary-container text-tertiary',
  },
  {
    icon: Sparkles,
    title: 'Charm 3D',
    description: 'Sắc nét, đa dạng, dễ dàng tùy chỉnh theo cá tính riêng.',
    badge: 'Tự do sáng tạo',
    bgIcon: 'bg-primary-container text-primary',
  },
  {
    icon: Wand2,
    title: 'Thiết kế hiện đại',
    description: 'Trẻ trung, thời trang, dễ dàng phối hợp nhiều trang phục.',
    badge: 'Chuẩn Vibe Gen Z',
    bgIcon: 'bg-surface-variant text-on-surface-variant',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-primary mb-4">
            Vì sao chọn Ababas
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4" />
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
                className="glass-card p-8 flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-full ${item.bgIcon} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                  <Icon size={30} />
                </div>
                
                <h3 className="font-quicksand font-bold text-xl text-primary mb-3">
                  {item.title}
                </h3>
                
                <p className="font-montserrat text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-outline-variant/30 w-full flex justify-center">
                  <span className="text-xs font-bold font-montserrat text-secondary bg-secondary-container/50 px-3 py-1 rounded-full">
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
