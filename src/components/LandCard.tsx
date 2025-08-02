import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { LandListing } from '../types';

interface LandCardProps {
  listing: LandListing;
  onShare?: (listing: LandListing) => void;
}

export const LandCard: React.FC<LandCardProps> = ({ listing, onShare }) => {
  const handleMessage = () => {
    if (onShare) {
      onShare(listing);
    } else {
      // Default message functionality
      const text = `Hi! I'm interested in this property: ${listing.title} - ${listing.price}`;
      const whatsappUrl = "https://wa.me/260973014786";
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <Link to={`/listings/${listing.id}`} className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              listing.status === 'Available'
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
            }`}
          >
            {listing.status}
          </span>
        </div>
        {listing.premium && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              Premium
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {listing.title}
        </h3>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">{listing.location}</span>
        </div>
        {listing.description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {listing.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {listing.price}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation
              handleMessage();
            }}
            className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ChatBubbleLeftIcon className="w-4 h-4" />
            <span>Message Us</span>
          </button>
        </div>
      </div>
    </Link>
  );
};