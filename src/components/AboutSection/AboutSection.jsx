import { useRef } from 'react';
import styles from './AboutSection.module.css';
import placementPartnersData from '../../data/placements.json'; // Assuming you have this
// import WaveSeparator from '../../assets/images/wave-separator.svg?react'; // Vite specific SVG import as component
// If not using SVG as component, you'll use it as a background-image in CSS

const AboutSection = () => {
  // Refs for potential GSAP animations if needed
  const aboutTextRef = useRef(null);
  const placementsTitleRef = useRef(null);
  const placementsLogosRef = useRef(null);

  return (
    <section id="about-combined" className={`${styles.aboutCombinedSection} gsap-fade-in`}>
      {/* Top Part: About MAAC Text */}
      <div className={`${styles.aboutTextContainer} container`}>
        <h2 className={styles.mainTitle}>About MAAC</h2>
        <div ref={aboutTextRef} className={styles.aboutContent}>
          <h3>MAAC is the high-end 3D Animation & VFX education vertical of Aptech Ltd.</h3>
          <p>
            Through its wide network of centres, MAAC has prepared thousands of students for careers in Animation, VFX, Filmmaking, Gaming, Web and Graphics Designing. MAAC institutes provide quality education through internationally recognised career courses leading to top-notch job placements. MAAC has a dedicated Research & Development team consisting of industry professionals.
          </p>
          <p>
            MAAC Institute Agra conduct faculty training programs to ensure high standards of teaching in the classroom. All MAAC teachers are trained and vetted by Animation industry professionals who help sharpen their creative & technical skills. MAAC in Agra lays strong emphasis on using the best infrastructure to train students. Our MAAC institutes use high-end computers, Wacom tablets & other equipment in the classroom. The infrastructure is similar to that used in the global colleges training in Animation & VFX. This helps create an 'on-the-job' environment in the design classes at MAAC. As a result, MAAC students win many Awards for the films they create during and after successfully completing their design courses.
          </p>
        </div>
      </div>

      {/* Wave Separator */}
      <div className={styles.waveContainer}>
        {/* Option 1: SVG as a component (Vite specific: import WaveSeparator from './wave.svg?react') */}
        {/* <WaveSeparator className={styles.waveSvg} /> */}

        {/* Option 2: Empty div styled with CSS background-image (more common for general use) */}
        {/* The CSS will handle applying the SVG as a background */}
      </div>

      {/* Bottom Part: Best Placements Companies */}
      <div className={styles.placementsSectionWrapper}>
        <div className={`${styles.placementsContent} container`}>
          <div className={styles.placementsText}>
            <h2 ref={placementsTitleRef} className={styles.placementsTitle}>
              Best Placements companies
            </h2>
            <p>
              Through expert career training and mentorship, our students start their careers at major companies across the globe.
            </p>
          </div>
          <div ref={placementsLogosRef} className={styles.partnersGrid}>
            {placementPartnersData.slice(0, 6).map((partner) => ( // Displaying first 6 logos
              <div key={partner.id} className={styles.partnerCard}>
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} />
                ) : (
                  <span>{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;