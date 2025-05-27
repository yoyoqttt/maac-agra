import React, { useState, useEffect } from 'react';
import FormPopup from '../components/FormPopup/FormPopup';
import HowItWorks from '../components/Howitwork/HowitWork';
import Hero from '../components/Hero/Hero';
import  TurnOnWebHero from '../components/TurnOnWebHero/TurnOnWebHero'
import AboutSection from '../components/AboutSection/AboutSection';
import CoursesHighlight from '../components/CoursesHighlight/CoursesHighlight';
// import StudentShowcase from '../components/StudentShowcase/StudentShowcase';
import StudentWorks from '../components/StudentWorks/StudentWorks';
import Testimonials from '../components/Testimonials/Testimonials';
import InfoBanner from '../components/InfoBanner/InfoBanner';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      {/* Popup shown on page load */}

      <div className="gsap-fade-in" data-delay="0.1">
        <Hero />
      {/* <FormPopup show={showPopup} onClose={handleClosePopup} /> */}
      </div>
      < TurnOnWebHero/>
      <div className="gsap-fade-in" data-delay="0">
        <AboutSection />
      </div>
      <div className="gsap-fade-in" data-delay="0.1">
        <CoursesHighlight />
      </div>
      <div className="gsap-fade-in" data-delay="0">
        <StudentWorks />
      </div>
      <div className="gsap-fade-in" data-delay="0.1">
        <InfoBanner />
      </div>
      <div className="gsap-fade-in" data-delay="0.1">
        <HowItWorks />
      </div>
      <div className="gsap-fade-in" data-delay="0.1">
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
