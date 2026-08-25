# Rule: Quy Chuẩn Xây Dựng Component Trong Ababas

## 1. Nguyên Tắc Cốt Lõi
- **Tính Độc Lập:** Mỗi Component phải quản lý tốt trạng thái nội bộ của mình (hoặc nhận thông qua props rõ ràng).
- **Fallback UI:** Khi dữ liệu rỗng hoặc hình ảnh lỗi, luôn có UI xử lý thay vì làm vỡ layout (sử dụng placeholder gradient hoặc icon thời trang).
- **Responsive:** Mọi component phải hiển thị đẹp mắt trên màn hình mobile (< 640px), tablet (640px - 1024px) và desktop (> 1024px).

## 2. Cấu Trúc File Component Chuẩn
```jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconName } from 'lucide-react';

export default function ExampleComponent({ propA, propB }) {
  // 1. State hooks
  // 2. Event handlers
  // 3. Render logic
  return (
    <div className="example-container">
      {/* JSX */}
    </div>
  );
}
```

## 3. Danh Sách Components Cốt Lõi
- `Navbar.jsx`: Logo Ababas + Navigation Links + Mobile Drawer Menu + Quick Action Icons.
- `Footer.jsx`: Thông tin liên hệ, social icons, bản quyền thương hiệu, đăng ký nhận tin.
- `ProductCard.jsx`: Hiển thị ảnh, tên, giá bán, giá gốc, badge (Hot, New, -20%), sao đánh giá, nút Xem chi tiết.
- `ScrollToTop.jsx`: Tự động cuộn lên đầu trang khi người dùng chuyển trang bằng React Router.
