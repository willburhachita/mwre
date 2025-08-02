export interface LandListing {
  id: number;
  title: string;
  price: string;
  status: 'Available' | 'Sold';
  image: string;
  location: string;
  premium: boolean;
  description: string;
  size: string;
  propertyType: 'Residential' | 'Commercial' | 'Agricultural' | 'Industrial';
  features: string[];
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  additionalImages?: string[];
  documents: {
    title: string;
    description: string;
  }[];
  nearbyFacilities: string[];
  zoning: string;
  utilities: string[];
}

export interface User {
  id: number;
  email: string;
  role: 'admin';
}

export type Theme = 'light' | 'dark';

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  active: boolean;
}