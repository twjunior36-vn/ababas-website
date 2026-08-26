import ReactGA from 'react-ga4';

export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-ABABAS2025';

export const initGA = () => {
  try {
    if (GA_TRACKING_ID) {
      ReactGA.initialize(GA_TRACKING_ID);
      console.log(`[GA4] Initialized with ID: ${GA_TRACKING_ID}`);
    }
  } catch (error) {
    console.warn('[GA4] Failed to initialize:', error);
  }
};

export const trackPageView = (path = window.location.pathname, title = document.title) => {
  try {
    ReactGA.send({ hitType: 'pageview', page: path, title });
  } catch (error) {
    console.warn('[GA4] Pageview track error:', error);
  }
};

export const trackProductView = (product) => {
  if (!product) return;
  try {
    ReactGA.event('view_item', {
      currency: 'VND',
      value: product.price,
      items: [{ 
        item_id: product.id, 
        item_name: product.name,
        item_category: product.category,
        price: product.price 
      }]
    });
  } catch (error) {
    console.warn('[GA4] Product view track error:', error);
  }
};

export const trackAddToCart = (product) => {
  if (!product) return;
  try {
    ReactGA.event('add_to_cart', {
      currency: 'VND',
      value: product.price,
      items: [{ 
        item_id: product.id, 
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity: product.quantity || 1
      }]
    });
  } catch (error) {
    console.warn('[GA4] Add to cart track error:', error);
  }
};

export const trackEvent = (action, category, label, value) => {
  try {
    ReactGA.event({
      action,
      category,
      label,
      value
    });
  } catch (error) {
    console.warn('[GA4] Event track error:', error);
  }
};

export const trackSearch = (searchTerm) => {
  try {
    ReactGA.event('search', { search_term: searchTerm });
  } catch (error) {
    console.warn('[GA4] Search track error:', error);
  }
};
