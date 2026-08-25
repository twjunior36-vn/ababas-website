/**
 * ABABAS Collections Data
 */

export const collections = [
  {
    id: 'col-he-2025',
    slug: 'he-2025',
    title: 'Hè 2025 – Rực Rỡ & Năng Động',
    name: 'Hè 2025',
    subtitle: 'Năng Động & Bùng Cháy Dưới Nắng',
    description: 'Bộ sưu tập mang gam màu cam cháy, xanh ngọc biển cùng chất liệu EVA chống nước hoàn hảo cho mọi chuyến du lịch mùa hè.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
    itemCount: 6,
    badge: 'Mới Nhất',
    featured: true
  },
  {
    id: 'col-streetwear',
    slug: 'streetwear',
    title: 'Urban Streetwear – Phá Cách Đô Thị',
    name: 'Streetwear',
    subtitle: 'Chất Đường Phố – Định Hình Phong Cách',
    description: 'Form dáng Chunky bánh mì đế dày 4.5cm và sandal dây dù cyber đậm chất đường phố dành cho bạn trẻ Gen Z.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80',
    itemCount: 8,
    badge: 'Hot Trend',
    featured: true
  },
  {
    id: 'col-classic',
    slug: 'classic',
    title: 'Classic Comfort – Êm Ái Mỗi Ngày',
    name: 'Classic',
    subtitle: 'Tối Giản, Bền Bỉ & Nâng Niu Bàn Chân',
    description: 'Những mẫu dép tối giản thanh lịch, đệm bọt khí êm dịu, dễ dàng phối hợp cùng mọi trang phục thường nhật.',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&auto=format&fit=crop&q=80',
    itemCount: 6,
    badge: 'Bán Chạy',
    featured: true
  },
  {
    id: 'col-limited',
    slug: 'limited',
    title: 'Limited Edition – Độc Bản Giới Hạn',
    name: 'Limited',
    subtitle: 'Dát Vàng, Dạ Quang & Chi Tiết Đính Đá',
    description: 'Dòng sản phẩm độc quyền với số lượng sản xuất giới hạn, tôn vinh đẳng cấp cá nhân trong các sự kiện và lễ hội.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
    itemCount: 4,
    badge: 'Limited',
    featured: false
  }
];

export const getCollectionBySlug = (slug) => 
  collections.find((c) => c.slug === slug);
