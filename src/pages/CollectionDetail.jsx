import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, ArrowLeft } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { getCollectionBySlug } from '../data/collections';
import { getProductsByCollection } from '../data/products';
import { pageTransitionVariant } from '../utils/animations';
import { trackPageView } from '../utils/analytics';
import { BRAND_NAME } from '../utils/constants';

export default function CollectionDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const collection = getCollectionBySlug(slug);

  useEffect(() => {
    if (!collection) {
      navigate('/404', { replace: true });
      return;
    }
    trackPageView(`/bo-suu-tap/${slug}`, `BST ${collection.title} | ${BRAND_NAME}`);
  }, [slug, collection, navigate]);

  if (!collection) return null;

  const collectionProducts = getProductsByCollection(collection.slug);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="collection-detail-page py-8 bg-light min-h-screen font-poppins"
    >
      <Helmet>
        <title>BST {collection.title} | {BRAND_NAME}</title>
        <meta name="description" content={collection.description} />
        <link rel="canonical" href={`https://ababas.netlify.app/bo-suu-tap/${collection.slug}`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link to="/" className="hover:text-primary">Trang Chủ</Link>
          <ChevronRight size={14} />
          <Link to="/bo-suu-tap" className="hover:text-primary">Bộ Sưu Tập</Link>
          <ChevronRight size={14} />
          <span className="text-navy font-bold">{collection.name}</span>
        </div>

        {/* Hero Banner for Collection */}
        <div className="relative rounded-card overflow-hidden h-72 sm:h-96 mb-10 shadow-card">
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-6 sm:p-12 flex flex-col justify-end text-white">
            <span className="text-xs font-bold uppercase tracking-wider bg-primary text-white px-3 py-1 rounded-pill self-start mb-3">
              {collection.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mb-3">
              {collection.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 max-w-2xl">
              {collection.description}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-navy">
              Sản Phẩm Trong Bộ Sưu Tập ({collectionProducts.length})
            </h2>
            <Link
              to="/bo-suu-tap"
              className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1"
            >
              <ArrowLeft size={14} />
              <span>Xem tất cả BST</span>
            </Link>
          </div>

          <ProductGrid products={collectionProducts} itemsPerPage={9} />
        </div>

      </div>
    </motion.div>
  );
}
