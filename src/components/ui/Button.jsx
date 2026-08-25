import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'white' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg' | 'pill'
  className = '',
  icon,
  iconPosition = 'right',
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold font-poppins transition-all duration-300 rounded-btn cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-xs sm:text-sm';

  const variants = {
    // 1. Primary: Stitch Orange with white text
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0',
    // 2. Secondary: Deep Navy with white text
    secondary: 'bg-navy text-white hover:bg-secondary-light hover:-translate-y-0.5 active:translate-y-0 shadow-sm',
    // 3. Outlined: 2px Orange border with orange text
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    // 4. White / Light
    white: 'bg-white text-navy hover:bg-light shadow-md hover:-translate-y-0.5 border border-border',
    ghost: 'bg-transparent text-dark hover:bg-primary/10',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 rounded-sm',
    md: 'text-xs sm:text-sm px-5 py-2.5 gap-2 rounded-btn',
    lg: 'text-sm sm:text-base px-8 py-3.5 gap-2.5 rounded-btn',
    pill: 'text-xs sm:text-sm px-6 py-2.5 gap-2 rounded-pill',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </>
      )}
    </motion.button>
  );
}
