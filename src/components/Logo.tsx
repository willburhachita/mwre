import React from 'react';
import logoImage from '/public/images/logo.optimized.png';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <img 
      src={logoImage}
      alt="Munda Wanga Real Estate Logo" 
      className={className}
      loading="eager" // Prioritize logo loading
      decoding="async" // Enable async decoding
      width="200" // Match the optimized dimensions
      height="200"
    />
  );
};