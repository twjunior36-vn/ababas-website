import React, { useState } from 'react';
import { ChevronDown, RotateCcw, SlidersHorizontal, Check } from 'lucide-react';
import { formatVND } from '../../utils/formatCurrency';

export default function ProductFilter({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults = 0,
}) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const categories = [
    { id: 'clog', label: 'Dép Clog Bánh Mì' },
    { id: 'sandal', label: 'Dép Sandal EVA' },
    { id: 'charm', label: 'Set Charm 3D DIY' },
  ];

  const colors = [
    { id: 'den', label: 'Đen', hex: '#1C1B1B' },
    { id: 'trang', label: 'Trắng Kem', hex: '#FDFDF5' },
    { id: 'hong', label: 'Hồng Pastel', hex: '#FDBEC9' },
    { id: 'rêu', label: 'Olive / Rêu', hex: '#5E604D' },
    { id: 'xanh', label: 'Xanh Mint', hex: '#BAEAFF' },
    { id: 'man', label: 'Rose Mận', hex: '#81515A' },
  ];

  const sizes = [36, 37, 38, 39, 40, 41, 42];

  // Category toggle
  const handleCategoryToggle = (catId) => {
    const current = filters.category || [];
    const updated = current.includes(catId)
      ? current.filter((id) => id !== catId)
      : [...current, catId];
    onFilterChange({ category: updated, page: 1 });
  };

  // Color toggle
  const handleColorToggle = (colorId) => {
    const current = filters.colors || [];
    const updated = current.includes(colorId)
      ? current.filter((id) => id !== colorId)
      : [...current, colorId];
    onFilterChange({ colors: updated, page: 1 });
  };

  // Size toggle
  const handleSizeToggle = (size) => {
    const current = filters.sizes || [];
    const updated = current.includes(size)
      ? current.filter((s) => s !== size)
      : [...current, size];
    onFilterChange({ sizes: updated, page: 1 });
  };

  return (
    <div className="glass-card bg-white p-5 space-y-6 font-montserrat">
      
      {/* Header & Reset Button */}
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-secondary" />
          <span className="font-quicksand font-bold text-sm text-primary">Bộ Lọc</span>
        </div>

        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary hover:text-primary transition-colors"
        >
          <RotateCcw size={11} />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* 1. Category Filter */}
      <div>
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-dark mb-3"
        >
          <span>Danh Mục</span>
          <ChevronDown size={14} className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
        </button>

        {isCategoryOpen && (
          <div className="space-y-2">
            {categories.map((cat) => {
              const isChecked = (filters.category || []).includes(cat.id);
              return (
                <label
                  key={cat.id}
                  className="flex items-center gap-2.5 text-xs text-dark hover:text-secondary cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCategoryToggle(cat.id)}
                    className="w-4 h-4 rounded text-secondary focus:ring-secondary"
                  />
                  <span className={isChecked ? 'font-bold text-secondary' : 'font-normal'}>
                    {cat.label}
                  </span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. Color Filter */}
      <div className="border-t border-outline-variant/30 pt-4">
        <button
          onClick={() => setIsColorOpen(!isColorOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-dark mb-3"
        >
          <span>Màu Sắc</span>
          <ChevronDown size={14} className={`transition-transform ${isColorOpen ? 'rotate-180' : ''}`} />
        </button>

        {isColorOpen && (
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => {
              const isSelected = (filters.colors || []).includes(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => handleColorToggle(c.id)}
                  title={c.label}
                  className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                    isSelected ? 'ring-2 ring-secondary ring-offset-2 scale-110' : 'border-outline-variant/50 hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                >
                  {isSelected && (
                    <Check size={12} className={c.hex === '#FFFFFF' || c.hex === '#FDFDF5' ? 'text-dark' : 'text-white'} />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. Size Filter */}
      <div className="border-t border-outline-variant/30 pt-4">
        <button
          onClick={() => setIsSizeOpen(!isSizeOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-dark mb-3"
        >
          <span>Kích Cỡ (Size)</span>
          <ChevronDown size={14} className={`transition-transform ${isSizeOpen ? 'rotate-180' : ''}`} />
        </button>

        {isSizeOpen && (
          <div className="grid grid-cols-4 gap-1.5">
            {sizes.map((s) => {
              const isSelected = (filters.sizes || []).includes(s);
              return (
                <button
                  key={s}
                  onClick={() => handleSizeToggle(s)}
                  className={`py-1.5 rounded-lg text-xs font-quicksand font-bold border transition-all ${
                    isSelected
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-white text-dark border-outline-variant/40 hover:bg-surface-cream'
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. Price Slider */}
      <div className="border-t border-outline-variant/30 pt-4">
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-dark mb-3"
        >
          <span>Mức Giá Tối Đa</span>
          <ChevronDown size={14} className={`transition-transform ${isPriceOpen ? 'rotate-180' : ''}`} />
        </button>

        {isPriceOpen && (
          <div className="space-y-3">
            <input
              type="range"
              min="100000"
              max="600000"
              step="20000"
              value={filters.maxPrice || 600000}
              onChange={(e) => onFilterChange({ maxPrice: Number(e.target.value), page: 1 })}
              className="w-full accent-secondary"
            />
            <div className="flex justify-between text-xs font-bold text-secondary">
              <span>100.000₫</span>
              <span>{formatVND(filters.maxPrice || 600000)}</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
