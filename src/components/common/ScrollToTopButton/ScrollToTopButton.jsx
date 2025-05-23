// src/components/common/ScrollToTopButton/ScrollToTopButton.jsx
import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'; // npm install react-icons
import styles from './ScrollToTopButton.module.css';
import gsap from 'gsap';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Use GSAP for smooth scrolling
    gsap.to(window, {
      duration: 0.5,
      scrollTo: 0,
      ease: 'power3.inOut'
    });
  };

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp size={30} />
    </button>
  );
};

export default ScrollToTopButton;