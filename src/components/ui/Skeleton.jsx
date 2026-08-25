import React from 'react';

export default function Skeleton({
  type = 'text', // 'product-card' | 'text' | 'banner' | 'image'
  lines = 3,
  className = '',
}) {
  if (type === 'product-card') {
    return (
      <div className={`bg-white rounded-card overflow-hidden border border-gray-100 p-4 flex flex-col gap-3 ${className}`}>
        <div className="w-full aspect-square rounded-lg skeleton" />
        <div className="h-4 w-3/4 rounded skeleton mt-2" />
        <div className="h-3 w-1/2 rounded skeleton" />
        <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
          <div className="h-5 w-1/3 rounded skeleton" />
          <div className="h-8 w-1/4 rounded-pill skeleton" />
        </div>
      </div>
    );
  }

  if (type === 'banner') {
    return (
      <div className={`w-full h-80 rounded-card skeleton ${className}`} />
    );
  }

  if (type === 'image') {
    return (
      <div className={`w-full h-full rounded-card skeleton ${className}`} />
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="h-4 rounded skeleton"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  );
}
