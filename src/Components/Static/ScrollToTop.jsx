import React, { useEffect, useState } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // show after 300px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-all duration-300 z-100 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ChevronUp  size={20} />
      </button>
    )
  );
};

export default ScrollToTop;
