import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PlusIcon, 
  ListBulletIcon, 
  StarIcon,
  ArrowLeftOnRectangleIcon,
  HomeIcon,
  MapIcon,
  Bars3Icon,
  XMarkIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  XCircleIcon,
  SparklesIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import { ThemeToggle } from '../components/ThemeToggle';
import { AddListingForm } from '../components/AddListingForm';
import { ListingsManager } from '../components/ListingsManager';
import { HeroSlidesManager } from '../components/HeroSlidesManager';
import { Toast } from '../components/Toast';
import { useListings } from '../hooks/useListings';
import { useHeroSlides } from '../hooks/useHeroSlides';
import { LandListing } from '../types';

type ActiveTab = 'dashboard' | 'add' | 'listings' | 'highlights' | 'hero';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });
  
  const { 
    listings, 
    updateListing, 
    addListing, 
    deleteListing,
    premiumListings,
    availableListings,
    soldListings
  } = useListings();

  const { 
    slides: heroSlides, 
    updateSlide, 
    addSlide, 
    deleteSlide 
  } = useHeroSlides();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  const handleAddListing = (listing: Omit<LandListing, 'id'>) => {
    addListing(listing);
    showToast('Listing added successfully!');
    setActiveTab('listings');
  };

  const handleUpdateListing = (id: number, updates: Partial<LandListing>) => {
    updateListing(id, updates);
    showToast('Listing updated successfully!');
  };

  const handleDeleteListing = (id: number) => {
    deleteListing(id);
    showToast('Listing deleted successfully!');
  };

  const handleUpdateSlide = (id: number, updates: Partial<any>) => {
    updateSlide(id, updates);
    showToast('Hero slide updated successfully!');
  };

  const handleAddSlide = (slide: any) => {
    addSlide(slide);
    showToast('Hero slide added successfully!');
  };

  const handleDeleteSlide = (id: number) => {
    deleteSlide(id);
    showToast('Hero slide deleted successfully!');
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'hero', label: 'Hero Slides', icon: PhotoIcon },
    { id: 'add', label: 'Add Land', icon: PlusIcon },
    { id: 'listings', label: 'Listings', icon: ListBulletIcon },
    { id: 'highlights', label: 'Highlights', icon: SparklesIcon },
  ];

  // Calculate statistics
  const totalListings = listings.length;
  const availableCount = availableListings.length;
  const soldCount = soldListings.length;
  const premiumCount = premiumListings.length;

  const stats = [
    {
      title: 'Total Listings',
      value: totalListings,
      icon: BuildingOfficeIcon,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'Available',
      value: availableCount,
      icon: CheckCircleIcon,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30'
    },
    {
      title: 'Sold',
      value: soldCount,
      icon: XCircleIcon,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30'
    },
    {
      title: 'Premium',
      value: premiumCount,
      icon: StarIcon,
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-100 dark:bg-amber-900/30'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <MapIcon className="w-8 h-8 text-emerald-600" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">Admin Panel</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as ActiveTab);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
              <div className="ml-4 lg:ml-0">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                  {activeTab === 'dashboard' ? 'Dashboard Overview' : activeTab.replace('-', ' ')}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Welcome, Admin
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Listings</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {listings.slice(0, 3).map((listing) => (
                      <div key={listing.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            listing.status === 'Available' ? 'bg-emerald-500' : 'bg-red-500'
                          }`} />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{listing.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{listing.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {listing.premium && (
                            <StarIcon className="w-4 h-4 text-amber-500" fill="currentColor" />
                          )}
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            listing.status === 'Available'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                          }`}>
                            {listing.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      onClick={() => setActiveTab('add')}
                      className="flex items-center justify-center p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                    >
                      <PlusIcon className="w-5 h-5 mr-2" />
                      Add New Land
                    </button>
                    <button
                      onClick={() => setActiveTab('listings')}
                      className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <ListBulletIcon className="w-5 h-5 mr-2" />
                      Manage Listings
                    </button>
                    <button
                      onClick={() => setActiveTab('highlights')}
                      className="flex items-center justify-center p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                    >
                      <SparklesIcon className="w-5 h-5 mr-2" />
                      Update Highlights
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'add' && (
            <AddListingForm
              onAdd={handleAddListing}
              onCancel={() => setActiveTab('dashboard')}
            />
          )}

          {activeTab === 'hero' && (
            <HeroSlidesManager
              slides={heroSlides}
              onUpdate={handleUpdateSlide}
              onAdd={handleAddSlide}
              onDelete={handleDeleteSlide}
            />
          )}

          {activeTab === 'listings' && (
            <ListingsManager
              listings={listings}
              onUpdate={handleUpdateListing}
              onDelete={handleDeleteListing}
            />
          )}

          {activeTab === 'highlights' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Premium Highlights</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {premiumCount} premium listings
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {premiumListings.map((listing) => (
                    <div key={listing.id} className="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="absolute top-2 right-2">
                        <StarIcon className="w-5 h-5 text-amber-500" fill="currentColor" />
                      </div>
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-medium text-gray-900 dark:text-white">{listing.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{listing.location}</p>
                      <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                        {listing.price}
                      </p>
                      <button
                        onClick={() => handleUpdateListing(listing.id, { premium: false })}
                        className="mt-3 w-full px-3 py-2 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                      >
                        Remove from Highlights
                      </button>
                    </div>
                  ))}
                </div>
                
                {premiumCount === 0 && (
                  <div className="text-center py-12">
                    <SparklesIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">No premium listings yet</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                      Go to Listings to mark properties as premium
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};