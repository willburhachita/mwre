import { useState } from 'react';
import { LandListing } from '../types';
import { mockListings } from '../data/mockData';

export const useListingManagement = () => {
  const [listings, setListings] = useState<LandListing[]>(mockListings);

  const addListing = (listingData: Omit<LandListing, 'id'>) => {
    const newListing: LandListing = {
      ...listingData,
      id: Math.max(...listings.map(l => l.id), 0) + 1
    };
    setListings(prev => [...prev, newListing]);
    return newListing;
  };

  const updateListing = (id: number, listingData: Partial<LandListing>) => {
    setListings(prev =>
      prev.map(listing =>
        listing.id === id ? { ...listing, ...listingData } : listing
      )
    );
  };

  const deleteListing = (id: number) => {
    setListings(prev => prev.filter(listing => listing.id !== id));
  };

  const getListing = (id: number) => {
    return listings.find(listing => listing.id === id);
  };

  return {
    listings,
    addListing,
    updateListing,
    deleteListing,
    getListing
  };
};