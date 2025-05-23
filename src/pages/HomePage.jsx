// src/pages/HomePage.jsx
import React from 'react'; // Not strictly necessary for functional components without state/lifecycle in modern React, but good practice.

// Import Section Components
import  HowItWorks from '../components/Howitwork/HowitWork';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';
// import PlacementPartners from '../components/PlacementPartners/PlacementPartners';
import CoursesHighlight from '../components/CoursesHighlight/CoursesHighlight';
import StudentShowcase from '../components/StudentShowcase/StudentShowcase'; // The one with filters & detailed header
import StudentWorks from '../components/StudentWorks/StudentWorks';     // The horizontal scroll gallery
import Testimonials from '../components/Testimonials/Testimonials';
import InfoBanner from '../components/InfoBanner/InfoBanner';

// You can also import the useFadeInScroll hook if you want more granular control
// over individual section animations rather than relying solely on the global .gsap-fade-in
// import { useFadeInScroll } from '../hooks/useGsapAnimations';

const HomePage = () => {
  // Example of using the custom hook for a specific section if desired:
  // const heroRef = useFadeInScroll({ y: 0, duration: 1.2, delay: 0.1 });
  // const aboutSectionRef = useFadeInScroll({ y: 30, duration: 0.7, delay: 0.2 });

  return (
    <>
      {/* Hero Section - Often has its own distinct entrance animation */}
     
      <div className="gsap-fade-in" data-delay="0.1">
        <Hero />
      </div>
 

      <div className="gsap-fade-in" data-delay="0"> {/* No delay for the first section after hero */}
        <AboutSection />
      </div>

      <div className="gsap-fade-in" data-delay="0.1">
        <CoursesHighlight />
      </div>

      

      {/* Student Works (Horizontal Gallery) - This might have its own internal animations or a wrapper for fade-in */}
      {/* If StudentWorks component itself handles its entrance, you might not need gsap-fade-in wrapper here */}
      <div className="gsap-fade-in" data-delay="0.1">
        <StudentWorks />
      </div>
 <div className="gsap-fade-in" data-delay="0.1">
        <InfoBanner />
      </div>

      {/* Student Showcase (Filtered Gallery) */}
      {/* The StudentShowcase component has a more complex header; ensure its internal elements are animated if needed,
          or wrap specific parts of it. The main wrapper here will fade in the whole block. */}
      <div className="gsap-fade-in" data-delay="0.1">
        < HowItWorks/>
      </div>

      <div className="gsap-fade-in" data-delay="0.1">
        <Testimonials />
      </div>

      {/* InfoBanner can also use the global fade-in */}
     
    </>
  );
};

export default HomePage;