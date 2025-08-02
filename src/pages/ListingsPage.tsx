import React, { useState } from 'react';
import { LandCard } from '../components/LandCard';
import { useListings } from '../hooks/useListings';
import { LandListing } from '../types';
import { MapPinIcon, BuildingOfficeIcon, HomeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

type FilterType = 'All' | 'Available' | 'Sold';

export const ListingsPage: React.FC = () => {
  const { listings } = useListings();
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredListings = listings.filter(listing => {
    if (filter === 'All') return true;
    return listing.status === filter;
  });

  const handleShare = (listing: LandListing) => {
    const text = `Check out this land on Munda Wanga Real Estate: ${listing.title} - ${listing.price}`;
    const whatsappUrl = "https://wa.me/260973014786";
    window.open(whatsappUrl, '_blank');
  };

  // Calculate statistics
  const totalValue = listings
    .filter(l => l.status === 'Available')
    .reduce((sum, listing) => sum + parseInt(listing.price.replace(/[^0-9]/g, '')), 0);
  const averagePrice = totalValue / listings.filter(l => l.status === 'Available').length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Your Perfect Plot
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our curated collection of premium land opportunities. From residential plots to commercial spaces, 
            find the perfect foundation for your future.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-2">
              <HomeIcon className="w-6 h-6 text-emerald-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Listings</h3>
            </div>
            <p className="text-3xl font-bold text-emerald-600">{listings.length}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Properties available</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-2">
              <BuildingOfficeIcon className="w-6 h-6 text-emerald-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Available</h3>
            </div>
            <p className="text-3xl font-bold text-emerald-600">
              {listings.filter(l => l.status === 'Available').length}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ready for purchase</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-2">
              <MapPinIcon className="w-6 h-6 text-emerald-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Locations</h3>
            </div>
            <p className="text-3xl font-bold text-emerald-600">
              {new Set(listings.map(l => l.location.split(',')[0])).size}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Different areas</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-2">
              <ChartBarIcon className="w-6 h-6 text-emerald-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Avg. Price</h3>
            </div>
            <p className="text-3xl font-bold text-emerald-600">
              K{Math.round(averagePrice).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Average listing price</p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Available Properties
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Filter through our collection to find your ideal investment
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['All', 'Available', 'Sold'] as FilterType[]).map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    filter === filterOption
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                  }`}
                >
                  {filterOption}
                  <span className="ml-2 text-sm opacity-75">
                    ({filterOption === 'All' 
                      ? listings.length 
                      : listings.filter(l => l.status === filterOption).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <LandCard 
              key={listing.id} 
              listing={listing} 
              onShare={handleShare}
            />
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <MapPinIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
              No listings found for the selected filter.
            </p>
            <p className="text-gray-400 dark:text-gray-500 mt-2">
              Try adjusting your filter or check back later for new properties.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Let us help you find the perfect property. Our team of experts is ready to understand your needs 
            and match you with the ideal land investment opportunity.
          </p>
          <button
            onClick={() => {
              const whatsappUrl = "https://wa.me/260973014786";
              window.open(whatsappUrl, '_blank');
            }}
            className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Contact Our Property Experts
          </button>
        </div>
      </div>
    </div>
  );
};