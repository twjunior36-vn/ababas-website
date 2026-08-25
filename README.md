# 🚀 LỘ TRÌNH TRIỂN KHAI WEBSITE ABABAS

> **Thực tế | Vibe Code | Trẻ trung | Đầy đủ tính năng | Miễn phí**

---

## 🧩 TỔNG QUAN DỰ ÁN

| Hạng mục | Chi tiết |
|---|---|
| 🏷️ **Tên thương hiệu** | **Ababas** – Dép thời trang |
| 🎯 **Mục tiêu** | Website giới thiệu thương hiệu thực tế, tối ưu trải nghiệm và chuyển đổi |
| ⚙️ **Công nghệ** | **React.js + Vibe Code (AI-assisted)** (Vite, React Router, Tailwind CSS/CSS) |
| 🌐 **Deploy** | **Netlify** (miễn phí, CI/CD tự động, tên miền tùy biến) |
| 🎨 **Phong cách** | Trẻ trung, năng động, màu sắc nổi bật |
| 📊 **Phân tích** | Google Analytics 4 (GA4) + SEO Onpage cơ bản |

---

## 🗂️ CẤU TRÚC THƯ MỤC DỰ ÁN

```
ababas-website/
│
├── public/
│   ├── index.html              ← SEO meta tags đặt ở đây
│   ├── favicon.ico
│   └── robots.txt              ← Cấu hình bot tìm kiếm (SEO)
│
├── src/
│   ├── assets/
│   │   ├── images/             ← Ảnh sản phẩm, banner, logo thương hiệu
│   │   └── fonts/
│   │
│   ├── components/             ← Các UI component tái sử dụng
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── pages/                  ← Các trang chính (Pages / Views)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Collections.jsx
│   │   ├── Partners.jsx
│   │   └── Contact.jsx
│   │
│   ├── data/
│   │   └── products.js         ← Dữ liệu sản phẩm & bộ sưu tập mẫu
│   │
│   ├── analytics/
│   │   └── ga.js               ← Cấu hình Google Analytics 4
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env                        ← Lưu biến môi trường (GA Tracking ID, v.v.)
├── sitemap.xml                 ← Sơ đồ website phục vụ SEO
└── package.json
```

---

## 🗺️ LỘ TRÌNH TRIỂN KHAI – 4 GIAI ĐOẠN

---

### 🔵 GIAI ĐOẠN 1: KHỞI TẠO DỰ ÁN
**⏱️ Thời gian dự kiến: 1–2 ngày**

```
✅ Bước 1: Tạo project React bằng Vite
   → Prompt Vibe Code: "Tạo React app với Vite, cài React Router, 
     Tailwind CSS, cấu trúc thư mục cho website bán dép tên Ababas"

✅ Bước 2: Thiết lập hệ thống Design System & Màu sắc (Design Tokens)
   → Màu chính (Primary):    #FF6B35 (cam năng động, nhiệt huyết)
   → Màu phụ (Secondary):    #1A1A2E (navy đậm, sang trọng)
   → Màu nền (Background):   #FFFFFF / #F9F9F9
   → Font chữ:               "Poppins" (Google Fonts) – trẻ trung, hiện đại

✅ Bước 3: Tạo Navbar & Footer dùng chung toàn bộ các trang
✅ Bước 4: Setup React Router v6 cho các tuyến đường (routes)
✅ Bước 5: Khởi tạo Git repository và push lên GitHub
```

---

### 🟡 GIAI ĐOẠN 2: XÂY DỰNG CÁC TRANG CHỨC NĂNG
**⏱️ Thời gian dự kiến: 4–6 ngày**

#### 🏠 1. Trang Chủ (Home)
```
Các Section chính:
┌─────────────────────────────┐
│   HERO BANNER               │ ← Ảnh full-width + Tagline + CTA Button
│   "Bước đi phong cách"      │
├─────────────────────────────┤
│   SẢN PHẨM NỔI BẬT          │ ← Grid 4-6 sản phẩm hot nhất
├─────────────────────────────┤
│   BỘ SƯU TẬP MỚI NHẤT       │ ← Banner collection dạng grid ấn tượng
├─────────────────────────────┤
│   LÝ DO CHỌN ABABAS         │ ← Icon + text (Chất lượng, Thời trang, Êm ái...)
├─────────────────────────────┤
│   ĐỐI TÁC TIÊU BIỂU         │ ← Logo slider / Brand partners
└─────────────────────────────┘

→ Prompt Vibe Code: "Tạo Hero Section cho website bán dép 
  phong cách trẻ trung, màu cam #FF6B35, có nút CTA 'Khám phá ngay'"
```

#### 👟 2. Trang Sản Phẩm (Products) – Đầy đủ tính năng
```
Tính năng nổi bật:
✅ Grid hiển thị sản phẩm (ảnh chất lượng cao, tên, giá, badge sale/new)
✅ Bộ lọc thông minh theo: Danh mục | Màu sắc | Size | Khoảng giá
✅ Thanh tìm kiếm sản phẩm theo thời gian thực (Search bar)
✅ Điều hướng mượt mà sang Trang chi tiết sản phẩm khi click
✅ Trang chi tiết (ProductDetail): Ảnh phóng to, mô tả chi tiết, bảng size (Size Chart), sản phẩm liên quan
```

#### 🎨 3. Trang Bộ Sưu Tập (Collections)
```
✅ Layout dạng masonry grid hoặc card carousel trực quan
✅ Mỗi collection mang tên chủ đề độc đáo (Hè 2025, Streetwear, Classic, Urban Walk...)
✅ Click vào collection → Tự động lọc và hiển thị danh sách sản phẩm thuộc bộ sưu tập đó
```

