import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { useSearch } from '../../context/SearchContext';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (linkPath) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(linkPath);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      addRecentSearch(searchQuery.trim());
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
      closeSearch();
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30 py-3'
            : 'bg-surface/80 backdrop-blur-sm py-4 border-b border-outline-variant/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo in Stitch Typography */}
          <Link to="/" className="flex items-center group py-1">
            <span className="text-3xl font-quicksand font-bold text-secondary tracking-tight group-hover:opacity-80 transition-opacity">
              Ababas
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7">
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
                      `flex items-center gap-1 font-montserrat text-sm font-bold transition-colors py-2 relative ${
                        isActive
                          ? 'text-secondary border-b-2 border-secondary'
                          : 'text-on-surface-variant hover:text-secondary'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    {isMegaMenu && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isMegaOpen ? 'rotate-180 text-secondary' : 'text-muted'}`}
                      />
                    )}
                  </NavLink>

                  {/* Mega Menu Dropdown */}
                  {isMegaMenu && (
                    <AnimatePresence>
                      {isMegaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full -left-16 w-[560px] glass-card p-6 grid grid-cols-2 gap-6 z-50 mt-1 shadow-card"
                        >
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-montserrat">
                              Danh Mục Dép & Charm
                            </h4>
                            <ul className="space-y-2">
                              {link.megaMenu.categories.map((cat) => (
                                <li key={cat.path}>
                                  <Link
                                    to={cat.path}
                                    className="flex items-center justify-between p-2 rounded-xl text-sm font-medium text-dark hover:text-secondary hover:bg-secondary-container/40 transition-colors"
                                  >
                                    <span>{cat.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="border-l border-outline-variant/30 pl-6">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-montserrat">
                              BST Nổi Bật
                            </h4>
                            <div className="space-y-3">
                              {link.megaMenu.featuredCollections.map((col) => (
                                <Link
                                  key={col.path}
                                  to={col.path}
                                  className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-secondary-container/30 transition-colors group/col"
                                >
                                  <img
                                    src={col.image}
                                    alt={col.label}
                                    className="w-12 h-12 rounded-lg object-contain bg-surface-container p-1"
                                  />
                                  <span className="text-xs font-bold font-quicksand text-dark group-hover/col:text-secondary">
                                    {col.label}
                                  </span>
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

          {/* Right Action Icons & B2B Button */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={openSearch}
              aria-label="Tìm kiếm sản phẩm"
              className="p-2.5 rounded-full hover:bg-primary-container text-primary transition-all duration-200"
            >
              <Search size={19} />
            </button>

            {/* Partner CTA Button */}
            <Link
              to="/doi-tac"
              className="btn-secondary hidden lg:inline-flex text-xs py-2 px-5 font-bold"
            >
              Liên hệ đối tác
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full text-primary hover:bg-primary-container transition-colors"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-outline-variant/30 px-6 py-6 space-y-4"
            >
              {navLinks.map((link) => (
                <div key={link.path} className="border-b border-outline-variant/20 pb-3">
                  <NavLink
                    to={link.path}
                    end={link.exact}
                    className={({ isActive }) =>
                      `block text-base font-quicksand font-bold ${
                        isActive ? 'text-secondary' : 'text-dark'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
              <div className="pt-2">
                <Link to="/doi-tac" className="btn-secondary w-full py-3 text-center block text-xs">
                  Liên hệ đối tác B2B
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Search Overlay Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
            onClick={closeSearch}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-2xl bg-white p-6 shadow-2xl"
            >
              <form onSubmit={handleSearchSubmit} className="relative flex items-center mb-4">
                <Search size={20} className="absolute left-4 text-muted" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm dép clog, sandal, charm 3D..."
                  className="w-full pl-12 pr-12 py-3.5 rounded-full bg-surface-cream border border-outline-variant focus:outline-none focus:border-secondary font-montserrat text-sm"
                />
                <button
                  type="button"
                  onClick={closeSearch}
                  className="absolute right-4 text-muted hover:text-dark"
                >
                  <X size={18} />
                </button>
              </form>

              {/* Suggestions */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted font-montserrat block mb-2">
                  Gợi ý tìm kiếm:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Walker', 'Pink Bloom', 'Dép Clog', 'Set Charm 3D', 'Soft Step'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSearchQuery(tag);
                        navigate(`/tim-kiem?q=${encodeURIComponent(tag)}`);
                        closeSearch();
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-surface-cream hover:bg-secondary-container text-xs font-montserrat font-semibold text-dark transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
