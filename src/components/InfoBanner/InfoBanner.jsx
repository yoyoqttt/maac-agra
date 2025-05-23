import styles from './InfoBanner.module.css';
// import { useFadeInScroll } from '../../hooks/useGsapAnimations'; // Optional: if you want to use the custom hook

const InfoBanner = () => {
  // const bannerRef = useFadeInScroll({ y: 0, x: -100, duration: 1 }); // Example with custom hook

  return (
    // If not using the custom hook, you can add 'gsap-fade-in' class for the global App.jsx animation
    <section
      // ref={bannerRef} // Use if using the custom hook
      className={`${styles.infoBanner} gsap-fade-in`} // Or use the hook
    >
      <div className={`${styles.bannerContent} container`}>
        <div className={styles.leftContent}>
          <h2>
            <span className={styles.highlight}>MAAC Agra</span> Corporate Park have been the top institutes in VFX and Animation for the past 25 years.
          </h2>
        </div>
        <div className={styles.rightContent}>
          <p>
            Enroll for career courses in Animation, Visual effects, Gaming, AR/VR, Filmmaking, Multimedia, Web design, Graphic designing and more. Learn animation and VFX from industry pros who have worked on feature films and games.
          </p>
          <p>
            Whether you are just out of school, college, or changing careers, or upgrading skills, our specialized expert-led career programs help you build practical job skills that serve throughout your career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;