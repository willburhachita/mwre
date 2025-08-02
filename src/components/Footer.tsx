import React from 'react';
import { MapIcon } from '@heroicons/react/24/outline';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold">Munda Wanga Real Estate</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect land for your dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="/listings" className="text-gray-400 hover:text-emerald-400 transition-colors">Available Land</a></li>
              <li><a href="/highlights" className="text-gray-400 hover:text-emerald-400 transition-colors">Highlights</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="/admin/login" className="text-gray-400 hover:text-emerald-400 transition-colors text-xs">Admin Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Lusaka, Zambia</li>
              <li>📞 +260973014786</li>
              <li>✉️ mundawanga.ltd@gmail.com</li>
              <li>
                <a 
                  href="https://wa.me/260973014786" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};