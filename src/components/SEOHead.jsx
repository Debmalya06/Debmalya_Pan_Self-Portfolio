import { useEffect } from 'react';

const SEOHead = ({ 
  title = "Debmalya Pan - Java Full Stack Developer | Portfolio",
  description = "Passionate Java Full Stack Developer with expertise in Spring Boot, React, and IoT projects. Explore my portfolio featuring innovative web applications and technical solutions.",
  keywords = "Debmalya Pan, Java Developer, Full Stack Developer, Spring Boot, React, Portfolio, Web Developer, Software Engineer, IoT Developer",
  image = "https://debmalyapan.me/img/debmalya.jpg",
  url = "https://debmalyapan.me"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
    
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

export default SEOHead;