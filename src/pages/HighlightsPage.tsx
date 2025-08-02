import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { LandCard } from '../components/LandCard';
import { useListings } from '../hooks/useListings';

export const HighlightsPage: React.FC = () => {
  const { premiumListings } = useListings();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <StarIcon className="w-8 h-8 text-amber-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Premium Highlights
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our exclusive collection of premium land plots in the most desirable locations. 
            These carefully selected properties offer exceptional value and prime positioning.
          </p>
        </div>

        {/* Premium Features */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Choose Our Premium Listings?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Prime Locations</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Strategically located in high-growth areas with excellent accessibility
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">High ROI Potential</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Carefully selected for their investment potential and future value appreciation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Verified & Ready</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                All documentation verified and ready for immediate transfer
              </p>
            </div>
          </div>
        </div>

        {/* Premium Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumListings.map((listing) => (
            <div key={listing.id} className="relative">
              <LandCard listing={listing} />
              <div className="absolute -top-2 -right-2">
                <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <StarIcon className="w-3 h-3 mr-1" />
                  PREMIUM
                </div>
              </div>
            </div>
          ))}
        </div>

        {premiumListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              No premium listings available at the moment.
            </p>
            <Link
              to="/listings"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Browse All Listings
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        )}

        {/* Call to Action */}
        {premiumListings.length > 0 && (
          <div className="text-center mt-12 bg-white dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Premium Land?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Contact our premium property specialists for exclusive deals and personalized service.
            </p>
            <button
              onClick={() => {
                const message = "Hi! I'm interested in your premium land listings. Can you provide more details?";
                const whatsappUrl = "https://wa.me/260973014786";
                window.open(whatsappUrl, '_blank');
              }}
              className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Contact Premium Specialist
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};