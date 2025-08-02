import React, { useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className={`flex items-center p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' 
          ? 'bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800' 
          : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
      }`}>
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <CheckCircleIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <XCircleIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
          )}
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${
            type === 'success' 
              ? 'text-emerald-800 dark:text-emerald-200' 
              : 'text-red-800 dark:text-red-200'
          }`}>
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <button
            onClick={onClose}
            className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              type === 'success'
                ? 'text-emerald-500 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 focus:ring-emerald-600'
                : 'text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 focus:ring-red-600'
            }`}
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};