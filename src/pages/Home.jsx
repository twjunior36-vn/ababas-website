import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import CollectionsBanner from '../components/sections/CollectionsBanner';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import StatsCounter from '../components/sections/StatsCounter';
import PartnersStrip from '../components/sections/PartnersStrip';
import InstagramFeed from '../components/sections/InstagramFeed';
import NewsletterBanner from '../components/sections/NewsletterBanner';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME, BRAND_SLOGAN } from '../utils/constants';

export default function Home() {
  useEffect(() => {
    trackPageView('/', `${BRAND_NAME} | ${BRAND_SLOGAN}`);
  }, []);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home-page"
    >
      <Helmet>
        <title>{BRAND_NAME} | Dép Thời Trang Trẻ Trung – {BRAND_SLOGAN}</title>
        <meta
          name="description"
          content="Khám phá bộ sưu tập dép thời trang, slides, sandal cao cấp từ thương hiệu ABABAS. Êm ái, siêu nhẹ và thời thượng."
        />
        <meta property="og:title" content={`${BRAND_NAME} | ${BRAND_SLOGAN}`} />
        <meta property="og:description" content="Dép thời trang phong cách trẻ trung năng động cho Gen Z." />
        <meta property="og:url" content="https://ababas.netlify.app/" />
        <link rel="canonical" href="https://ababas.netlify.app/" />
      </Helmet>

      <HeroSection />
      <FeaturedProducts />
      <CollectionsBanner />
      <WhyChooseUs />
      <StatsCounter />
      <PartnersStrip />
      <InstagramFeed />
      <NewsletterBanner />
    </motion.div>
  );
}
