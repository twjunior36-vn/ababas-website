/**
 * ABABAS Product Catalog – Official Ababas Shopee & Facebook Dataset
 * Features high-resolution imagery, 3D charms, color variants, size grids (35-43), and verified reviews
 * Sources: https://shopee.vn/ababas_vn & https://www.facebook.com/Ababas2026
 */

export const products = [
  {
    id: 'ABB-001',
    name: 'Dép Clog Sục Bánh Mì ABABAS Cloud Walker Pro (Đế Cao 5cm, Kèm Charm 3D)',
    slug: 'dep-clog-ababas-cloud-walker-pro',
    category: 'clog',
    collection: 'cloud-walker',
    price: 179000,
    originalPrice: 299000,
    discount: 40,
    rating: 5.0,
    reviewCount: 1480,
    soldCount: 5200,
    isNew: true,
    isHot: true,
    isFeatured: true,
    stock: 120,
    shopeeUrl: 'https://shopee.vn/ababas_vn',
    colors: [
      {
        name: 'Trắng Kem (Surface Cream)',
        hex: '#FDFDF5',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
        ]
      },
      {
        name: 'Hồng Phấn (Blush Rose)',
        hex: '#FDBEC9',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ',
          'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80'
        ]
      },
      {
        name: 'Xanh Pastel (Sky Mint)',
        hex: '#BAEAFF',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCWZkd0hUrTJ5dal9VWpaZAYeyixdU_QytRw8W8c-9mrCWfKwe54UTj6vqBy6r-p9rKdknTgjQA6wvvv3mMPoE2LYsMt4NsvFWexIf1B13kqGLBt2KmWAWxb8Dbxn11H2H15L6hazyZnB88bmJpJf-J9AxXhiggiUPXVOxks5vCtBxVf_hm_9AcgqCqZsCQh5hFvwFJjGLO7exId_aDaoZTmUbyPQ3cpm3gO_Gm3F9OGgcw2ww4ywaTww'
        ]
      },
      {
        name: 'Đen Tuyển (Midnight Black)',
        hex: '#1C1B1B',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAtxT9VvDj1ihwpNCIy2gjKg8gmJApnsRn0ggpBsR9HQGFTvxKQFQnYrAhM1Wr5zoRGr9Gc8v9Xher0G2tex1lkbhlz1SX2khczp8l6VSknILgIFa4snjNbDqtRpA4gnbol6fx4aVljM5l_xIW1Xj4IM3fPv5QI0Kx2dLrHgeogA28hdWqdrKyLGUcEsmvnTIIAcLE09WNRbDI10YLA8y4PNcO8W5nSadDSkDAN-YwWrIxIlxBOh0W4xQ'
        ]
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWZkd0hUrTJ5dal9VWpaZAYeyixdU_QytRw8W8c-9mrCWfKwe54UTj6vqBy6r-p9rKdknTgjQA6wvvv3mMPoE2LYsMt4NsvFWexIf1B13kqGLBt2KmWAWxb8Dbxn11H2H15L6hazyZnB88bmJpJf-J9AxXhiggiUPXVOxks5vCtBxVf_hm_9AcgqCqZsCQh5hFvwFJjGLO7exId_aDaoZTmUbyPQ3cpm3gO_Gm3F9OGgcw2ww4ywaTww'
    ],
    material: 'Nhựa bọt khí EVA đúc nguyên khối siêu nhẹ, kháng nước 100%, chống hôi chân',
    soleHeight: '5.0 cm (Đế nâng chiều cao hack dáng cực chuẩn)',
    weight: '210g / chiếc (Êm nhẹ như lướt trên mây)',
    strap: 'Quai gập 2 chiều linh hoạt (vừa làm dép lê vừa làm dép quai hậu)',
    description: 'Dòng dép sục Clog bán chạy nhất của Ababas trên Shopee & Facebook. Thiết kế đúc nguyên khối từ hợp chất bọt khí EVA mật độ cao, đế dày 5cm giúp tôn dáng, đế rãnh lượn sóng chống trượt tuyệt đối. Đi kèm bộ lỗ gắn charm 3D DIY tự do sáng tạo.',
    tags: ['dép sục', 'clog eva', 'đế 5cm', 'charm 3d', 'chống trượt', 'shopee official']
  },
  {
    id: 'ABB-002',
    name: 'Dép Sục Nữ ABABAS Pink Bloom Sweet Candy (Tone Pastel Tặng Charm)',
    slug: 'dep-suc-nu-ababas-pink-bloom',
    category: 'clog',
    collection: 'pink-bloom',
    price: 189000,
    originalPrice: 280000,
    discount: 32,
    rating: 4.9,
    reviewCount: 920,
    soldCount: 3800,
    isNew: false,
    isHot: true,
    isFeatured: true,
    stock: 85,
    shopeeUrl: 'https://shopee.vn/ababas_vn',
    colors: [
      {
        name: 'Hồng Pastel (Sweet Candy)',
        hex: '#FDBEC9',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ'
        ]
      },
      {
        name: 'Trắng Sữa (Milky White)',
        hex: '#FFFFFF',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A'
        ]
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ'
    ],
    material: 'EVA siêu mềm mại, bề mặt xử lý chống bám bẩn',
    soleHeight: '5.0 cm',
    weight: '195g / chiếc',
    strap: 'Quai đeo có chốt xoay linh hoạt',
    description: 'Mẫu dép sục nữ tone hồng pastel ngọt ngào được hàng ngàn bạn trẻ yêu thích trên TikTok & Shopee. Thiết kế bo tròn ôm chân, đệm vòm êm ái hỗ trợ xương khớp khi đi bộ cả ngày.',
    tags: ['dép sục nữ', 'hồng pastel', 'dễ thương', 'tặng charm', 'shopee']
  },
  {
    id: 'ABB-003',
    name: 'Dép Bánh Mì Quai Ngang ABABAS Soft Step Unisex (Siêu Êm Nhẹ)',
    slug: 'dep-quai-ngang-ababas-soft-step',
    category: 'sandal',
    collection: 'soft-step',
    price: 149000,
    originalPrice: 220000,
    discount: 32,
    rating: 4.8,
    reviewCount: 760,
    soldCount: 4100,
    isNew: false,
    isHot: true,
    isFeatured: true,
    stock: 140,
    shopeeUrl: 'https://shopee.vn/ababas_vn',
    colors: [
      {
        name: 'Trắng Kem',
        hex: '#FDFDF5',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCWZkd0hUrTJ5dal9VWpaZAYeyixdU_QytRw8W8c-9mrCWfKwe54UTj6vqBy6r-p9rKdknTgjQA6wvvv3mMPoE2LYsMt4NsvFWexIf1B13kqGLBt2KmWAWxb8Dbxn11H2H15L6hazyZnB88bmJpJf-J9AxXhiggiUPXVOxks5vCtBxVf_hm_9AcgqCqZsCQh5hFvwFJjGLO7exId_aDaoZTmUbyPQ3cpm3gO_Gm3F9OGgcw2ww4ywaTww'
        ]
      },
      {
        name: 'Đen Mờ (Matte Black)',
        hex: '#1C1B1B',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAtxT9VvDj1ihwpNCIy2gjKg8gmJApnsRn0ggpBsR9HQGFTvxKQFQnYrAhM1Wr5zoRGr9Gc8v9Xher0G2tex1lkbhlz1SX2khczp8l6VSknILgIFa4snjNbDqtRpA4gnbol6fx4aVljM5l_xIW1Xj4IM3fPv5QI0Kx2dLrHgeogA28hdWqdrKyLGUcEsmvnTIIAcLE09WNRbDI10YLA8y4PNcO8W5nSadDSkDAN-YwWrIxIlxBOh0W4xQ'
        ]
      },
      {
        name: 'Rêu Olive',
        hex: '#5E604D',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A'
        ]
      }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWZkd0hUrTJ5dal9VWpaZAYeyixdU_QytRw8W8c-9mrCWfKwe54UTj6vqBy6r-p9rKdknTgjQA6wvvv3mMPoE2LYsMt4NsvFWexIf1B13kqGLBt2KmWAWxb8Dbxn11H2H15L6hazyZnB88bmJpJf-J9AxXhiggiUPXVOxks5vCtBxVf_hm_9AcgqCqZsCQh5hFvwFJjGLO7exId_aDaoZTmUbyPQ3cpm3gO_Gm3F9OGgcw2ww4ywaTww'
    ],
    material: 'EVA siêu nhẹ đúc nguyên khối, độ đàn hồi cao',
    soleHeight: '4.5 cm',
    weight: '180g / chiếc',
    strap: 'Quai ngang liền khối không lo đứt keo',
    description: 'Dép quai ngang bánh mì phong cách tối giản dành cho cả nam và nữ. Thích hợp đi trong nhà, dạo phố, đi biển hay đi học. Dễ dàng vệ sinh, mau khô và cực kỳ bền bỉ.',
    tags: ['dép quai ngang', 'dép bánh mì', 'unisex', 'siêu êm', 'chống nước']
  },
  {
    id: 'ABB-004',
    name: 'Dép Sục Nam Nữ ABABAS Midnight All Black (Đen Tuyền Phong Cách)',
    slug: 'dep-suc-ababas-midnight-all-black',
    category: 'clog',
    collection: 'urban-minimalist',
    price: 179000,
    originalPrice: 299000,
    discount: 40,
    rating: 4.9,
    reviewCount: 650,
    soldCount: 2900,
    isNew: false,
    isHot: true,
    isFeatured: true,
    stock: 90,
    shopeeUrl: 'https://shopee.vn/ababas_vn',
    colors: [
      {
        name: 'Đen Tuyền (All Black)',
        hex: '#1C1B1B',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAtxT9VvDj1ihwpNCIy2gjKg8gmJApnsRn0ggpBsR9HQGFTvxKQFQnYrAhM1Wr5zoRGr9Gc8v9Xher0G2tex1lkbhlz1SX2khczp8l6VSknILgIFa4snjNbDqtRpA4gnbol6fx4aVljM5l_xIW1Xj4IM3fPv5QI0Kx2dLrHgeogA28hdWqdrKyLGUcEsmvnTIIAcLE09WNRbDI10YLA8y4PNcO8W5nSadDSkDAN-YwWrIxIlxBOh0W4xQ'
        ]
      }
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtxT9VvDj1ihwpNCIy2gjKg8gmJApnsRn0ggpBsR9HQGFTvxKQFQnYrAhM1Wr5zoRGr9Gc8v9Xher0G2tex1lkbhlz1SX2khczp8l6VSknILgIFa4snjNbDqtRpA4gnbol6fx4aVljM5l_xIW1Xj4IM3fPv5QI0Kx2dLrHgeogA28hdWqdrKyLGUcEsmvnTIIAcLE09WNRbDI10YLA8y4PNcO8W5nSadDSkDAN-YwWrIxIlxBOh0W4xQ'
    ],
    material: 'EVA kháng nước mật độ cao',
    soleHeight: '5.0 cm',
    weight: '220g / chiếc',
    strap: 'Quai xoay 2 nấc',
    description: 'Phiên bản đen huyền bí all-black cá tính, chống bám bụi bẩn, phù hợp cho mọi outfit đường phố streetwear năng động.',
    tags: ['dép sục đen', 'all black', 'streetwear', 'nam nữ']
  },
  {
    id: 'ABB-005',
    name: 'Dép Sandal ABABAS Trekker Quai Dán Thể Thao (Outdoor & Dã Ngoại)',
    slug: 'dep-sandal-ababas-trekker',
    category: 'sandal',
    collection: 'urban-minimalist',
    price: 199000,
    originalPrice: 320000,
    discount: 37,
    rating: 4.8,
    reviewCount: 420,
    soldCount: 1800,
    isNew: true,
    isHot: false,
    isFeatured: true,
    stock: 60,
    shopeeUrl: 'https://shopee.vn/ababas_vn',
    colors: [
      {
        name: 'Đen Phối Xám',
        hex: '#1C1B1B',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A'
        ]
      }
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A'
    ],
    material: 'Đế đệm EVA kết hợp quai dù thể thao chắc chắn',
    soleHeight: '4.0 cm',
    weight: '230g / chiếc',
    strap: 'Quai dán Velcro điều chỉnh kích thước linh hoạt',
    description: 'Sandal quai dán năng động, độ bám mặt đường vượt trội cho các chuyến dã ngoại, du lịch và hoạt động ngoài trời cả ngày.',
    tags: ['sandal thể thao', 'quai dán', 'trekker', 'dã ngoại']
  },
  {
    id: 'ABB-006',
    name: 'Set 6-12 Charm 3D Cao Cấp DIY Gắn Dép Sục ABABAS (Chủ Đề Candy & Bear)',
    slug: 'set-charm-3d-diy-ababas',
    category: 'charm',
    collection: 'charm-diy',
    price: 49000,
    originalPrice: 89000,
    discount: 45,
    rating: 5.0,
    reviewCount: 2100,
    soldCount: 8900,
    isNew: true,
    isHot: true,
    isFeatured: true,
    stock: 300,
    shopeeUrl: 'https://shopee.vn/ababas_vn',
    colors: [
      {
        name: 'Mix Đa Sắc (Candy Theme)',
        hex: '#FDBEC9',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ'
        ]
      }
    ],
    sizes: ['Free Size'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ'
    ],
    material: 'Silicone & Nhựa PVC đúc nổi 3D cao cấp',
    soleHeight: null,
    weight: '30g / set',
    strap: 'Chân cài nút chắc chắn, không lo rơi rớt',
    description: 'Bộ sưu tập Charm 3D DIY độc quyền từ Ababas, chất liệu PVC sắc nét, gắn chặt vào các lỗ trên dép sục Clog giúp bạn biến hóa phong cách mỗi ngày.',
    tags: ['charm 3d', 'jibbitz', 'phụ kiện dép', 'diy']
  }
];

