import { useEffect } from 'react';

const GoogleAnalytics = ({ measurementId }) => {
  useEffect(() => {
    if (!measurementId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', measurementId);

    // Make gtag available globally
    window.gtag = gtag;

    return () => {
      // Cleanup script when component unmounts
      const scripts = document.querySelectorAll(`script[src*="${measurementId}"]`);
      scripts.forEach(script => script.remove());
    };
  }, [measurementId]);

  return null;
};

export default GoogleAnalytics;