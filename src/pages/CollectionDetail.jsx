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
    trackPageView(`/bo-suu-tap/${slug}`, `BST ${collection.name} | ${BRAND_NAME}`);
  }, [slug, collection, navigate]);

  if (!collection) return null;

  const collectionProducts = getProductsByCollection(collection.slug);

  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="collection-detail-page py-8 bg-background min-h-screen font-montserrat"
    >
      <Helmet>
        <title>BST {collection.name} | {BRAND_NAME}</title>
        <meta name="description" content={collection.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link to="/" className="hover:text-secondary">Trang Chủ</Link>
          <ChevronRight size={14} />
          <Link to="/bo-suu-tap" className="hover:text-secondary">Bộ Sưu Tập</Link>
          <ChevronRight size={14} />
          <span className="text-dark font-bold">{collection.name}</span>
        </div>

        {/* Hero Banner */}
        <div className="glass-card p-8 sm:p-14 mb-10 bg-surface-cream grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-secondary" />
              <span>Bộ Sưu Tập Đặc Biệt</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-quicksand font-bold text-primary">
              {collection.name}
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {collection.description}
            </p>
          </div>

          <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center p-4">
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Products in this Collection */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-quicksand font-bold text-primary">
              Sản phẩm trong bộ sưu tập ({collectionProducts.length})
            </h2>
            <Link to="/bo-suu-tap" className="btn-secondary text-xs py-2 px-4">
              <ArrowLeft size={14} />
              <span>Tất cả BST</span>
            </Link>
          </div>

          <ProductGrid products={collectionProducts} />
        </div>

      </div>
    </motion.div>
  );
}
