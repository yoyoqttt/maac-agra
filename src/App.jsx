import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // For smooth scrolling to top
import PageNot from '../src/pages/NotFoundPage';
// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactFormPopup from './components/ContactFormPopup/ContactFormPopup';
import ScrollToTopButton from './components/common/ScrollToTopButton/ScrollToTopButton';

// Page Components
import HomePage from '../src/pages/HomePage';

import Ddesign from '../src/pages/3Ddesign';

import  PlacementPage from '../src/pages/PlacementPage';
import Contact from '../src/pages/Contact';
// import CoursesPage from '../src/pages/CoursesPage';         // Main courses listing page
// import CourseDetailPage from '../src/pages/CourseDetailPage'; // For individual course details
import StudentLifePage from '../src/pages/StudentLifePage';   // Renamed from "Student Page" for clarity
import ShowcasePage from '../src/pages/ShowcasePage'; 
import Multimedia from '../src/pages/Multimedia';        // A dedicated page for all student work/showcase
// import NotFoundPage from './pages/NotFoundPage'; // You can create this later

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Helper component to scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use GSAP for smooth scroll to top
    gsap.to(window, { duration: 0.3, scrollTo: 0, ease: 'power2.inOut' });
    // Or simple instant scroll:
    // window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not render anything
}

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const appRef = useRef(null); // Ref for the main app container if needed for other global animations

  useEffect(() => {
    // Global GSAP fade-in animation for elements with the '.gsap-fade-in' class
    // This will apply to any element with this class across all pages when they become visible
    const fadeElements = gsap.utils.toArray('.gsap-fade-in');
    fadeElements.forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, y: 50 }, // Initial state: invisible and slightly down
        {
          opacity: 1,         // Final state: fully visible
          y: 0,               // Final state: original position
          duration: 0.8,
          delay: parseFloat(element.dataset.delay) || 0, // Read delay from data-delay attribute, default 0
          scrollTrigger: {
            trigger: element,
            start: "top 85%", // When the top of the element is 85% from the top of the viewport
            toggleActions: "play none none none", // Play animation once on enter
            once: true, // Ensures the animation only runs once
          }
        }
      );
    });

    // Example: Open popup after a delay on first visit (uncomment to enable)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('popupShown')) { // Show only once per session
        setIsPopupOpen(true);
        sessionStorage.setItem('popupShown', 'true');
      }
    }, 5000);

    // Cleanup function for when the App component unmounts
    return () => {
      // clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <Router>
      <div ref={appRef} className="app-wrapper"> {/* Optional wrapper */}
        
        {/* <ScrollToTopOnRouteChange /> Component to handle scrolling to top on navigation */}
        <Navbar  /><br/>
        {/* <main className="main-content"> Semantic main tag for page content */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/courses" element={<CoursesPage />} /> */}
            
            {/* <Route path="/courses/:courseId" element={<CourseDetailPage />} /> */}

            <Route path="/student-life" element={<StudentLifePage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/3Ddesign" element={<Ddesign />} />
                   <Route path="/multimedia" element={<Multimedia />} />
            <Route path="/place" element={< PlacementPage />} />
             <Route path="*" element={< PageNot/>} />

            {/*
              It's good practice to have a "Not Found" page for unmatched routes.
              Example: <Route path="*" element={<NotFoundPage />} />
            */}
          </Routes>
        {/* </main> */}
        <Footer />
        {/* {isPopupOpen && <ContactFormPopup onClose={togglePopup} />} */}
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;