export const collections = [
  {
    id: 'col-1',
    name: 'Cloud Walker Pro',
    slug: 'cloud-walker',
    subtitle: 'Đế đệm khí 5cm • Siêu nhẹ êm chân',
    description: 'Dòng sản phẩm Clog biểu tượng của Ababas với khả năng nâng đỡ vòm chân và tôn dáng tự nhiên.',
    itemCount: 12,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkHfhyBn3jm03syrvuMDsreOXwKvch7928AoUT6XwIY_KoqFLExTY4cOm6KjXSocuMcdXmkyyTHn_3chkN5mSK9SJjtiHmsQm1oQhd4hI5-hPSJd7yMVx5iDJYV72sBxG5mbRXJW2knrvHcm0OiEkN5Q-qEwiFRgfdwn-BPBRycf_MKbHUdzvRS-RhjncOJaLFerDC8bjQE4pdGIL1bTT6sK3r1kVdYxp5U-g4Qp1SWvPLJikBhN5A',
    season: 'Summer 2024'
  },
  {
    id: 'col-2',
    name: 'Pink Bloom Sweet',
    slug: 'pink-bloom',
    subtitle: 'Sắc hồng ngọt ngào • Chuẩn Vibe Gen Z',
    description: 'Bộ sưu tập mang gam màu pastel trong trẻo, mang lại sự nữ tính và đáng yêu trong từng bước đi.',
    itemCount: 8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ',
    season: 'Spring / Summer'
  },
  {
    id: 'col-3',
    name: 'Soft Step Comfort',
    slug: 'soft-step',
    subtitle: 'Bánh mì quai ngang • Bền bỉ mọi thời tiết',
    description: 'Sự tối giản đỉnh cao kết hợp chất liệu EVA siêu êm ái, thích hợp cho cuộc sống năng động hằng ngày.',
    itemCount: 10,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWZkd0hUrTJ5dal9VWpaZAYeyixdU_QytRw8W8c-9mrCWfKwe54UTj6vqBy6r-p9rKdknTgjQA6wvvv3mMPoE2LYsMt4NsvFWexIf1B13kqGLBt2KmWAWxb8Dbxn11H2H15L6hazyZnB88bmJpJf-J9AxXhiggiUPXVOxks5vCtBxVf_hm_9AcgqCqZsCQh5hFvwFJjGLO7exId_aDaoZTmUbyPQ3cpm3gO_Gm3F9OGgcw2ww4ywaTww',
    season: 'All Seasons'
  },
  {
    id: 'col-4',
    name: 'Charm 3D DIY Studio',
    slug: 'charm-diy',
    subtitle: 'Hơn 100+ mẫu Charm • Độc bản theo cách của bạn',
    description: 'Kho phụ kiện charm 3D đúc nổi sắc nét, thỏa sức custom đôi dép theo cá tính và sở thích riêng.',
    itemCount: 24,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0HfIEAKyi413xzvSF_X2fcl_P5DhzAMRnfxT0CD8jRidCqL_uUyANMI8pWDcq7MUsluCOWsmwCyEZPuAFS7VT3_p6tXx94aBHwmK3h9C_noqKq-DC9bp920luJ5XFz3hQgjY3qJ7uyvard8s1eTFnjNcK_jNDSrNaygcvQei30PHUyztJZxwuu5k8DmZ0zWqt-Q6fNtaav-Vjx5kYFRH8FDjGZNHR1sKJXlRrBitFKz9tHMlu1tjQ',
    season: 'Always In Stock'
  }
];

