import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';
import Button from '../common/Button/Button';

const heroConfig = {
  vrTheme: {
    type: 'image',
    backgroundSource: '/Main Render(1).jpg',
    titleLines: [
      "3D Animation:",
      "Mastering the art of",
      "animation"
    ],
    subtitle:
      "Embark on a creative journey into the world of animation with the top animation courses at MAAC Agra. Whether you're a beginner or an experienced artist, our courses will help you develop your skills and bring your imagination to life.",
    cta: null
  },
  dynamicTheme: {
    type: 'video',
    backgroundSource: 'https://videocdn.cdnpk.net/videos/f2e1ca12-d573-52ac-961b-ecb4fff4c661/horizontal/previews/watermarked/small.mp4 ',
     
    
  }
};

const currentHeroData = heroConfig.dynamicTheme;

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const welcomeRef = useRef(null);
  const locationRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(heroRef.current, { opacity: 0, duration: 0.7 });

    if (welcomeRef.current) {
      tl.from(welcomeRef.current, { opacity: 0, y: -30, duration: 0.6 }, "-=0.3");
    }
    if (locationRef.current) {
      tl.from(locationRef.current, { opacity: 0, y: -20, duration: 0.5 }, "-=0.4");
    }

    if (titleRef.current) {
      if (currentHeroData.titleLines) {
        const lines = titleRef.current.querySelectorAll('span.hero-title-line');
        tl.from(lines, {
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 0.8,
        }, "-=0.2");
      } else if (currentHeroData.mainHeadline) {
        const words = currentHeroData.mainHeadline.split(" ");
        titleRef.current.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
        tl.from(titleRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.05,
          duration: 0.6
        }, "-=0.3");
      }
    }

    if (subtitleRef.current) {
      tl.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.5");
    }

    if (ctaRef.current) {
      tl.from(ctaRef.current, { opacity: 0, scale: 0.8, duration: 0.5 }, "-=0.3");
    }

    const hasVisited = localStorage.getItem("maac_visited");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("maac_visited", "true");
    }
  }, []);

  return (
    <>
      <section ref={heroRef} className={styles.hero}>
        {currentHeroData.type === 'video' && (
          <video
            className={styles.heroBackgroundVideo}
            src={currentHeroData.backgroundSource}
            autoPlay
            loop
            muted
            playsInline
          />
        )}

        <div className={styles.overlay}></div>

        <div className={`${styles.heroContent} container`}>
          {currentHeroData.welcomeText && (
            <p ref={welcomeRef} className={styles.welcomeText}>
              {currentHeroData.welcomeText}
            </p>
          )}

          {currentHeroData.locationText && (
            <p ref={locationRef} className={styles.locationText}>
              {currentHeroData.locationText}
            </p>
          )}

          {currentHeroData.titleLines ? (
            <h1 ref={titleRef} className={styles.mainTitleVr}>
              {currentHeroData.titleLines.map((line, index) => (
                <span key={index} className="hero-title-line" style={{ display: 'block' }}>
                  {line}
                </span>
              ))}
            </h1>
          ) : (
            <h1 ref={titleRef} className={styles.mainTitleDynamic}></h1>
          )}

          {currentHeroData.subtitle && (
            <p ref={subtitleRef} className={styles.subtitle}>
              {currentHeroData.subtitle}
            </p>
          )}

          {currentHeroData.cta && (
            <div ref={ctaRef} className={styles.ctaContainer}>
              <Button variant="primary" onClick={() => setShowPopup(true)}>
                {currentHeroData.cta.text}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Popup */}
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
