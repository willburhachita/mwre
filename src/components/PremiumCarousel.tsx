import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LandCard } from './LandCard';
import { LandListing } from '../types';

interface PremiumCarouselProps {
  listings: LandListing[];
}

export const PremiumCarousel: React.FC<PremiumCarouselProps> = ({ listings }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const speedRef = useRef<number>(50); // pixels per second

  // Create a buffer of listings for seamless scrolling
  const displayListings = [...listings, ...listings, ...listings];

  const animate = useCallback((currentTime: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = currentTime;
    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    if (isAnimating && containerRef.current) {
      const cardWidth = 336; // card width + gap
      const totalWidth = listings.length * cardWidth;
      
      setTranslateX(prevTranslate => {
        let newTranslate = prevTranslate - (speedRef.current * deltaTime / 1000);
        
        // If we've scrolled past one set of listings, reset to the middle set
        if (Math.abs(newTranslate) >= totalWidth) {
          newTranslate += totalWidth;
        }
        
        return newTranslate;
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isAnimating, listings.length]);

  useEffect(() => {
    if (listings.length === 0) return;
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, listings.length]);

  const handleMouseEnter = () => {
    setIsAnimating(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAnimating(true);
    lastTimeRef.current = 0;
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  if (listings.length === 0) return null;

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={containerRef}
        className="flex transition-transform duration-100 ease-linear"
        style={{
          transform: `translateX(${translateX}px)`,
          width: `${displayListings.length * 336}px` // 320px width + 16px gap
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {displayListings.map((listing, index) => (
          <div 
            key={`${listing.id}-${Math.floor(index / listings.length)}`} 
            className="flex-shrink-0 w-80 mx-3"
          >
            <LandCard listing={listing} />
          </div>
        ))}
      </div>
      
      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {listings.map((_, index) => {
          const currentPosition = Math.abs(translateX) % (listings.length * 336);
          const currentIndex = Math.floor(currentPosition / 336);
          
          return (
            <button
              key={index}
              onClick={() => {
                const newTranslate = -(index * 336);
                setTranslateX(newTranslate);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index
                  ? 'bg-amber-600'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-amber-400'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};