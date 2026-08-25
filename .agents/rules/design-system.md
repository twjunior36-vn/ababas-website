# Rule: Design System Quy Chuẩn Ababas

Mọi giao diện do AI tạo ra phải nhất quán với bộ quy tắc thiết kế:

## 1. Bảng Màu (Color Tokens)
- **Primary Accent:** `#FF6B35` (Cam nhiệt huyết - dùng cho nút CTA, biểu tượng nổi bật, tag Hot).
- **Primary Hover:** `#E85A26`
- **Secondary / Dark:** `#1A1A2E` (Navy thẫm cao cấp - dùng cho Navbar, Footer, Header, Typography chính).
- **Supporting Accent:** `#00D2D3` (Cyan - dùng cho badge 'New Collection', highlight mát mẻ).
- **Neutral Light:** `#F8F9FB` (Nền xám nhạt hiện đại cho section xen kẽ).
- **Neutral Card:** `#FFFFFF` (Nền thẻ card nổi bật).
- **Success / Rating:** `#FFB800` (Vàng sao rating, review).

## 2. Kiểu Chữ (Typography)
- Font chữ: Google Font **Poppins** (weights: 400, 500, 600, 700, 800).
- Tiêu đề Section (H2): `font-size: 2rem - 2.5rem`, `font-weight: 700`, `letter-spacing: -0.5px`.
- Phụ đề Tagline: `font-size: 0.9rem`, `font-weight: 600`, `text-transform: uppercase`, `color: var(--color-primary)`.

## 3. Hiệu Ứng & Chuyển Động (Animations)
- Sử dụng hiệu ứng **Hover Lift**: `transform: translateY(-6px); box-shadow: 0 15px 30px rgba(255, 107, 53, 0.15);`
- Nút bấm (Buttons): Bo tròn mềm mại (`border-radius: 9999px` hoặc `12px`), padding `12px 28px`.
- Tag Badge: Bo tròn kiểu viên thuốc (`border-radius: 9999px`), `font-size: 0.75rem`, `font-weight: 700`.
- Hiệu ứng **Glassmorphism**: `backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.85);` cho Navbar dính đỉnh màn hình (Sticky header).
