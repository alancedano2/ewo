// src/components/FadeInWrapper.tsx
'use client';

import React, { useEffect, useState, ReactNode } from 'react';

interface FadeInWrapperProps {
  children: ReactNode;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Al cargar el componente, activamos la visibilidad después de un pequeño retraso
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;