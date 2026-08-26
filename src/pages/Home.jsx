import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import LookbookBento from '../components/sections/LookbookBento';
import CollectionsBanner from '../components/sections/CollectionsBanner';
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
        <title>{BRAND_NAME} | Dép Xinh Nâng Tầm Phong Cách – {BRAND_SLOGAN}</title>
        <meta
          name="description"
          content="Khám phá bộ sưu tập dép Clog EVA đúc nguyên khối, dép bánh mì và charm 3D DIY thời trang từ thương hiệu ABABAS. Êm ái, siêu nhẹ và tôn dáng."
        />
        <meta property="og:title" content={`${BRAND_NAME} | ${BRAND_SLOGAN}`} />
        <meta property="og:description" content="Dép thời trang EVA cao cấp và Charm 3D tùy chỉnh cho giới trẻ Gen Z." />
        <meta property="og:url" content="https://ababas.netlify.app/" />
        <link rel="canonical" href="https://ababas.netlify.app/" />
      </Helmet>

      <HeroSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <LookbookBento />
      <CollectionsBanner />
      <PartnersStrip />
      <InstagramFeed />
      <NewsletterBanner />
    </motion.div>
  );
}
