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
    { id: 'den', label: 'Đen', hex: '#1A1A1A' },
    { id: 'trang', label: 'Trắng', hex: '#FFFFFF' },
    { id: 'cam', label: 'Cam', hex: '#FF6B35' },
    { id: 'xanh', label: 'Xanh', hex: '#00D2D3' },
    { id: 'nau', label: 'Nâu', hex: '#8B4513' },
  ];

  const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

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
    <div className="bg-white rounded-card border border-gray-100 p-5 shadow-sm space-y-6 font-poppins">
      
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={17} className="text-primary" />
          <span className="font-bold text-base text-navy">Bộ Lọc</span>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 transition-colors"
        >
          <RotateCcw size={12} />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* 1. Category Accordion */}
      <div>
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-dark py-1"
        >
          <span>Danh Mục</span>
          <ChevronDown size={15} className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
        </button>
        {isCategoryOpen && (
          <div className="mt-3 space-y-2">
            {categories.map((cat) => {
              const isChecked = (filters.category || []).includes(cat.id);
              return (
                <label
                  key={cat.id}
                  className="flex items-center gap-2.5 text-sm font-medium text-muted hover:text-navy cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCategoryToggle(cat.id)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                  />
                  <span className={isChecked ? 'text-navy font-bold' : ''}>{cat.label}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. Colors Accordion */}
      <div className="pt-4 border-t border-gray-100">
        <button
          onClick={() => setIsColorOpen(!isColorOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-dark py-1"
        >
          <span>Màu Sắc</span>
          <ChevronDown size={15} className={`transition-transform ${isColorOpen ? 'rotate-180' : ''}`} />
        </button>
        {isColorOpen && (
          <div className="mt-3 flex flex-wrap gap-2.5">
            {colors.map((c) => {
              const isSelected = (filters.colors || []).includes(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => handleColorToggle(c.id)}
                  title={c.label}
                  className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                    isSelected ? 'border-primary ring-2 ring-primary ring-offset-2 scale-110' : 'border-gray-200 hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                >
                  {isSelected && (
                    <Check
                      size={12}
                      className={c.hex === '#FFFFFF' ? 'text-dark' : 'text-white'}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. Sizes Accordion */}
      <div className="pt-4 border-t border-gray-100">
        <button
          onClick={() => setIsSizeOpen(!isSizeOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-dark py-1"
        >
          <span>Kích Cỡ (Size)</span>
          <ChevronDown size={15} className={`transition-transform ${isSizeOpen ? 'rotate-180' : ''}`} />
        </button>
        {isSizeOpen && (
          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {sizes.map((s) => {
              const isSelected = (filters.sizes || []).includes(s);
              return (
                <button
                  key={s}
                  onClick={() => handleSizeToggle(s)}
                  className={`py-1.5 text-xs font-bold rounded-btn border transition-all ${
                    isSelected
                      ? 'bg-primary text-white border-primary shadow-xs'
                      : 'bg-light text-navy border-gray-200 hover:border-primary'
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. Price Slider Accordion */}
      <div className="pt-4 border-t border-gray-100">
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-dark py-1"
        >
          <span>Khoảng Giá</span>
          <ChevronDown size={15} className={`transition-transform ${isPriceOpen ? 'rotate-180' : ''}`} />
        </button>
        {isPriceOpen && (
          <div className="mt-3 space-y-3">
            <input
              type="range"
              min="100000"
              max="500000"
              step="20000"
              value={filters.maxPrice || 500000}
              onChange={(e) => onFilterChange({ maxPrice: Number(e.target.value), page: 1 })}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex items-center justify-between text-xs font-semibold text-muted">
              <span>0đ</span>
              <span className="text-primary font-bold text-sm">
                Tối đa: {formatVND(filters.maxPrice || 500000)}
              </span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
