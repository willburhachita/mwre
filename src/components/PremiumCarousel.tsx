import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LandCard } from './LandCard';
import { LandListing } from '../types';

interface PremiumCarouselProps {
  listings: LandListing[];
}

export const PremiumCarousel: React.FC<PremiumCarouselProps> = ({ listings }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  const [displayedListings, setDisplayedListings] = useState<LandListing[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const speedRef = useRef<number>(50); // pixels per second

  // Initialize the display listings
  useEffect(() => {
    if (listings.length > 0) {
      // Start with 4 sets to ensure smooth scrolling
      setDisplayedListings([...listings, ...listings, ...listings, ...listings]);
    }
  }, [listings]);

  const addMoreListings = useCallback(() => {
    setDisplayedListings(current => [...current, ...listings]);
  }, [listings]);

  const animate = useCallback((currentTime: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = currentTime;
    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    if (isAnimating && containerRef.current) {
      const cardWidth = 336; // card width + gap
      
      setTranslateX(prevTranslate => {
        const newTranslate = prevTranslate - (speedRef.current * deltaTime / 1000);
        
        // When we've scrolled far enough, add more listings
        if (Math.abs(newTranslate) > (displayedListings.length - listings.length) * cardWidth / 2) {
          addMoreListings();
        }
        
        return newTranslate;
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isAnimating, listings.length, displayedListings.length, addMoreListings]);

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
        className="flex transition-transform duration-[0ms]"
        style={{
          transform: `translateX(${translateX}px)`,
          width: `${displayedListings.length * 336}px` // 320px width + 16px gap
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {displayedListings.map((listing, index) => (
          <div 
            key={`${listing.id}-${index}`}
            className="flex-shrink-0 w-80 mx-3"
          >
            <LandCard listing={listing} />
          </div>
        ))}
      </div>
    </div>
  );
};