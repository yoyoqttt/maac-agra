// src/pages/HomePage.jsx
import React from 'react'; // Not strictly necessary for functional components without state/lifecycle in modern React, but good practice.

// Import Section Components
 
import StudentShowcase from '../components/StudentShowcase/StudentShowcase'; // The one with filters & detailed header
 
import InfoBanner from '../components/InfoBanner/InfoBanner';

// You can also import the useFadeInScroll hook if you want more granular control
// over individual section animations rather than relying solely on the global .gsap-fade-in
// import { useFadeInScroll } from '../hooks/useGsapAnimations';

const ShowcasePage = () => {
  // Example of using the custom hook for a specific section if desired:
  // const heroRef = useFadeInScroll({ y: 0, duration: 1.2, delay: 0.1 });
  // const aboutSectionRef = useFadeInScroll({ y: 30, duration: 0.7, delay: 0.2 });

  return (
    <>
     

      

       
 
    
        <StudentShowcase />
       

      {/* InfoBanner can also use the global fade-in */}
      <div className="gsap-fade-in" data-delay="0.1">
        <InfoBanner />
      </div>
    </>
  );
};

export default ShowcasePage;// src/pages/HomePage.jsx
   