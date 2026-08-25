import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { useSearch } from '../../context/SearchContext';
import { SOCIAL_LINKS } from '../../utils/constants';
import logo from '../../assets/logo.svg';
import logoWhite from '../../assets/logo-white.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const {
    isSearchOpen,
    openSearch,
    closeSearch,
    searchQuery,
    setSearchQuery,
    suggestions,
    recentSearches,
    addRecentSearch,
  } = useSearch();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Focus search input when overlay opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Mega Menu Hover Delays (300ms)
  const handleMouseEnter = (linkPath) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(linkPath);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  // Search submission
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      addRecentSearch(searchQuery.trim());
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
      closeSearch();
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeSearch();
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-gray-100 py-3.5'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group py-1">
            <img
              src={logo}
              alt="ababas"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links with Mega Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isMegaMenu = !!link.megaMenu;
              const isMegaOpen = activeDropdown === link.path;

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => isMegaMenu && handleMouseEnter(link.path)}
                  onMouseLeave={() => isMegaMenu && handleMouseLeave()}
                >
                  <NavLink
                    to={link.path}
                    end={link.exact}
                    className={({ isActive }) =>
                      `flex items-center gap-1 font-poppins text-sm font-semibold transition-colors py-2 relative ${
                        isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        {isMegaMenu && <ChevronDown size={14} className={`transition-transform duration-200 ${isMegaOpen ? 'rotate-180 text-primary' : 'text-muted'}`} />}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                          />
                        )}
                      </>
                    )}
                  </NavLink>

                  {/* Mega Menu Dropdown for "Sản Phẩm" */}
                  {isMegaMenu && (
                    <AnimatePresence>
                      {isMegaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full -left-20 w-[600px] bg-white rounded-card shadow-card-hover border border-gray-100 p-6 grid grid-cols-2 gap-6 z-50 mt-1"
                        >
                          {/* Categories List */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-poppins">
                              Danh Mục Sản Phẩm
                            </h4>
                            <ul className="space-y-2">
                              {link.megaMenu.categories.map((cat) => (
                                <li key={cat.path}>
                                  <Link
                                    to={cat.path}
                                    className="flex items-center justify-between p-2 rounded-btn text-sm font-medium text-navy hover:text-primary hover:bg-orange-50/50 transition-colors"
                                  >
                                    <span>{cat.label}</span>
                                    <ArrowRight size={14} className="text-muted" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Featured Collections Preview */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-poppins">
                              Bộ Sưu Tập Nổi Bật
                            </h4>
                            <div className="space-y-2.5">
                              {link.megaMenu.featuredCollections.map((col) => (
                                <Link
                                  key={col.path}
                                  to={col.path}
                                  className="group/col flex items-center gap-3 p-1.5 rounded-btn hover:bg-gray-50 transition-colors"
                                >
                                  <img
                                    src={col.image}
                                    alt={col.label}
                                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                                  />
                                  <div>
                                    <div className="text-sm font-bold text-navy group-hover/col:text-primary transition-colors">
                                      {col.label}
                                    </div>
                                    <div className="text-xs text-muted">Khám phá ngay →</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={openSearch}
              aria-label="Tìm kiếm sản phẩm"
              className="p-2.5 rounded-full text-navy hover:text-primary hover:bg-orange-50 transition-colors"
            >
              <Search size={20} />
            </button>

            {/* CTA Button */}
            <Link
              to="/san-pham"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-pill shadow-md hover:bg-primary-hover hover:shadow-glow transition-all"
            >
              <span>Mua Ngay</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
              className="md:hidden p-2 text-navy hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-start">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={closeSearch}
              className="fixed inset-0 bg-navy"
            />

            {/* Search Content Box */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white w-full max-w-3xl mx-auto mt-16 sm:mt-24 rounded-card shadow-2xl p-6 z-10 mx-4"
            >
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search size={24} className="absolute left-4 text-primary" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Tìm dép Sandal, dép bánh mì, quai dù..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  className="w-full pl-12 pr-12 py-3.5 text-base font-poppins border-2 border-gray-200 rounded-btn focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={closeSearch}
                  className="absolute right-4 text-muted hover:text-navy p-1"
                >
                  <X size={20} />
                </button>
              </form>

              {/* Suggestions / Recent Searches */}
              <div className="mt-5">
                {suggestions.length > 0 ? (
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-poppins">
                      Gợi Ý Sản Phẩm
                    </h5>
                    <div className="space-y-2">
                      {suggestions.map((item) => (
                        <Link
                          key={item.id}
                          to={`/san-pham/${item.slug}`}
                          onClick={closeSearch}
                          className="flex items-center justify-between p-2.5 rounded-btn hover:bg-orange-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <img src={item.images[0]} alt={item.name} className="w-10 h-10 rounded object-cover" />
                            <span className="text-sm font-semibold text-navy">{item.name}</span>
                          </div>
                          <span className="text-xs font-bold text-primary">Xem chi tiết →</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-muted mb-2 font-poppins">
                      Tìm Kiếm Phổ Biến
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            setSearchQuery(tag);
                            addRecentSearch(tag);
                            navigate(`/tim-kiem?q=${encodeURIComponent(tag)}`);
                            closeSearch();
                          }}
                          className="px-3.5 py-1.5 rounded-pill bg-gray-100 text-xs font-semibold text-dark hover:bg-primary hover:text-white transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MOBILE SLIDE-IN DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-4/5 max-w-sm h-full bg-navy text-white p-6 flex flex-col justify-between overflow-y-auto z-10"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <img
                    src={logoWhite}
                    alt="ababas"
                    className="h-10 w-auto object-contain"
                  />
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>

                {/* Nav Links Stacked */}
                <div className="py-4 space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.exact}
                      className={({ isActive }) =>
                        `block px-3 py-2.5 rounded-btn text-sm font-semibold transition-colors ${
                          isActive ? 'bg-primary text-white' : 'text-gray-200 hover:bg-white/10'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-center gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-primary text-white transition-colors"
                    >
                      <span className="text-xs font-bold">{s.name[0]}</span>
                    </a>
                  ))}
                </div>
                <p className="text-center text-xs text-gray-400">
                  Hotline: 1900 888 666
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
