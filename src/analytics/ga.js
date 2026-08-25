/**
 * Google Analytics 4 (GA4) Analytics Helper for Ababas
 */

// Tracking ID lấy từ biến môi trường hoặc fallback ID mẫu
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-ABABAS2025';

/**
 * Khởi tạo GA4 script vào trang
 */
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Kiểm tra nếu script đã tồn tại
  if (document.getElementById('ga-gtag')) return;

  const script1 = document.createElement('script');
  script1.async = true;
  script1.id = 'ga-gtag';
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(script2);
  
  console.log(`[GA4] Initialized with ID: ${GA_TRACKING_ID}`);
};

/**
 * Theo dõi chuyển trang (Pageview)
 */
export const trackPageView = (title, path = window.location.pathname) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title,
      page_path: path,
    });
  }
  // Cập nhật document title
  if (title) {
    document.title = title.includes('Ababas') ? title : `${title} | Ababas`;
  }
};

/**
 * Theo dõi sự kiện tùy chỉnh (Custom Event)
 */
export const trackEvent = (action, category = 'General', label = '', value = 0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  console.log(`[GA4 Event] ${category} -> ${action} (${label})`);
};
