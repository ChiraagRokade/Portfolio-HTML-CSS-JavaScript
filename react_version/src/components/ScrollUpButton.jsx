import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      // removing smooth scroll on click isn't needed with pure JS scroll
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 md:right-8 bottom-6 md:bottom-8 h-12 w-12 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center shadow-lg shadow-red-600/10 cursor-pointer z-[999] transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-6 pointer-events-none scale-75'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="animate-bounce" />
    </button>
  );
}
