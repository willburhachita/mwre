import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/images/logo.webp"
      />
      <img 
        src="/images/logo.png"
        alt="Munda Wanga Real Estate Logo" 
        className={`${className} object-contain`}
        loading="eager"
        decoding="async"
        width="32"
        height="32"
      />
    </picture>
  );
};