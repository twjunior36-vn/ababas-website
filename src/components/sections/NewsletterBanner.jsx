import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { useUI } from '../../context/UIContext';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const { showToast } = useUI();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      showToast('Đăng ký nhận tin thành công! Bạn nhận được voucher giảm 20% 🎉', 'success');
      setEmail('');
    }
  };

  return (
    <section className="bg-beige py-14 text-dark font-body relative overflow-hidden border-t border-border">
      {/* Subtle Background Accents */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-secondary/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-white/80 border border-border text-dark text-xs font-semibold uppercase tracking-wider mb-2 font-headline">
              <Sparkles size={14} className="text-primary" />
              <span>Ưu Đãi Đặc Biệt</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-headline tracking-tight mb-2 text-dark">
              Nhận Voucher Giảm 20% Cho Đơn Hàng Đầu Tiên
            </h2>
            <p className="text-sm text-muted">
              Đăng ký nhận thông tin ra mắt BST mới và các chương trình đặc quyền từ ABABAS.
            </p>
          </div>

          {/* Right Input Form */}
          <form onSubmit={handleSubmit} className="w-full lg:max-w-md flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              required
              placeholder="Nhập địa chỉ email của bạn..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3.5 rounded-pill text-dark text-sm bg-white border border-border placeholder-muted focus:outline-none focus:border-primary font-body shadow-xs"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-neutral hover:bg-neutral/85 text-white text-xs font-semibold uppercase tracking-wider rounded-pill transition-all duration-300 shadow-sm flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer font-headline"
            >
              <span>Đăng Ký</span>
              <Send size={14} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