export const lookbooks = [
  {
    id: 'lk-1',
    title: 'Dạo Phố Cuối Tuần',
    subtitle: 'Năng động, phóng khoáng cùng Cloud Walker Pro & Charm 3D',
    outfit: 'Áo phông oversize + Quần short túi hộp + Dép Clog Ababas kèm tất cổ cao',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9MLpWqW3IziqgauczZZ2hSEdPwz38lLDthQjWyT4EHt4giMCsC5JG3IRFj9p4silQJAZxwH2cHrpA9pF63i6gxKdzbTOQSvP8ivwATmoE9VjDafVIiwUA9vO_EUScPvxjEWYm4uxBtP478RMDWFEmF_uB7ENzyKHKUvberI3wJ3HkeNCwyRCE_p2gLBGP_frUeW95xs5KRuT6lPmCZHhe0hmT-wx5O2IYt21u0TJEk5sLrNUnMUwMDg',
    featuredProduct: 'ABB-001'
  },
  {
    id: 'lk-2',
    title: 'Cafe Sáng Ngọt Ngào',
    subtitle: 'Nữ tính, nhẹ nhàng cùng Pink Bloom Edition',
    outfit: 'Váy xòe hoa nhí + Túi canvas + Dép Clog tone hồng pastel ngọt ngào',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyfv2EGU09n2Vdufj34VQvaOZFuLb2Uv9wamoEelL7YxwOozauSD1Y8SqWDWMwTM3Z3NZpgq05Oe5Gw4_qK2UesXa7eEx3Le9v_6J4AemKGOPIaUPNxyY6Weecogi5qJoMv4VMxsNWXp0N1uYT9yFMVxsC2uajnDJHnkHsTOIQjrbLrn6rFss8EiCJJ84U4WOsGQ6x2S_VxeJTPi1SMBACgI0wpTGXbyGUHW_nzuE3Px9Jub8kdQrS_A',
    featuredProduct: 'ABB-002'
  },
  {
    id: 'lk-3',
    title: 'Resort & Biển Hè',
    subtitle: 'Thoải mái tận hưởng kỳ nghỉ cùng Soft Step',
    outfit: 'Sơ mi đũi mở cúc + Quần linen + Dép quai ngang bánh mì Ababas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsBG4c2MrWIaefSpc_9IpcxUiTeDfXQIHg6YpPEkmPS0gdOFVTaMqbbltshN1ADLcvjc6vJVkxvP2YOBYbsdVuptbggq4NQhB6xMDFZnHtWV9kkAItSLSncRsPWpyU3uZUCroFTKrn1V0247pTXUUw9jvEBAeV6WcOfnZcS2fBvIZbil0IMGTzhx2G1SCWZBk9CqjfTjOTfBN2cLU4bOL7O2by9qd4IBScPn8U08UvdpmQBMql3Kw7tA',
    featuredProduct: 'ABB-003'
  }
];

// Helper Functions
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getProductById = (id) => {
  return products.find((p) => p.id === id);
};

export const getRelatedProducts = (currentProduct, limit = 4) => {
  if (!currentProduct) return [];
  return products
    .filter((p) => p.id !== currentProduct.id && (p.category === currentProduct.category || p.collection === currentProduct.collection))
    .slice(0, limit);
};

export const getCollectionBySlug = (slug) => {
  return collections.find((c) => c.slug === slug);
};

export const getProductsByCollection = (collectionSlug) => {
  return products.filter((p) => p.collection === collectionSlug);
};

export const getFeaturedProducts = () => {
  return products.filter((p) => p.isFeatured);
};
