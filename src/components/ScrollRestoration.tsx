import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollRestoration = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Get the previous path from session storage
    const prevPath = sessionStorage.getItem('currentPath');
    const currentPath = pathname;
    
    // Check if we're navigating from a listing detail page back to listings
    const isReturningFromDetail = prevPath?.startsWith('/listings/') && currentPath === '/listings';
    
    // Don't scroll to top if returning from detail to listings
    if (!isReturningFromDetail) {
      window.scrollTo(0, 0);
    }
    
    // Store the current path for next navigation
    sessionStorage.setItem('currentPath', currentPath);
  }, [pathname]);

  return null;
};