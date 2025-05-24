// src/pages/HomePage.jsx
import React from 'react'; // Not strictly necessary for functional components without state/lifecycle in modern React, but good practice.

// Import Section Components
  
import Testimonials from '../components/Testimonials/Testimonials';
import  PlacementSuccessSection from '../components/placement/PlacementSuccessSection/PlacementSuccessSection';
import InfoBanner from '../components/InfoBanner/InfoBanner';
import WhyChooseSection from '../components/placement/WhyChooseSection/WhyChooseSection';

import BestPlacementsBanner from '../components/placement/BestPlacementsBanner/BestPlacementsBanner';
import PlacementsCompaniesSection from '../components/PlacementsCompaniesSection/PlacementsCompaniesSection';
// You can also import the useFadeInScroll hook if you want more granular control
// over individual section animations rather than relying solely on the global .gsap-fade-in
// import { useFadeInScroll } from '../hooks/useGsapAnimations';
import ServicesOpportunitiesSection from '../components/placement/ServicesOpportunitiesSection/ServicesOpportunitiesSection';
const  PlacementPage = () => {
  // Example of using the custom hook for a specific section if desired:
  // const heroRef = useFadeInScroll({ y: 0, duration: 1.2, delay: 0.1 });
  // const aboutSectionRef = useFadeInScroll({ y: 30, duration: 0.7, delay: 0.2 });

  return (
    <>
     
 
   <PlacementSuccessSection/>
   <div className="gsap-fade-in" data-delay="0.1">
      
   <PlacementsCompaniesSection/>
       </div>
        <div className="gsap-fade-in" data-delay="0.1">
      
   <ServicesOpportunitiesSection/>
       </div>
       <div className="gsap-fade-in" data-delay="0.1">
      
   <BestPlacementsBanner/>
       </div>
       <div className="gsap-fade-in" data-delay="0.1">
      
   <WhyChooseSection/>
       </div>
       <div className="gsap-fade-in" data-delay="0.1">
        <Testimonials />
      </div>
       

      {/* InfoBanner can also use the global fade-in */}
      <div className="gsap-fade-in" data-delay="0.1">
        <InfoBanner />
      </div>
    </>
  );
};

export default PlacementPage ;// src/pages/HomePage.jsx
   