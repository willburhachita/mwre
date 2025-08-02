import { useState, useEffect } from 'react';
import { LandListing } from '../types';
import { mockListings } from '../data/mockData';

export const useListings = () => {
  const [listings, setListings] = useState<LandListing[]>(mockListings);

  const updateListing = (id: number, updates: Partial<LandListing>) => {
    const updated = listings.map(listing => 
      listing.id === id ? { ...listing, ...updates } : listing
    );
    setListings(updated);
  };

  const addListing = (listing: Omit<LandListing, 'id'>) => {
    const newListing = { ...listing, id: Date.now() };
    const updated = [...listings, newListing];
    setListings(updated);
  };

  const deleteListing = (id: number) => {
    const updated = listings.filter(listing => listing.id !== id);
    setListings(updated);
  };

  return {
    listings,
    updateListing,
    addListing,
    deleteListing,
    premiumListings: listings.filter(l => l.premium),
    availableListings: listings.filter(l => l.status === 'Available'),
    soldListings: listings.filter(l => l.status === 'Sold')
  };
};