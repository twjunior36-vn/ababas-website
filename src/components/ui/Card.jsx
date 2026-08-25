import React from 'react';
import { motion } from 'framer-motion';
import { cardHoverVariant } from '../../utils/animations';

export default function Card({
  children,
  hoverable = true,
  className = '',
  onClick,
  ...props
}) {
  return (
    <motion.div
      variants={hoverable ? cardHoverVariant : undefined}
      initial="rest"
      whileHover={hoverable ? 'hover' : undefined}
      onClick={onClick}
      className={`bg-white rounded-card border border-gray-100 shadow-card transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
