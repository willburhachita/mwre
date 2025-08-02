import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockListings } from '../data/mockData';
import { MapIcon, DocumentTextIcon, LightBulbIcon, HomeIcon } from '@heroicons/react/24/outline';

export const ListingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const listing = mockListings.find(l => l.id === Number(id));

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Listing Not Found
          </h1>
          <Link
            to="/listings"
            className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [listing.image, ...(listing.additionalImages || [])];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb - Full width but content constrained */}
      <div className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav>
            <ol className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <li><Link to="/" className="hover:text-emerald-600">Home</Link></li>
              <li>/</li>
              <li><Link to="/listings" className="hover:text-emerald-600">Listings</Link></li>
              <li>/</li>
              <li className="text-emerald-600">{listing.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          {/* Left Column - Sticky Images */}
          <div className="lg:w-[600px] xl:w-[800px] flex-shrink-0">
            <div className="sticky top-4">
              <div className="aspect-w-4 aspect-h-3 mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={allImages[activeImage]}
                  alt={listing.title}
                  className="object-cover w-full h-full"
                />
              </div>
              {allImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden ${
                        activeImage === index ? 'ring-2 ring-emerald-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 1}`}
                        className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {listing.title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">{listing.location}</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-3xl font-bold text-emerald-600">{listing.price}</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    listing.status === 'Available' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {listing.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {listing.description}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Size</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{listing.size}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Type</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{listing.propertyType}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Zoning</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{listing.zoning}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Documents</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{listing.documents.length} Available</p>
                </div>
              </div>

              {/* Call to Action */}
              {listing.status === 'Available' ? (
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-200 mb-2">
                    Interested in this property?
                  </h3>
                  <p className="text-emerald-700 dark:text-emerald-300 mb-4">
                    Contact us now to schedule a site visit or get more information about this prime location.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Contact Us
                    </Link>
                    <button
                      className="flex-1 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors px-6 py-3"
                      onClick={() => window.location.href = `tel:+260973014786`}
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🏡</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        This property has been sold
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        But don't worry, we have similar properties available!
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                      Similar location and size
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                      Comparable amenities and features
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                      Within your price range
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/listings"
                      className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Browse Available Properties
                    </Link>
                    <button
                      onClick={() => {
                        const whatsappUrl = "https://wa.me/260973014786";
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="flex-1 border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg text-center font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                    >
                      Get Property Recommendations
                    </button>
                  </div>
                </div>
              )}

              {/* Detailed Sections */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <HomeIcon className="w-5 h-5 mr-2 text-emerald-600" />
                    Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {listing.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <LightBulbIcon className="w-5 h-5 mr-2 text-emerald-600" />
                    Utilities & Amenities
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {listing.utilities.map((utility, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                        {utility}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <MapIcon className="w-5 h-5 mr-2 text-emerald-600" />
                    Nearby Facilities
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {listing.nearbyFacilities.map((facility, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <DocumentTextIcon className="w-5 h-5 mr-2 text-emerald-600" />
                    Available Documents
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {listing.documents.map((doc, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white">{doc.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{doc.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};