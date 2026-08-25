import React from 'react';

export default function PartnersStrip() {
  const partnerLogos = [
    { name: 'SHOPEE MALL', badge: 'Top 1 Brand' },
    { name: 'TIKTOK SHOP', badge: '500K+ Sold' },
    { name: 'SNEAKER ZONE', badge: '35 Stores' },
    { name: 'LAZMALL', badge: 'Official Store' },
    { name: 'STREETWEAR HUB', badge: 'Partner' },
    { name: 'URBAN STORE', badge: 'Flagship' },
  ];

  // Duplicate for infinite marquee effect
  const marqueeItems = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-12 bg-white border-y border-border overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted font-headline">
          Đối Tác Phân Phối & Kênh Bán Hàng Chính Hãng
        </span>
      </div>

      <div className="relative w-full overflow-hidden group">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-8 w-max animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
          {marqueeItems.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-card bg-light border border-border filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-card hover:border-primary/40"
            >
              <div className="font-bold text-sm tracking-wider text-dark font-headline">
                {p.name}
              </div>
              <span className="text-[10px] font-semibold bg-beige text-dark border border-border px-2 py-0.5 rounded-pill font-label">
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
