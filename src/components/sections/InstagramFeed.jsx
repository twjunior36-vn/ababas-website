import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramFeed() {
  const feedImages = [
    'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=80',
  ];

  const instagramLink = SOCIAL_LINKS.find((s) => s.name === 'Instagram')?.url || 'https://instagram.com';

  return (
    <section className="py-20 bg-light font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-beige text-dark border border-border text-xs font-semibold uppercase tracking-wider mb-2 font-headline">
              <InstagramIcon size={14} className="text-primary" />
              <span>@ababas.official</span>
            </div>
            <h2 className="text-3xl font-bold text-dark font-headline tracking-tight">
              Theo Dõi ABABAS Trên Instagram
            </h2>
          </div>

          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-colors font-headline"
          >
            <span>Xem thêm ảnh</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* 6 Square Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {feedImages.map((img, idx) => (
            <a
              key={idx}
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square rounded-card overflow-hidden block shadow-xs border border-border"
            >
              <img
                src={img}
                alt={`ABABAS Lookbook ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <InstagramIcon size={26} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
