import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  const closeMobileMenu = () => setMobileMenuOpen(false);
  
  return (
    <nav className={`${
      isHome 
        ? 'absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-white from-40% via-white/95 via-70% to-transparent dark:from-gray-900 dark:from-40% dark:via-gray-900/95 dark:via-70% dark:to-transparent border-none backdrop-blur-[2px]'
        : 'relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Munda Wanga Real Estate
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {!isHome && (
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Home
              </Link>
            )}
            <Link
              to="/listings"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/listings') 
                  ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              Available Land
            </Link>
            <Link
              to="/highlights"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/highlights') 
                  ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              Highlights
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${
            isHome 
              ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
              : 'bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {!isHome && (
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Home
                </Link>
              )}
              <Link
                to="/listings"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/listings') 
                    ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Available Land
              </Link>
              <Link
                to="/highlights"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/highlights') 
                    ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Highlights
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Contact
              </Link>
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700 mt-2 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};