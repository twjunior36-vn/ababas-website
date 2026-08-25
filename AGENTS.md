# 🤖 HƯỚNG DẪN DÀNH CHO AI AGENT (AGENTS.MD) - ABABAS PROJECT

> **Tài liệu quy chuẩn phát triển dành cho toàn bộ AI Coding Agents khi làm việc trên kho mã nguồn Ababas.**

---

## 🎯 1. BỐI CẢNH & TẦM NHÌN DỰ ÁN
- **Tên thương hiệu:** **Ababas** (Website thời trang chuyên về dép sandal, slides, chunky slippers cao cấp dành cho giới trẻ).
- **Phong cách chủ đạo:** Hiện đại, trẻ trung, năng động, phong cách Vibe Code, tối ưu trải nghiệm thị giác (WOW factor), chuyển động mượt mà.
- **Mục tiêu kỹ thuật:** Chạy siêu tốc, không lỗi runtime, SEO On-Page chuẩn, tích hợp sẵn đo lường Google Analytics 4, sẵn sàng deploy 1-click lên Netlify.

---

## 🛠️ 2. TECH STACK & QUY CHUẨN CÔNG NGHỆ
- **Core Framework:** React.js 18+ (Hooks, Functional Components).
- **Bundler / Dev Server:** Vite (cấu hình alias `@` trỏ tới `./src`).
- **Routing:** `react-router-dom` (v6) với dynamic routing cho trang chi tiết (`/products/:id`).
- **Icons:** `lucide-react` (icon hiện đại, nhẹ, dễ tùy biến màu sắc).
- **Styling:** Modern CSS với **CSS Variables (Design Tokens)** trong `src/index.css`. Hạn chế phụ thuộc thư viện cồng kềnh, ưu tiên CSS thuần viết chuẩn class BEM hoặc semantic.
- **Data Source:** Mock data độc lập tại `src/data/products.js`, dễ dàng mở rộng sang REST API / Headless CMS sau này.

---

## 🎨 3. DESIGN TOKENS & UI/UX RULES
Tất cả các thành phần giao diện mới khi tạo ra **BẮT BUỘC** tuân theo bộ quy tắc màu sắc và kích thước:

```css
:root {
  --color-primary: #FF6B35;       /* Cam năng động - Nút CTA, Badge, Điểm nhấn */
  --color-primary-hover: #E85A26; /* Cam đậm khi hover */
  --color-secondary: #1A1A2E;     /* Navy đậm - Navbar, Footer, Tiêu đề chính */
  --color-accent: #00D2D3;        /* Cyan phụ trợ - Badge đặc biệt */
  --color-bg-main: #FFFFFF;       /* Nền trang chính */
  --color-bg-subtle: #F8F9FB;     /* Nền section xen kẽ */
  --color-text-main: #1A1A2E;     /* Chữ chính */
  --color-text-muted: #6B7280;    /* Chữ phụ, mô tả */
  --color-border: #E5E7EB;        /* Đường viền */
  
  --font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --shadow-card: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03);
  --shadow-hover: 0 20px 30px -10px rgba(255, 107, 53, 0.2);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Nguyên tắc UI/UX:
1. **Micro-interactions:** Mọi button, card sản phẩm, collection banner phải có hiệu ứng hover mượt mà (`transform: translateY(-4px)`, shadow tăng độ sâu).
2. **Mobile First & Responsive:** Kiểm tra hiển thị hoàn hảo từ màn hình điện thoại (375px) đến Desktop (1440px+).
3. **No Dead Clicks:** Mọi nút bấm, filter, tag danh mục, card sản phẩm đều phải phản hồi hoặc chuyển trang tương ứng.
4. **Hình ảnh:** Tự động fallback nếu link ảnh gặp sự cố, tối ưu tỉ lệ khung hình (1:1 cho dép, 16:9 cho banner).

---

## 📁 4. NGUYÊN TẮC TỔ CHỨC THƯ MỤC & FILE
```
src/
├── assets/          → Hình ảnh, SVG, fonts local
├── components/      → UI component tái sử dụng (Navbar, Footer, ProductCard, ScrollToTop, UI widgets)
├── pages/           → 7 Trang chính: Home, Products, ProductDetail, Collections, Partners, About, Contact, NotFound
├── data/            → Dữ liệu mẫu (products.js)
├── analytics/       → Module theo dõi sự kiện (ga.js)
├── index.css        → Global stylesheet & Design Tokens
├── App.jsx          → Bộ định tuyến trung tâm
└── main.jsx         → Entry point
```

### Quy ước đặt tên:
- **Component / Page file:** PascalCase (vd: `ProductCard.jsx`, `Collections.jsx`).
- **Utility / Data / Hook:** camelCase (vd: `products.js`, `ga.js`).
- **CSS classes:** Kebab-case hoặc BEM-like (vd: `btn-primary`, `product-card__badge`, `nav-item--active`).

---

## 🔍 5. TIÊU CHUẨN SEO & ANALYTICS
- **Page Title & Meta:** Luôn định nghĩa tiêu đề rõ ràng cho từng trang theo format: `[Tên Trang] | Ababas - Dép Thời Trang Trẻ Trung`.
- **Google Analytics Event Tracking:** Bắn event `trackPageView(pageTitle)` khi thay đổi route và `trackEvent(action, category, label)` khi người dùng click CTA quan trọng (vd: *Thêm vào giỏ*, *Lọc sản phẩm*, *Xem chi tiết*).

---

## 🚀 6. CHECKLIST KHI AGENT CODE XONG MỘT TÍNH NĂNG
- [ ] Không có lỗi cú pháp JSX, missing import hoặc biến undefined.
- [ ] Build thành công với lệnh `npm run build` không warning nghiêm trọng.
- [ ] Giao diện responsive trên cả Desktop và Mobile.
- [ ] Thiết kế sử dụng đúng Design Token màu sắc cam/navy Ababas.
- [ ] Đầy đủ alt text cho ảnh, id cho các tương tác kiểm thử.
