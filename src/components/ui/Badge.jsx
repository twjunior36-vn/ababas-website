import React from 'react';

export default function Badge({
  children,
  variant = 'default', // 'hot' | 'new' | 'sale' | 'gold' | 'default'
  className = '',
}) {
  const variants = {
    hot: 'bg-red-500 text-white font-bold',
    new: 'bg-emerald-500 text-white font-bold',
    sale: 'bg-primary text-white font-bold shadow-xs',
    gold: 'bg-gold text-navy font-black',
    muted: 'bg-gray-100 text-muted font-medium',
    default: 'bg-primary/10 text-primary font-bold',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-pill text-[10px] font-bold uppercase tracking-wider ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}
