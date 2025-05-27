import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';
import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';
const heroData = {
  type: 'video',
  backgroundSource: 'https://videocdn.cdnpk.net/videos/9e6481ca-b3ed-5b2e-a6df-b3c02f4b3804/horizontal/previews/watermarked/small.mp4',
  welcomeText: 'Welcome To MAAC',
  locationText: 'Corporate Park, AGRA',
  title: 'The Best Institute in Animation, VFX, Gaming & Graphic Design',
  ctaText: 'COURSES'
};

const Hero = () => {
  const heroRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 100,
      duration:1001 ,
      ease: 'power2.out'
    });

    const visited = localStorage.getItem('maac_visited');
    if (!visited) {
      setShowPopup(true);
      localStorage.setItem('maac_visited', 'true');
    }
  }, []);

  return (
    <>
      <section className={styles.hero} ref={heroRef}>
        <video
          className={styles.heroBackgroundVideo}
          src={heroData.backgroundSource}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <p className={styles.welcomeText}>{heroData.welcomeText}</p>
          <p className={styles.locationText}>{heroData.locationText}</p>
          <h1 className={styles.mainTitle}>{heroData.title}</h1>
         <Button variant="yellow">  <Link to="/">{heroData.ctaText}</Link></Button>
        </div>
      </section>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <h2>Apply Now</h2>
            <p>Fill out the form to start your journey with MAAC.</p>
            <Button variant="primary" onClick={() => setShowPopup(false)}>Close</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
