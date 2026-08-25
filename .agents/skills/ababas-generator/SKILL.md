---
name: ababas-generator
description: Hướng dẫn chuyên sâu cho AI Agent khi tạo mới các components, pages, dữ liệu sản phẩm chuẩn phong cách thời trang trẻ trung Ababas.
---

# Ababas Generator Skill

Sử dụng skill này khi cần tạo mới hoặc nâng cấp các trang và components cho website **Ababas**.

## Khi nào kích hoạt Skill:
- Khi người dùng yêu cầu: "Tạo thêm section mới cho trang chủ", "Tạo trang thanh toán / giỏ hàng", "Thêm sản phẩm mới vào danh mục", "Tối ưu hóa giao diện mobile".

## Quy trình thực hiện:
1. **Kiểm tra Design Tokens:** Sử dụng màu chính `#FF6B35` (Cam) và `#1A1A2E` (Navy).
2. **Khai thác dữ liệu từ `src/data/products.js`:** Không hardcode dữ liệu lặp lại nếu đã có trong `products.js`.
3. **Thêm hiệu ứng tương tác:** Tận dụng icon từ `lucide-react`, thêm hover effects, active states.
4. **Kiểm tra liên kết:** Đảm bảo sử dụng `<Link to="...">` từ `react-router-dom` cho các liên kết nội bộ.
