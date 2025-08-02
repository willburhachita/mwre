import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { LandCard } from '../components/LandCard';
import { PremiumCarousel } from '../components/PremiumCarousel';
import { HeroCarousel } from '../components/HeroCarousel';
import { useListings } from '../hooks/useListings';
import { useHeroSlides } from '../hooks/useHeroSlides';

export const HomePage: React.FC = () => {
  const { premiumListings, availableListings } = useListings();
  const { activeSlides } = useHeroSlides();

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in your land listings. Can you help me find the perfect plot?";
    const whatsappUrl = "https://wa.me/260973014786";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroCarousel slides={activeSlides} />

      {/* Available Land Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Available Land
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our current selection of available plots and find your ideal investment opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {availableListings.slice(0, 6).map((listing) => (
              <LandCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/listings"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View All Listings
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Highlights Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Premium Highlights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our exclusive premium land offerings in prime locations.
            </p>
          </div>

          <PremiumCarousel listings={premiumListings} />

          <div className="text-center mt-8">
            <Link
              to="/highlights"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              View All Highlights
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Find Your Land?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get in touch with our expert team to discuss your land requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Visit Our Office</h3>
              <p className="text-gray-600 dark:text-gray-400">Lusaka, Zambia</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                View on Google Maps
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">WhatsApp Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Quick responses guaranteed</p>
              <button
                onClick={handleWhatsAppContact}
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Start Chat
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:underline">Facebook</a>
                <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:underline">Twitter</a>
                <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:underline">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};