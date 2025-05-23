import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './PlacementPartners.module.css';
// Import logos
// import technicolorLogo from '../../assets/images/technicolor-logo.png';
// import mpcLogo from '../../assets/images/mpc-logo.png';
// import dnegLogo from '../../assets/images/dneg-logo.png';
// import pixMyFilmLogo from '../../assets/images/pixmyfilm-logo.png';
// import netflixLogo from '../../assets/images/netflix-logo.png';
// import redChilliesLogo from '../../assets/images/redchillies-logo.png';

const partners = [
  { name: 'Technicolor', logo: 'https://www.maacagra.com/img/recruiters-logo/logo2.webp' /* Replace with actual import */ },
  { name: 'MPC', logo: 'https://www.maacagra.com/img/recruiters-logo/logo8.webp' },
  { name: 'DNEG', logo: 'https://www.maacagra.com/img/recruiters-logo/logo9.webp' },
  { name: 'Prana Studios (was Z)', logo: 'https://www.maacagra.com/img/recruiters-logo/logo13.webp' /* Adjust if needed */ },
  { name: 'Netflix', logo: 'https://www.maacagra.com/img/recruiters-logo/logo22.webp' },
  { name: 'Red Chillies VFX', logo: 'https://www.maacagra.com/img/recruiters-logo/logo5.webp' },
];

const PlacementPartners = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = []; // Reset on re-render

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (sectionRef.current && cardsRef.current.length > 0) {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }
  }, [partners]); // Re-run if partners change (though they are static here)

  return (
    <section id="placements" ref={sectionRef} className={`${styles.placementsSection} section-padding gsap-fade-in`}>
      <div className="container">
        <h2 className={styles.title}>Best Placements Companies</h2>
        <p className={styles.subtitle}>
          Through expert career training and mentorship, our students start their careers at major companies across the globe.
        </p>
        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerCard} ref={addToRefs}>
              {/* <img src={partner.logo} alt={partner.name} /> */}
              <span>{partner.name}</span> {/* Show name if logo isn't ready */}
            </div>
          ))}
        </div>
      </div>
      {/* Add the curved background shape here (SVG or complex CSS) */}
      <div className={styles.curveBg}></div>
    </section>
  );
};

export default PlacementPartners;