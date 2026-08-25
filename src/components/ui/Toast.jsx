import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useUI } from '../../context/UIContext';

export default function Toast() {
  const { toast, hideToast } = useUI();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />,
    error: <AlertCircle size={20} className="text-red-400 flex-shrink-0" />,
    info: <Info size={20} className="text-sky-400 flex-shrink-0" />,
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-navy text-white px-5 py-3.5 rounded-card shadow-2xl border border-white/10 max-w-sm"
      >
        {icons[toast.type] || icons.success}
        <span className="text-sm font-medium leading-snug flex-grow">{toast.message}</span>
        <button
          onClick={hideToast}
          className="text-gray-400 hover:text-white p-1 ml-1"
        >
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