#### 🤝 4. Trang Đối Tác (Partners)
```
✅ Logo grid hiển thị mạng lưới đối tác & đại lý phân phối
✅ Mô tả ngắn gọn về tiêu chí hợp tác và giá trị cộng hưởng
✅ Hiệu ứng hover tương tác sinh động
```

#### 💬 5. Trang Liên Hệ (Contact) – Thông tin trực tiếp
```
✅ Địa chỉ hệ thống cửa hàng / showroom
✅ Hotline hỗ trợ + Email chăm sóc khách hàng
✅ Khung giờ hoạt động
✅ Liên kết mạng xã hội (Facebook, Instagram, TikTok)
→ Thiết kế tinh gọn, trực quan, không cần form phức tạp hay Google Maps API
```

#### 🏢 6. Trang Về Chúng Tôi (About)
```
✅ Câu chuyện khởi nguồn thương hiệu Ababas
✅ Tầm nhìn, sứ mệnh và giá trị cốt lõi
✅ Đội ngũ sáng lập & phát triển
✅ Timeline hành trình phát triển ấn tượng
```

---

### 🟠 GIAI ĐOẠN 3: SEO ON-PAGE & GOOGLE ANALYTICS
**⏱️ Thời gian dự kiến: 1–2 ngày**

#### 📊 Tích hợp Google Analytics 4 (GA4)
```javascript
// Prompt Vibe Code:
"Tích hợp Google Analytics 4 vào React app, 
track pageview mỗi khi chuyển trang với React Router"

// Các chỉ số trọng tâm cần đo lường:
✅ Lượt xem từng trang (Pageviews)
✅ Thời gian trung bình ở lại trang (Engagement time)
✅ Top sản phẩm và bộ sưu tập được quan tâm nhiều nhất
✅ Nguồn truy cập (Direct, Social, Organic Search, Referral)
```

#### 🔍 Tối ưu SEO On-Page
```
✅ Cấu hình Meta title & Meta description chuẩn SEO cho từng trang
✅ Thẻ Open Graph (OG tags) chuẩn đẹp khi share lên Facebook, Zalo, Telegram
✅ File robots.txt – điều hướng crawler
✅ File sitemap.xml – liệt kê toàn bộ URL
✅ Thẻ Alt text chuẩn cho tất cả hình ảnh sản phẩm
✅ Cấu trúc URL thân thiện, chuẩn SEO (/san-pham, /bo-suu-tap, ...)
✅ Tối ưu tốc độ tải trang (Lazy loading ảnh, nén asset)

→ Prompt Vibe Code: "Thêm React Helmet để quản lý SEO meta tags 
  cho từng page trong React Router app"
```

---

### 🟢 GIAI ĐOẠN 4: DEPLOY VÀ VẬN HÀNH TRÊN NETLIFY
**⏱️ Thời gian dự kiến: 1 ngày**

```
Bước 1: Build tối ưu hóa mã nguồn
        → npm run build

Bước 2: Push toàn bộ mã nguồn hoàn chỉnh lên GitHub repository

Bước 3: Kết nối repository với Netlify
        → netlify.com → Add new site → Import an existing project → Chọn repo

Bước 4: Cấu hình Build Settings trên Netlify
        → Build command: npm run build
        → Publish directory: dist

Bước 5: Thiết lập tên miền miễn phí & Custom domain
        → https://ababas.netlify.app ✅

Bước 6: Kích hoạt biến môi trường & GA4
        → Cấu hình biến môi trường trên Netlify Dashboard và kiểm tra luồng dữ liệu GA4
```

---

## 📅 TIMELINE TỔNG THỂ DỰ ÁN

```
Tuần 1          Tuần 2           Tuần 3
│               │                │
├─ Giai đoạn 1 ─┤                │
│  Khởi tạo     ├── Giai đoạn 2 ─┤
│  Setup        │   Xây trang    ├── Giai đoạn 3 ──┐
│               │                │   SEO + GA      │
│               │                │                 ├─ Giai đoạn 4
│               │                │                 │  DEPLOY 🚀
└───────────────┴────────────────┴─────────────────┘
  1-2 ngày          4-6 ngày          1-2 ngày       1 ngày
```

---

## 💡 BỘ PROMPT MẪU CHO VIBE CODE

```
🔹 "Tạo Navbar responsive cho website Ababas bán dép, 
    có logo bên trái, menu: Trang chủ | Sản phẩm | 
    Bộ sưu tập | Đối tác | Về chúng tôi | Liên hệ, 
    phong cách trẻ trung màu cam #FF6B35"

🔹 "Tạo trang Products với bộ lọc theo danh mục, 
    màu sắc, size, khoảng giá. Dữ liệu từ file products.js"

🔹 "Tạo ProductDetail page hiển thị ảnh lớn, 
    tên, giá, mô tả, bảng size và 4 sản phẩm liên quan"

🔹 "Tích hợp Google Analytics 4 tracking pageview 
    với React Router v6"
```

---

## ✅ CHECKLIST KIỂM THỬ TRƯỚC KHI RA MẮT

- [ ] Toàn bộ 6 trang hoạt động mượt mà, không lỗi console / broken link
- [ ] Giao diện responsive 100% trên Mobile, Tablet và Desktop
- [ ] Hình ảnh được nén tối ưu (< 500KB/ảnh, định dạng WebP/PNG)
- [ ] Google Analytics 4 nhận dữ liệu realtime chính xác
- [ ] File `sitemap.xml` và `robots.txt` đã cấu hình đầy đủ
- [ ] Thẻ SEO Meta Title / Description / OG Image hiển thị chuẩn
- [ ] Website chạy ổn định trên Netlify với SSL (HTTPS)
- [ ] Điểm số hiệu năng tối ưu trên Google PageSpeed Insights
