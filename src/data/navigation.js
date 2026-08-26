/**
 * ABABAS Navigation Links & Mega Menu Structure - Google Stitch Design Edition
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
        { label: 'Dép Clog Bánh Mì', path: '/san-pham?category=clog' },
        { label: 'Dép Sandal EVA', path: '/san-pham?category=sandal' },
        { label: 'Set Charm 3D DIY', path: '/san-pham?category=charm' },
      ],
      featuredCollections: [
        { label: 'Cloud Walker Edition', path: '/bo-suu-tap/cloud-walker', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A' },
        { label: 'Pink Bloom Pastel', path: '/bo-suu-tap/pink-bloom', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ' },
        { label: 'Streetwear & Nightlife', path: '/bo-suu-tap/streetwear', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtxT9VvDj1ihwpNCIy2gjKg8gmJApnsRn0ggpBsR9HQGFTvxKQFQnYrAhM1Wr5zoRGr9Gc8v9Xher0G2tex1lkbhlz1SX2khczp8l6VSknILgIFa4snjNbDqtRpA4gnbol6fx4aVljM5l_xIW1Xj4IM3fPv5QI0Kx2dLrHgeogA28hdWqdrKyLGUcEsmvnTIIAcLE09WNRbDI10YLA8y4PNcO8W5nSadDSkDAN-YwWrIxIlxBOh0W4xQ' },
      ]
    }
  },
  { label: 'Bộ Sưu Tập', path: '/bo-suu-tap' },
  { label: 'Lookbook', path: '/lookbook' },
  { label: 'Đối Tác', path: '/doi-tac' },
  { label: 'Về Chúng Tôi', path: '/ve-chung-toi' },
  { label: 'Liên Hệ', path: '/lien-he' },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Trang Chủ', path: '/' },
    { label: 'Sản Phẩm', path: '/san-pham' },
    { label: 'Bộ Sưu Tập', path: '/bo-suu-tap' },
    { label: 'Lookbook Phối Đồ', path: '/lookbook' },
    { label: 'Đối Tác Phân Phối', path: '/doi-tac' },
    { label: 'Về Chúng Tôi', path: '/ve-chung-toi' },
    { label: 'Liên Hệ', path: '/lien-he' },
  ],
  support: [
    { label: 'Hướng Dẫn Chọn Size', path: '/huong-dan-size' },
    { label: 'Chính Sách Đổi Trả & Bảo Hành', path: '/chinh-sach#doi-tra' },
    { label: 'Chính Sách Vận Chuyển Toàn Quốc', path: '/chinh-sach#van-chuyen' },
    { label: 'Bảo Mật Thông Tin Khách Hàng', path: '/chinh-sach#bao-mat' },
  ]
};
