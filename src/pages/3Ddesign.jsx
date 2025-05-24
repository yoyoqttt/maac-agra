// src/pages/HomePage.jsx
import React from 'react'; // Not strictly necessary for functional components without state/lifecycle in modern React, but good practice.

// Import Section Components
 
import DAnimationBanner from '../components/Ddesign/DAnimationBanner/3DAnimationBanner';

import AboutUs from '../components/Ddesign/AboutUs/AboutUs'; 

import OurExpertise  from '../components/Ddesign/OurExpertise/OurExpertise';

import  DAFMCard from '../components/Ddesign/DAFMCard/DAFMCard';

import D3DCard   from '../components/Ddesign/D3DCard/D3DCard';

import ADDEDGECard from '../components/Ddesign/ace/122';

import FeaturedCoursesBanner from '../components/Ddesign/FeaturedCoursesBanner/FeaturedCoursesBanner';// The one with filters & detailed header
 
import InfoBanner from '../components/InfoBanner/InfoBanner';

// You can also import the useFadeInScroll hook if you want more granular control
// over individual section animations rather than relying solely on the global .gsap-fade-in
// import { useFadeInScroll } from '../hooks/useGsapAnimations';

const Ddesign  = () => {
  // Example of using the custom hook for a specific section if desired:
  // const heroRef = useFadeInScroll({ y: 0, duration: 1.2, delay: 0.1 });
  // const aboutSectionRef = useFadeInScroll({ y: 30, duration: 0.7, delay: 0.2 });

  return (
    <>
     <DAnimationBanner/>

       <FeaturedCoursesBanner />
      <OurExpertise />
      <AboutUs />

        <DAFMCard />
      <D3DCard />
      <ADDEDGECard />
 
   
       
       

      {/* InfoBanner can also use the global fade-in */}
      <div className="gsap-fade-in" data-delay="0.1">
        <InfoBanner />
      </div>
    </>
  );
};

export default Ddesign ;// src/pages/HomePage.jsx
   