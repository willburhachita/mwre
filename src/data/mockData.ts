import { LandListing, HeroSlide } from '../types';
import { PROPERTY_IMAGE_1, PROPERTY_IMAGE_2 } from '../constants/images';

export const mockListings: LandListing[] = [
  // Premium/Highlight Listings (4)
  {
    id: 1,
    title: "Luxury Plot in Kabulonga",
    price: "K950,000",
    status: "Available",
    image: PROPERTY_IMAGE_1,
    location: "Kabulonga, Lusaka",
    premium: true,
    description: "Exclusive residential plot in Lusaka's most prestigious neighborhood. Perfect for luxury villa development with stunning views and premium amenities.",
    size: "50m x 50m (2,500 square meters)",
    propertyType: "Residential",
    features: [
      "Premium location",
      "Elevated position",
      "Panoramic views",
      "Private access",
      "Established neighborhood"
    ],
    amenities: [
      "24/7 security",
      "Underground utilities",
      "Fiber optic ready",
      "Private road access",
      "Landscaping ready"
    ],
    coordinates: {
      lat: -15.4461,
      lng: 28.3474
    },
    additionalImages: [
      PROPERTY_IMAGE_2,
      PROPERTY_IMAGE_1,
      PROPERTY_IMAGE_2
    ],
    documents: [
      {
        title: "Premium Title Deed",
        description: "Freehold title available"
      },
      {
        title: "Architectural Guidelines",
        description: "Exclusive development standards"
      }
    ],
    nearbyFacilities: [
      "International schools",
      "Shopping malls",
      "Diplomatic area",
      "Golf course",
      "Premium restaurants"
    ],
    zoning: "Residential - Low Density Premium",
    utilities: [
      "Premium power connection",
      "Borehole water system",
      "High-speed internet",
      "Smart home ready",
      "Solar system provision"
    ]
  },
  {
    id: 2,
    title: "Prime Commercial Complex Site",
    price: "K2,500,000",
    status: "Available",
    image: PROPERTY_IMAGE_2,
    location: "Cairo Road, CBD, Lusaka",
    premium: true,
    description: "Premium commercial development site in the heart of Lusaka's CBD. Ideal for mixed-use development including retail, offices, and premium apartments.",
    size: "2,000 square meters",
    propertyType: "Commercial",
    features: [
      "Prime CBD location",
      "High foot traffic",
      "Corner plot",
      "Multiple access points",
      "Development approved"
    ],
    amenities: [
      "Major road frontage",
      "Public transport hub",
      "Business district",
      "Tourist area",
      "Banking district"
    ],
    coordinates: {
      lat: -15.4167,
      lng: 28.2833
    },
    additionalImages: [
      PROPERTY_IMAGE_1,
      PROPERTY_IMAGE_2
    ],
    documents: [
      {
        title: "Commercial Title",
        description: "99-year premium lease"
      },
      {
        title: "Development Approval",
        description: "Pre-approved for 15-story development"
      }
    ],
    nearbyFacilities: [
      "Financial district",
      "Government offices",
      "Premium hotels",
      "Shopping centers",
      "International organizations"
    ],
    zoning: "Commercial - CBD Premium",
    utilities: [
      "High-capacity power",
      "Commercial water",
      "Fiber optic hub",
      "District cooling ready",
      "Smart building ready"
    ]
  },
  {
    id: 3,
    title: "Riverside Estate Plot",
    price: "K850,000",
    status: "Available",
    image: PROPERTY_IMAGE_1,
    location: "Leopards Hill, Lusaka",
    premium: true,
    description: "Premium riverside plot in exclusive Leopards Hill area. Natural beauty meets luxury living with stunning views and private access to nature reserve.",
    size: "1 hectare",
    propertyType: "Residential",
    features: [
      "Riverside frontage",
      "Natural forest",
      "Private access",
      "Wildlife corridor",
      "Elevated views"
    ],
    amenities: [
      "Private security",
      "Nature trails",
      "Exclusive clubhouse",
      "Tennis courts",
      "Equestrian facilities"
    ],
    coordinates: {
      lat: -15.3289,
      lng: 28.4521
    },
    additionalImages: [
      PROPERTY_IMAGE_2,
      PROPERTY_IMAGE_1
    ],
    documents: [
      {
        title: "Premium Title",
        description: "Freehold with conservation covenant"
      },
      {
        title: "Environmental Report",
        description: "Protected species and habitats"
      }
    ],
    nearbyFacilities: [
      "Private school",
      "Country club",
      "Nature reserve",
      "Equestrian center",
      "Helicopter pad"
    ],
    zoning: "Residential Estate",
    utilities: [
      "Private water system",
      "Solar grid",
      "Eco-friendly sewage",
      "Natural gas",
      "Satellite internet"
    ]
  },
  {
    id: 4,
    title: "Smart City Development Plot",
    price: "K1,800,000",
    status: "Available",
    image: PROPERTY_IMAGE_2,
    location: "Roma, Lusaka",
    premium: true,
    description: "Premium development plot in Lusaka's upcoming smart city zone. Ready for innovative residential or mixed-use development.",
    size: "1.5 hectares",
    propertyType: "Mixed Use",
    features: [
      "Smart city zone",
      "Innovation hub",
      "Green building ready",
      "Tech corridor",
      "Future proof"
    ],
    amenities: [
      "Smart grid ready",
      "IoT infrastructure",
      "Green spaces",
      "Innovation center",
      "Digital hub"
    ],
    coordinates: {
      lat: -15.4123,
      lng: 28.2891
    },
    additionalImages: [
      PROPERTY_IMAGE_1,
      PROPERTY_IMAGE_2
    ],
    documents: [
      {
        title: "Smart City Title",
        description: "Special economic zone benefits"
      },
      {
        title: "Tech Hub Status",
        description: "Innovation zone certification"
      }
    ],
    nearbyFacilities: [
      "Tech park",
      "University campus",
      "Research centers",
      "Innovation hub",
      "Digital academy"
    ],
    zoning: "Smart City Zone",
    utilities: [
      "Smart grid",
      "5G ready",
      "Digital infrastructure",
      "Green energy",
      "Smart water systems"
    ]
  },
  // Regular Available Listings (10)
  {
    id: 5,
    title: "Residential Plot in Meanwood",
    price: "K180,000",
    status: "Available",
    image: PROPERTY_IMAGE_1,
    location: "Meanwood, Lusaka",
    premium: false,
    description: "Affordable residential plot in growing Meanwood area. Perfect for family home.",
    size: "30m x 40m",
    propertyType: "Residential",
    features: ["Level ground", "Ready for development", "Good access"],
    amenities: ["Basic utilities", "Road access", "Security"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Ready for transfer" }],
    nearbyFacilities: ["Schools", "Shops", "Transport"],
    zoning: "Residential",
    utilities: ["Water", "Electricity", "Roads"]
  },
  {
    id: 6,
    title: "Garden Plot in Chilanga",
    price: "K150,000",
    status: "Available",
    image: PROPERTY_IMAGE_2,
    location: "Chilanga, Lusaka",
    premium: false,
    description: "Garden residential plot with mountain views.",
    size: "40m x 30m",
    propertyType: "Residential",
    features: ["Garden area", "Mountain view", "Quiet location"],
    amenities: ["Basic utilities", "Garden space"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Title Deed", description: "Clean title" }],
    nearbyFacilities: ["Garden center", "Schools", "Markets"],
    zoning: "Residential",
    utilities: ["Water", "Electricity"]
  },
  {
    id: 7,
    title: "Small Business Plot",
    price: "K220,000",
    status: "Available",
    image: PROPERTY_IMAGE_1,
    location: "Kalingalinga, Lusaka",
    premium: false,
    description: "Perfect for small business development.",
    size: "20m x 30m",
    propertyType: "Commercial",
    features: ["Business area", "High traffic", "Corner plot"],
    amenities: ["Commercial utilities", "Parking space"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Business Title", description: "Commercial use approved" }],
    nearbyFacilities: ["Market", "Bus stop", "Shops"],
    zoning: "Commercial",
    utilities: ["3-phase power", "Water connection"]
  },
  {
    id: 8,
    title: "Family Plot in Libala",
    price: "K195,000",
    status: "Available",
    image: PROPERTY_IMAGE_2,
    location: "Libala, Lusaka",
    premium: false,
    description: "Family-sized plot in established neighborhood.",
    size: "35m x 40m",
    propertyType: "Residential",
    features: ["Established area", "Schools nearby", "Safe neighborhood"],
    amenities: ["Community facilities", "Parks nearby"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Title Deed", description: "Family residential" }],
    nearbyFacilities: ["Schools", "Parks", "Shops"],
    zoning: "Residential",
    utilities: ["Full utilities", "Street lighting"]
  },
  {
    id: 9,
    title: "Investment Plot Chelston",
    price: "K165,000",
    status: "Available",
    image: PROPERTY_IMAGE_1,
    location: "Chelston, Lusaka",
    premium: false,
    description: "Investment opportunity in growing area.",
    size: "30m x 35m",
    propertyType: "Residential",
    features: ["Growing area", "Investment potential", "Good returns"],
    amenities: ["Basic infrastructure", "Development planned"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Investment ready" }],
    nearbyFacilities: ["Growing community", "New developments"],
    zoning: "Residential",
    utilities: ["Basic utilities", "Future developments"]
  },
  {
    id: 10,
    title: "Shop Plot in Matero",
    price: "K145,000",
    status: "Available",
    image: PROPERTY_IMAGE_2,
    location: "Matero, Lusaka",
    premium: false,
    description: "Perfect for small shop or business.",
    size: "20m x 25m",
    propertyType: "Commercial",
    features: ["Business location", "High foot traffic"],
    amenities: ["Commercial area", "Transport hub"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Commercial Title", description: "Ready for business" }],
    nearbyFacilities: ["Market", "Transport", "Residential areas"],
    zoning: "Commercial",
    utilities: ["Business utilities", "Security"]
  },
  {
    id: 11,
    title: "Garden Home Plot",
    price: "K175,000",
    status: "Available",
    image: PROPERTY_IMAGE_1,
    location: "Garden, Lusaka",
    premium: false,
    description: "Peaceful plot in Garden area.",
    size: "35m x 35m",
    propertyType: "Residential",
    features: ["Quiet area", "Garden potential", "Family friendly"],
    amenities: ["Community facilities", "Green spaces"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Garden area plot" }],
    nearbyFacilities: ["Parks", "Schools", "Community center"],
    zoning: "Residential",
    utilities: ["Full utilities", "Garden water"]
  },
  {
    id: 12,
    title: "Startup Office Plot",
    price: "K235,000",
    status: "Available",
    image: PROPERTY_IMAGE_2,
    location: "Longacres, Lusaka",
    premium: false,
    description: "Perfect for startup office development.",
    size: "25m x 30m",
    propertyType: "Commercial",
    features: ["Office zone", "Modern area", "Business hub"],
    amenities: ["Business facilities", "Parking"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Office Title", description: "Business approved" }],
    nearbyFacilities: ["Business center", "Banks", "Restaurants"],
    zoning: "Commercial",
    utilities: ["Office ready", "High-speed internet"]
  },
  {
    id: 13,
    title: "Family Plot Olympia",
    price: "K185,000",
    status: "Available",
    image: PROPERTY_IMAGE_1,
    location: "Olympia, Lusaka",
    premium: false,
    description: "Family plot in established Olympia.",
    size: "40m x 35m",
    propertyType: "Residential",
    features: ["Family area", "Established", "Safe"],
    amenities: ["Community", "Parks"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Family plot" }],
    nearbyFacilities: ["Schools", "Parks", "Shopping"],
    zoning: "Residential",
    utilities: ["Full utilities", "Security"]
  },
  {
    id: 14,
    title: "Mini Mall Plot",
    price: "K255,000",
    status: "Available",
    image: PROPERTY_IMAGE_2,
    location: "Northmead, Lusaka",
    premium: false,
    description: "Ideal for mini mall development.",
    size: "45m x 50m",
    propertyType: "Commercial",
    features: ["Commercial zone", "High traffic", "Development ready"],
    amenities: ["Business hub", "Transport access"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Mall Title", description: "Commercial approved" }],
    nearbyFacilities: ["Shopping area", "Transport", "Residential"],
    zoning: "Commercial",
    utilities: ["Commercial utilities", "Parking space"]
  },
  // Sold Listings (10)
  {
    id: 15,
    title: "Sold Villa Plot",
    price: "K190,000",
    status: "Sold",
    image: PROPERTY_IMAGE_1,
    location: "Woodlands, Lusaka",
    premium: false,
    description: "Luxury villa plot - SOLD.",
    size: "45m x 40m",
    propertyType: "Residential",
    features: ["Premium area", "Exclusive", "Private"],
    amenities: ["Luxury facilities", "Security"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Exclusive amenities", "Premium schools"],
    zoning: "Residential",
    utilities: ["Full premium utilities"]
  },
  {
    id: 16,
    title: "Sold Office Plot",
    price: "K280,000",
    status: "Sold",
    image: PROPERTY_IMAGE_2,
    location: "Rhodes Park, Lusaka",
    premium: false,
    description: "Prime office plot - SOLD.",
    size: "30m x 40m",
    propertyType: "Commercial",
    features: ["Business district", "Modern", "Access"],
    amenities: ["Office facilities", "Parking"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Business center", "Banks"],
    zoning: "Commercial",
    utilities: ["Business utilities"]
  },
  {
    id: 17,
    title: "Sold Family Home Plot",
    price: "K165,000",
    status: "Sold",
    image: PROPERTY_IMAGE_1,
    location: "Kamwala, Lusaka",
    premium: false,
    description: "Family plot - SOLD.",
    size: "35m x 30m",
    propertyType: "Residential",
    features: ["Family area", "Schools nearby"],
    amenities: ["Community facilities"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Schools", "Shopping"],
    zoning: "Residential",
    utilities: ["Basic utilities"]
  },
  {
    id: 18,
    title: "Sold Shop Space",
    price: "K195,000",
    status: "Sold",
    image: PROPERTY_IMAGE_2,
    location: "Town Area, Lusaka",
    premium: false,
    description: "Commercial plot - SOLD.",
    size: "25m x 30m",
    propertyType: "Commercial",
    features: ["Business area", "Central"],
    amenities: ["Commercial facilities"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Shopping", "Transport"],
    zoning: "Commercial",
    utilities: ["Commercial utilities"]
  },
  {
    id: 19,
    title: "Sold Garden Plot",
    price: "K175,000",
    status: "Sold",
    image: PROPERTY_IMAGE_1,
    location: "Avondale, Lusaka",
    premium: false,
    description: "Garden area plot - SOLD.",
    size: "40m x 35m",
    propertyType: "Residential",
    features: ["Garden space", "Quiet"],
    amenities: ["Basic facilities"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Gardens", "Parks"],
    zoning: "Residential",
    utilities: ["Garden utilities"]
  },
  {
    id: 20,
    title: "Sold Business Plot",
    price: "K225,000",
    status: "Sold",
    image: PROPERTY_IMAGE_2,
    location: "Industrial Area, Lusaka",
    premium: false,
    description: "Business plot - SOLD.",
    size: "35m x 40m",
    propertyType: "Commercial",
    features: ["Industrial zone", "Access"],
    amenities: ["Business facilities"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Industrial area", "Transport"],
    zoning: "Commercial",
    utilities: ["Industrial utilities"]
  },
  {
    id: 21,
    title: "Sold Residential Plot",
    price: "K168,000",
    status: "Sold",
    image: PROPERTY_IMAGE_1,
    location: "Kabwata, Lusaka",
    premium: false,
    description: "Residential plot - SOLD.",
    size: "30m x 35m",
    propertyType: "Residential",
    features: ["Residential area", "Community"],
    amenities: ["Local facilities"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Community center", "Schools"],
    zoning: "Residential",
    utilities: ["Basic utilities"]
  },
  {
    id: 22,
    title: "Sold Corner Plot",
    price: "K215,000",
    status: "Sold",
    image: PROPERTY_IMAGE_2,
    location: "Northmead, Lusaka",
    premium: false,
    description: "Corner business plot - SOLD.",
    size: "25m x 30m",
    propertyType: "Commercial",
    features: ["Corner location", "Business area"],
    amenities: ["Commercial facilities"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Business district", "Transport"],
    zoning: "Commercial",
    utilities: ["Business utilities"]
  },
  {
    id: 23,
    title: "Sold Family Plot",
    price: "K182,000",
    status: "Sold",
    image: PROPERTY_IMAGE_1,
    location: "Woodlands, Lusaka",
    premium: false,
    description: "Family home plot - SOLD.",
    size: "35m x 40m",
    propertyType: "Residential",
    features: ["Family area", "Schools"],
    amenities: ["Community facilities"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_2],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Schools", "Parks"],
    zoning: "Residential",
    utilities: ["Full utilities"]
  },
  {
    id: 24,
    title: "Sold Office Space",
    price: "K245,000",
    status: "Sold",
    image: PROPERTY_IMAGE_2,
    location: "Cairo Road, Lusaka",
    premium: false,
    description: "Office plot - SOLD.",
    size: "30m x 35m",
    propertyType: "Commercial",
    features: ["Business district", "Central"],
    amenities: ["Office facilities"],
    coordinates: { lat: -15.3789, lng: 28.3012 },
    additionalImages: [PROPERTY_IMAGE_1],
    documents: [{ title: "Title Deed", description: "Transferred" }],
    nearbyFacilities: ["Business center", "Banks"],
    zoning: "Commercial",
    utilities: ["Office utilities"]
  }
];

export const mockHeroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Find Your Perfect Land With Us",
    subtitle: "Discover prime bare land opportunities across Zambia. From residential plots to agricultural land, we help you find the perfect piece of earth for your dreams.",
    image: PROPERTY_IMAGE_1,
    active: true
  },
  {
    id: 2,
    title: "Premium Agricultural Land",
    subtitle: "Fertile farmland perfect for cultivation and agricultural development. Start your farming journey with our carefully selected plots.",
    image: PROPERTY_IMAGE_2,
    active: true
  },
  {
    id: 3,
    title: "Residential Development Plots",
    subtitle: "Prime residential land in growing communities. Build your dream home or develop multiple properties in strategic locations.",
    image: PROPERTY_IMAGE_1,
    active: true
  },
  {
    id: 4,
    title: "Commercial Investment Opportunities",
    subtitle: "Strategic commercial plots in high-traffic areas. Perfect for retail, office buildings, or mixed-use developments.",
    image: PROPERTY_IMAGE_2,
    active: true
  },
  {
    id: 5,
    title: "Industrial Development Land",
    subtitle: "Strategic locations for industrial development with excellent infrastructure and transport links.",
    image: PROPERTY_IMAGE_1,
    active: true
  }
];