# Rule: Quy Chuẩn SEO & Đo Lường Google Analytics 4

## 1. SEO On-Page
- Mỗi trang khi render cần cập nhật `document.title` tương ứng:
  - Trang chủ: `Ababas | Dép Thời Trang Trẻ Trung - Bước Đi Phong Cách`
  - Sản phẩm: `Tất Cả Sản Phẩm Dép Thời Trang | Ababas`
  - Chi tiết sản phẩm: `[Tên Sản Phẩm] | Dép Thời Trang Ababas`
  - Bộ sưu tập: `Bộ Sưu Tập Mới Nhất | Ababas`
  - Về chúng tôi: `Câu Chuyện Thương Hiệu | Ababas`
  - Đối tác: `Mạng Lưới Đối Tác & Đại Lý | Ababas`
  - Liên hệ: `Thông Tin Liên Hệ & Cửa Hàng | Ababas`
- Luôn có thẻ heading cấp 1 (`<h1>`) duy nhất trên mỗi trang.
- Hình ảnh luôn đi kèm `alt` mô tả sản phẩm chứa từ khóa thương hiệu.

## 2. Google Analytics 4 (GA4) Tracking
Sử dụng module `src/analytics/ga.js`:
- Gọi `trackPageView(pageTitle)` trong `useEffect` của mỗi trang.
- Bắn sự kiện `trackEvent(action, category, label, value)` khi người dùng tương tác:
  - `add_to_cart`: Thêm vào giỏ hàng
  - `filter_products`: Lọc sản phẩm
  - `view_collection`: Xem bộ sưu tập
  - `click_cta`: Bấm nút hành động chính
