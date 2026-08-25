import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Truck, Heart, ArrowUpRight } from 'lucide-react';
import { footerLinks } from '../../data/navigation';
import { BRAND_TAGLINE, HOTLINE, SUPPORT_EMAIL, SOCIAL_LINKS, STORE_LOCATIONS } from '../../utils/constants';
import logoWhite from '../../assets/logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/5 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4 p-5 rounded-card bg-white/5 border border-white/5">
            <div className="w-12 h-12 rounded-btn bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Chính Hãng 100%</h4>
              <p className="text-xs text-gray-400">Đúc EVA nguyên khối cao cấp</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-card bg-white/5 border border-white/5">
            <div className="w-12 h-12 rounded-btn bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <RefreshCw size={26} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Đổi Trả 30 Ngày</h4>
              <p className="text-xs text-gray-400">Đổi size miễn phí toàn quốc</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-card bg-white/5 border border-white/5">
            <div className="w-12 h-12 rounded-btn bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
              <Truck size={26} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Giao Hàng Hỏa Tốc</h4>
              <p className="text-xs text-gray-400">Được kiểm tra trước khi trả tiền</p>
            </div>
          </div>
        </div>

        {/* Main 3 Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block py-1">
              <img
                src={logoWhite}
                alt="ababas - High Style, Low Effort, True Value"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-xs font-bold text-primary uppercase tracking-wider">
              {BRAND_TAGLINE}
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              ABABAS là thương hiệu dép thời trang dành cho giới trẻ, định hình phong cách sống năng động với chất liệu êm ái, bền bỉ và bắt trọn từng xu hướng.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <div>📍 <strong>Showroom chính:</strong> {STORE_LOCATIONS[0].address}</div>
              <div>📞 <strong>Hotline:</strong> <span className="text-white font-bold">{HOTLINE}</span></div>
              <div>✉️ <strong>Email:</strong> <span className="text-white">{SUPPORT_EMAIL}</span></div>
            </div>
          </div>

          {/* Column 2: Quick Links & Support (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Khám Phá
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-primary transition-colors flex items-center gap-1">
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Hỗ Trợ Khách Hàng
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Social & Community (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Kết Nối Cùng ABABAS
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Theo dõi chúng tôi trên mạng xã hội để cập nhật BST mới và nhận voucher độc quyền:
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-btn bg-white/5 hover:bg-primary text-xs text-white transition-colors"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ABABAS Footwear Vietnam. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Thiết kế theo chuẩn</span>
            <span className="text-primary font-bold">Google Stitch</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
