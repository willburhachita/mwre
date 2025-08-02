import React, { useState, useEffect } from 'react';
import { LandCard } from './LandCard';
import { LandListing } from '../types';

interface PremiumCarouselProps {
  listings: LandListing[];
}

export const PremiumCarousel: React.FC<PremiumCarouselProps> = ({ listings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (listings.length === 0) return;

    const interval = setInterval(() => {
      if (isAnimating) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [listings.length, isAnimating]);

  // Reset to beginning when we reach the end (seamless loop)
  useEffect(() => {
    if (currentIndex >= listings.length) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // Small delay to complete the transition
    }
  }, [currentIndex, listings.length]);

  if (listings.length === 0) return null;

  // Create duplicated array for seamless infinite scroll
  const duplicatedListings = [...listings, ...listings];

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex space-x-6 transition-transform duration-500 ease-linear"
        style={{
          transform: `translateX(-${currentIndex * 336}px)`, // 320px width + 16px gap
          width: `${duplicatedListings.length * 336}px`
        }}
        onMouseEnter={() => setIsAnimating(false)}
        onMouseLeave={() => setIsAnimating(true)}
      >
        {duplicatedListings.map((listing, index) => (
          <div key={`${listing.id}-${Math.floor(index / listings.length)}`} className="flex-shrink-0 w-80">
            <LandCard listing={listing} />
          </div>
        ))}
      </div>
      
      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {listings.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex % listings.length === index
                ? 'bg-amber-600'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-amber-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};