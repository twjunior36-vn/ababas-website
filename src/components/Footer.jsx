import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin, ArrowRight, ShieldCheck, RefreshCw, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', color: '#ffffff', paddingTop: '70px', paddingBottom: '30px' }}>
      <div className="container">
        
        {/* Top Highlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            paddingBottom: '50px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(255, 107, 53, 0.15)', color: 'var(--color-primary)' }}>
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '4px' }}>Chính Hãng 100%</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Đảm bảo chất lượng đúc nguyên khối</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(0, 210, 211, 0.15)', color: 'var(--color-accent)' }}>
              <RefreshCw size={28} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '4px' }}>Đổi Size Linh Hoạt</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Đổi trả miễn phí trong 7 ngày</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(255, 107, 53, 0.15)', color: 'var(--color-primary)' }}>
              <Phone size={28} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '4px' }}>Hotline Hỗ Trợ 24/7</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{CONTACT_INFO.hotline}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            padding: '50px 0'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #FF8E53 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Flame size={20} />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff' }}>
                ABA<span style={{ color: 'var(--color-primary)' }}>BAS</span>
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Thương hiệu dép thời trang dành cho thế hệ trẻ. Mang đến sự êm ái, bền bỉ và phong cách tự tin trên từng bước chân.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {CONTACT_INFO.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    fontWeight: '600'
                  }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px', position: 'relative' }}>
              Khám Phá
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li>
                <Link to="/products" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')} onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}>
                  Tất Cả Sản Phẩm
                </Link>
              </li>
              <li>
                <Link to="/collections" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')} onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}>
                  Bộ Sưu Tập Mùa Hè 2025
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')} onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}>
                  Câu Chuyện Thương Hiệu
                </Link>
              </li>
              <li>
                <Link to="/partners" style={{ color: '#94A3B8' }} onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')} onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}>
                  Mạng Lưới Đại Lý & Đối Tác
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px' }}>
              Hỗ Trợ Khách Hàng
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#94A3B8' }}>
              <li>Hướng dẫn chọn size dép chuẩn</li>
              <li>Chính sách bảo hành & đổi trả</li>
              <li>Chính sách giao hàng toàn quốc</li>
              <li>Câu hỏi thường gặp (FAQ)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px' }}>
              Liên Hệ Trực Tiếp
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{CONTACT_INFO.addresses[0].address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                <span>Hotline: <strong style={{ color: '#ffffff' }}>{CONTACT_INFO.hotline}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.85rem',
            color: '#64748B'
          }}
        >
          <p>© {new Date().getFullYear()} Ababas Footwear. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Thiết kế với <Heart size={14} color="var(--color-primary)" fill="var(--color-primary)" /> phong cách trẻ trung năng động.
          </p>
        </div>

      </div>
    </footer>
  );
}
