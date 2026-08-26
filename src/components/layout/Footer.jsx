import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Truck, ArrowUpRight } from 'lucide-react';
import { footerLinks } from '../../data/navigation';
import { HOTLINE, SUPPORT_EMAIL, STORE_LOCATIONS, SOCIAL_LINKS } from '../../utils/constants';
import logoWhite from '../../assets/logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-white/5 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-fixed-dim flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="font-quicksand font-bold text-sm text-white">Chính Hãng 100%</h4>
              <p className="text-xs text-gray-400">Đúc EVA nguyên khối cao cấp</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary-fixed-dim flex-shrink-0">
              <RefreshCw size={26} />
            </div>
            <div>
              <h4 className="font-quicksand font-bold text-sm text-white">Đổi Trả 7 Ngày</h4>
              <p className="text-xs text-gray-400">Đổi size miễn phí toàn quốc</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center text-primary-fixed flex-shrink-0">
              <Truck size={26} />
            </div>
            <div>
              <h4 className="font-quicksand font-bold text-sm text-white">Giao Hàng Hỏa Tốc</h4>
              <p className="text-xs text-gray-400">Được kiểm tra trước khi nhận</p>
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
                className="h-20 sm:h-24 lg:h-28 w-auto min-w-[170px] sm:min-w-[210px] object-contain"
              />
            </Link>

            <p className="text-xs font-bold text-secondary-fixed-dim uppercase tracking-wider">
              High Style, Low Effort, True Value
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              ABABAS là thương hiệu dép thời trang cao cấp dành cho giới trẻ, định hình phong cách sống năng động với chất liệu êm ái, bền bỉ và bộ sưu tập Charm 3D độc quyền.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1.5 font-montserrat">
              <div>📍 <strong>Showroom chính:</strong> {STORE_LOCATIONS[0].address}</div>
              <div>📞 <strong>Hotline:</strong> <span className="text-white font-bold">{HOTLINE}</span></div>
              <div>✉️ <strong>Email:</strong> <span className="text-white">{SUPPORT_EMAIL}</span></div>
            </div>
          </div>

          {/* Column 2: Quick Links & Support (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-montserrat">
                Khám Phá
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-secondary-fixed-dim transition-colors flex items-center gap-1">
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-montserrat">
                Hỗ Trợ Khách Hàng
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-secondary-fixed-dim transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: B2B Partners Callout (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-montserrat">
              Đối Tác Đại Lý B2B
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Trở thành nhà phân phối chính thức của Ababas với mức chiết khấu hấp dẫn đến 45%:
            </p>

            <Link
              to="/doi-tac"
              className="btn-primary inline-flex text-xs py-2.5 px-5 font-bold"
            >
              <span>Đăng ký đại lý</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ABABAS Footwear Vietnam. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Thiết kế theo chuẩn</span>
            <span className="text-secondary-fixed-dim font-bold">Google Stitch</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
