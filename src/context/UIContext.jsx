import React, { createContext, useContext, useState, useCallback } from 'react';

const UIContext = createContext();

export function UIProvider({ children }) {
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const showToast = useCallback((message, type = 'success', duration = 3000) => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, duration);
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  const openModal = useCallback((content) => {
    setModal(content);
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <UIContext.Provider
      value={{
        toast,
        showToast,
        hideToast,
        modal,
        openModal,
        closeModal,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
