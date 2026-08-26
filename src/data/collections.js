/**
 * ABABAS Collections Data - Google Stitch Design System Dataset
 */

export const collections = [
  {
    id: 'cloud-walker',
    slug: 'cloud-walker',
    title: 'Cloud Walker Edition – Nâng Chiều Cao Tôn Dáng',
    name: 'Cloud Walker',
    subtitle: 'Đế Dày 5cm • Êm Ái Từng Bước Chân • Kèm Set Charm 3D',
    description: 'Dòng sản phẩm Clog bánh mì cao cấp đúc bọt khí EVA mật độ cao, giảm áp lực bàn chân, chống trơn trượt tối đa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A',
    itemCount: 8,
    badge: 'Best Seller',
    featured: true
  },
  {
    id: 'pink-bloom',
    slug: 'pink-bloom',
    title: 'Pink Bloom Pastel – Ngọt Ngào Nữ Tính',
    name: 'Pink Bloom',
    subtitle: 'Sắc Hồng Phấn Dịu Dàng • Charm Hoa 3D Tinh Tế',
    description: 'Phiên bản phối màu pastel nữ tính cùng các chi tiết charm hoa 3D và ngọc trai siêu xinh cho nàng tự tin tỏa sáng.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ',
    itemCount: 6,
    badge: 'Mới Nhất',
    featured: true
  },
  {
    id: 'streetwear',
    slug: 'streetwear',
    title: 'Urban Streetwear – Phong Cách Đô Thị',
    name: 'Streetwear',
    subtitle: 'Tông Đen Huyền Bí • Phụ Kiện Kim Loại Sang Trọng',
    description: 'Dành cho những tâm hồn tự do yêu thích phong cách streetwear mạnh mẽ, cá tính và không ngại khác biệt.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtxT9VvDj1ihwpNCIy2gjKg8gmJApnsRn0ggpBsR9HQGFTvxKQFQnYrAhM1Wr5zoRGr9Gc8v9Xher0G2tex1lkbhlz1SX2khczp8l6VSknILgIFa4snjNbDqtRpA4gnbol6fx4aVljM5l_xIW1Xj4IM3fPv5QI0Kx2dLrHgeogA28hdWqdrKyLGUcEsmvnTIIAcLE09WNRbDI10YLA8y4PNcO8W5nSadDSkDAN-YwWrIxIlxBOh0W4xQ',
    itemCount: 8,
    badge: 'Hot Trend',
    featured: true
  },
  {
    id: 'charms',
    slug: 'charms',
    title: 'Charm 3D DIY Studio – Tự Do Sáng Tạo',
    name: 'Charm 3D DIY',
    subtitle: 'Hơn 100+ Mẫu Charm 3D Sắc Nét • Khẳng Định Chất Riêng',
    description: 'Bộ sưu tập charm 3D nhựa dẻo cao cấp gắn dép clog, mang lại vẻ ngoài độc nhất vô nhị cho đôi dép của bạn.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
    itemCount: 15,
    badge: 'Phụ Kiện DIY',
    featured: true
  }
];

export const getCollectionBySlug = (slug) => 
  collections.find((c) => c.slug === slug);
