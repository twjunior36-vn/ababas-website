import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { useUI } from '../../context/UIContext';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useUI();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubmitted(true);
      showToast('Đăng ký thành công! Mã voucher ABABAS50 đã gửi vào email.', 'success');
      setEmail('');
    } else {
      showToast('Vui lòng nhập địa chỉ email hợp lệ.', 'error');
    }
  };

  return (
    <section className="w-full py-16 bg-surface-cream relative overflow-hidden border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-dark rounded-full text-xs font-montserrat font-bold mb-4">
          <Sparkles size={14} className="text-secondary-rose" />
          <span>Thành viên VIP Ababas Club</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-quicksand font-bold text-dark mb-3">
          Nhận Ngay Voucher <span className="text-primary font-black">50.000₫</span>
        </h2>
        
        <p className="text-sm sm:text-base text-on-surface-variant font-montserrat max-w-xl mx-auto mb-8">
          Đăng ký nhận bản tin để nhận mã ưu đãi cho đơn hàng đầu tiên cùng thông báo sớm nhất về các bộ sưu tập giới hạn.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-2 bg-secondary-container text-dark px-6 py-3 rounded-full font-montserrat font-bold text-sm">
            <CheckCircle2 size={18} className="text-secondary-rose" />
            <span>Mã voucher của bạn: <strong>ABABAS50</strong> (Giảm 50k cho đơn từ 299k)</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-grow">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn..."
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-outline-variant focus:outline-none focus:border-primary text-sm font-montserrat"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              <span>Nhận mã ngay</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
