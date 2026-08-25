/**
 * Định dạng tiền tệ Việt Nam Đồng (VND)
 */
export const formatVND = (amount) => 
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);

/**
 * Tính phần trăm giảm giá
 */
export const formatDiscount = (original, sale) => 
  Math.round(((original - sale) / original) * 100);
