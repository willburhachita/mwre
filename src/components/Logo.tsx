import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <img 
      src="/images/logo.png" 
      alt="Munda Wanga Real Estate Logo" 
      className={className}
    />
  );
};