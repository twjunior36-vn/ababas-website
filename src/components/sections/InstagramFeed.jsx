import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

const FacebookIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const socialPosts = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyfv2EGU09n2Vdufj34VQvaOZFuLb2Uv9wamoEelL7YxwOozauSD1Y8SqWDWMwTM3Z3NZpgq05Oe5Gw4_qK2UesXa7eEx3Le9v_6J4AemKGOPIaUPNxyY6Weecogi5qJoMv4VMxsNWXp0N1uYT9yFMVxsC2uajnDJHnkHsTOIQjrbLrn6rFss8EiCJJ84U4WOsGQ6x2S_VxeJTPi1SMBACgI0wpTGXbyGUHW_nzuE3Px9Jub8kdQrS_A',
    user: 'Linh Đan',
    likes: 1250,
    tag: '#Ababas2026',
    caption: 'Mê em dép sục Cloud Walker Pro này quá, đi êm chân dã man!'
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9MLpWqW3IziqgauczZZ2hSEdPwz38lLDthQjWyT4EHt4giMCsC5JG3IRFj9p4silQJAZxwH2cHrpA9pF63i6gxKdzbTOQSvP8ivwATmoE9VjDafVIiwUA9vO_EUScPvxjEWYm4uxBtP478RMDWFEmF_uB7ENzyKHKUvberI3wJ3HkeNCwyRCE_p2gLBGP_frUeW95xs5KRuT6lPmCZHhe0hmT-wx5O2IYt21u0TJEk5sLrNUnMUwMDg',
    user: 'Mai Anh',
    likes: 2490,
    tag: '#AbabasStyle',
    caption: 'Outfit dạo phố hack dáng 5cm cực đỉnh từ Ababas.'
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsBG4c2MrWIaefSpc_9IpcxUiTeDfXQIHg6YpPEkmPS0gdOFVTaMqbbltshN1ADLcvjc6vJVkxvP2YOBYbsdVuptbggq4NQhB6xMDFZnHtWV9kkAItSLSncRsPWpyU3uZUCroFTKrn1V0247pTXUUw9jvEBAeV6WcOfnZcS2fBvIZbil0IMGTzhx2G1SCWZBk9CqjfTjOTfBN2cLU4bOL7O2by9qd4IBScPn8U08UvdpmQBMql3Kw7tA',
    user: 'Thảo Nhi',
    likes: 1870,
    tag: '#PinkBloom',
    caption: 'Set charm 3D kẹo ngọt DIY xinh xỉu luôn mn ơi.'
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtxT9VvDj1ihwpNCIy2gjKg8gmJApnsRn0ggpBsR9HQGFTvxKQFQnYrAhM1Wr5zoRGr9Gc8v9Xher0G2tex1lkbhlz1SX2khczp8l6VSknILgIFa4snjNbDqtRpA4gnbol6fx4aVljM5l_xIW1Xj4IM3fPv5QI0Kx2dLrHgeogA28hdWqdrKyLGUcEsmvnTIIAcLE09WNRbDI10YLA8y4PNcO8W5nSadDSkDAN-YwWrIxIlxBOh0W4xQ',
    user: 'Hoàng Quân',
    likes: 3100,
    tag: '#AbabasMidnight',
    caption: 'Dép bánh mì mềm êm, đi trời mưa không sợ trơn trượt.'
  }
];

export default function InstagramFeed() {
  return (
    <section className="w-full section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <a
            href="https://www.facebook.com/Ababas2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-secondary-container text-on-secondary-fixed rounded-full text-xs font-montserrat font-bold mb-3 hover:opacity-90 transition-opacity"
          >
            <FacebookIcon size={14} className="text-secondary" />
            <span>Fanpage Facebook: @Ababas2026</span>
          </a>
          
          <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-primary mb-2">
            Cộng Đồng #AbabasStyle
          </h2>
          
          <p className="text-sm text-on-surface-variant font-montserrat">
            Cùng hàng nghìn khách hàng chia sẻ khoảnh khắc phong cách mỗi ngày trên Facebook & Shopee.
          </p>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {socialPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://www.facebook.com/Ababas2026"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card aspect-square relative group overflow-hidden block"
            >
              <img
                src={post.image}
                alt={post.tag}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <FacebookIcon size={24} className="mb-2 text-secondary-fixed-dim" />
                <span className="font-montserrat font-bold text-xs">{post.user}</span>
                <p className="text-[11px] text-gray-200 mt-1 line-clamp-2 italic">"{post.caption}"</p>
                <div className="flex items-center gap-1 text-xs text-secondary-container mt-2">
                  <Heart size={12} className="fill-secondary-container" />
                  <span>{post.likes} lượt thích</span>
                </div>
                <span className="text-[10px] text-gray-300 mt-1 font-mono">{post.tag}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Action Button Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/Ababas2026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2.5 px-6"
          >
            <span>Ghé thăm Facebook @Ababas2026</span>
            <ExternalLink size={14} />
          </a>
          <a
            href="https://shopee.vn/ababas_vn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 px-6"
          >
            <span>Gian hàng Shopee: ababas_vn</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
