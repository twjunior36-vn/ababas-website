import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const InstagramIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instagramPosts = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyfv2EGU09n2Vdufj34VQvaOZFuLb2Uv9wamoEelL7YxwOozauSD1Y8SqWDWMwTM3Z3NZpgq05Oe5Gw4_qK2UesXa7eEx3Le9v_6J4AemKGOPIaUPNxyY6Weecogi5qJoMv4VMxsNWXp0N1uYT9yFMVxsC2uajnDJHnkHsTOIQjrbLrn6rFss8EiCJJ84U4WOsGQ6x2S_VxeJTPi1SMBACgI0wpTGXbyGUHW_nzuE3Px9Jub8kdQrS_A',
    user: '@linh.dan99',
    likes: 524,
    tag: '#AbabasStyle'
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9MLpWqW3IziqgauczZZ2hSEdPwz38lLDthQjWyT4EHt4giMCsC5JG3IRFj9p4silQJAZxwH2cHrpA9pF63i6gxKdzbTOQSvP8ivwATmoE9VjDafVIiwUA9vO_EUScPvxjEWYm4uxBtP478RMDWFEmF_uB7ENzyKHKUvberI3wJ3HkeNCwyRCE_p2gLBGP_frUeW95xs5KRuT6lPmCZHhe0hmT-wx5O2IYt21u0TJEk5sLrNUnMUwMDg',
    user: '@mai.anh.fashion',
    likes: 890,
    tag: '#CloudWalker'
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZOLlyoFOvFH7QBargprTv1pGOrThkFlqMuB2qDKiZf_Qj3sLriPwlKdGS_6dtGam_euh8OSpIBWV2T4mBnDmakERgWFrcBKXemCPQeINLxI-x3_qVRDtAVBbAcG6_vcVd5i7P2rGvZwSZOMGfaDeV_77593RiDX4ea6WBidMUepx2I1SfDOvM_o3AtUmIofs_cOJV1sjC15e2nMc9vl4l3vBiXsHP30fL0bVICftiFL4jf-jxIz6XQg',
    user: '@tramy.travel',
    likes: 1204,
    tag: '#AbabasSummer'
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsBG4c2MrWIaefSpc_9IpcxUiTeDfXQIHg6YpPEkmPS0gdOFVTaMqbbltshN1ADLcvjc6vJVkxvP2YOBYbsdVuptbggq4NQhB6xMDFZnHtWV9kkAItSLSncRsPWpyU3uZUCroFTKrn1V0247pTXUUw9jvEBAeV6WcOfnZcS2fBvIZbil0IMGTzhx2G1SCWZBk9CqjfTjOTfBN2cLU4bOL7O2by9qd4IBScPn8U08UvdpmQBMql3Kw7tA',
    user: '@quynhchi_vibe',
    likes: 642,
    tag: '#Charm3D'
  }
];

export default function InstagramFeed() {
  return (
    <section className="w-full section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-dark rounded-full text-xs font-montserrat font-bold mb-3">
            <InstagramIcon size={14} className="text-secondary-rose" />
            <span>@ababas.official</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-quicksand font-bold text-dark mb-2">
            Cộng Đồng #AbabasStyle
          </h2>
          <p className="text-sm text-on-surface-variant font-montserrat">
            Tag @ababas.official trên Instagram hoặc TikTok để có cơ hội xuất hiện trên trang chủ!
          </p>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
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
              
              <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <InstagramIcon size={28} className="mb-2" />
                <span className="font-montserrat font-bold text-xs">{post.user}</span>
                <div className="flex items-center gap-1 text-xs text-secondary-container mt-1">
                  <Heart size={12} className="fill-secondary-container" />
                  <span>{post.likes}</span>
                </div>
                <span className="text-[11px] text-gray-200 mt-2 font-mono">{post.tag}</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
