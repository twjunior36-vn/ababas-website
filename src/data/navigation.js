/**
 * ABABAS Navigation Links & Mega Menu Structure
 */

export const navLinks = [
  { 
    label: 'Trang Chủ', 
    path: '/',
    exact: true
  },
  { 
    label: 'Sản Phẩm', 
    path: '/san-pham',
    megaMenu: {
      categories: [
        { label: 'Dép Lào', path: '/san-pham?category=lao' },
        { label: 'Dép Sandal', path: '/san-pham?category=sandal' },
        { label: 'Dép Cao Gót', path: '/san-pham?category=cao-got' },
        { label: 'Dép Thể Thao', path: '/san-pham?category=the-thao' },
      ],
      featuredCollections: [
        { label: 'Hè 2025', path: '/bo-suu-tap/he-2025', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80' },
        { label: 'Streetwear', path: '/bo-suu-tap/streetwear', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&auto=format&fit=crop&q=80' },
        { label: 'Classic', path: '/bo-suu-tap/classic', image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&auto=format&fit=crop&q=80' },
      ]
    }
  },
  { label: 'Bộ Sưu Tập', path: '/bo-suu-tap' },
  { label: 'Đối Tác', path: '/doi-tac' },
  { label: 'Về Chúng Tôi', path: '/ve-chung-toi' },
  { label: 'Liên Hệ', path: '/lien-he' },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Trang Chủ', path: '/' },
    { label: 'Sản Phẩm', path: '/san-pham' },
    { label: 'Bộ Sưu Tập', path: '/bo-suu-tap' },
    { label: 'Về Chúng Tôi', path: '/ve-chung-toi' },
    { label: 'Liên Hệ', path: '/lien-he' },
  ],
  support: [
    { label: 'Hướng Dẫn Chọn Size', path: '/huong-dan-size' },
    { label: 'Chính Sách Đổi Trả', path: '/chinh-sach#doi-tra' },
    { label: 'Chính Sách Vận Chuyển', path: '/chinh-sach#van-chuyen' },
    { label: 'Bảo Mật Thông Tin', path: '/chinh-sach#bao-mat' },
  ]
};
