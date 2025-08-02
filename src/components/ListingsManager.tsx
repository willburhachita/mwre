import React, { useState } from 'react';
import { LandListing } from '../types';
import { useListingManagement } from '../hooks/useListingManagement';
import { ListingManagementForm } from './ListingManagementForm';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

export const ListingsManager: React.FC = () => {
  const { listings, addListing, updateListing, deleteListing } = useListingManagement();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingListing, setEditingListing] = useState<LandListing | undefined>();

  const handleAddNew = () => {
    setEditingListing(undefined);
    setIsFormOpen(true);
  };

  const handleEdit = (listing: LandListing) => {
    setEditingListing(listing);
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      deleteListing(id);
    }
  };

  const handleSubmit = (listingData: Omit<LandListing, 'id'>) => {
    if (editingListing) {
      updateListing(editingListing.id, listingData);
    } else {
      addListing(listingData);
    }
    setIsFormOpen(false);
    setEditingListing(undefined);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setEditingListing(undefined);
  };

  if (isFormOpen) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button
            onClick={handleCancel}
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ← Back to Listings
          </button>
        </div>
        <ListingManagementForm
          listing={editingListing}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Manage Listings
        </h2>
        <button
          onClick={handleAddNew}
          className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add New Listing
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Location
              </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Price
              </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Type
              </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {listings.map((listing) => (
                <tr key={listing.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {listing.title}
                        </div>
                        {listing.premium && (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                            Premium
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {listing.location}
                </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {listing.price}
                </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      listing.status === 'Available'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                    }`}
                  >
                    {listing.status}
                    </span>
                </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {listing.propertyType}
                </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(listing)}
                      className="text-emerald-600 hover:text-emerald-900 dark:hover:text-emerald-400 mr-3"
                    >
                      <PencilIcon className="w-5 h-5" />
                            </button>
                            <button
                      onClick={() => handleDelete(listing.id)}
                      className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
                    >
                      <TrashIcon className="w-5 h-5" />
                      </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    </div>
  );
};