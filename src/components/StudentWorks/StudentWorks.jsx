import styles from './StudentWorks.module.css';
import studentWorksData from '../../data/studentWorks.json';
// import { useFadeInScroll } from '../../hooks/useGsapAnimations'; // Optional

const StudentWorks = () => {
  // const sectionRef = useFadeInScroll({ stagger: { amount: 0.5, from: "start", axis: "x" }, x: 30, once: true });

  return (
    <section
      id="student-works-gallery"
      // ref={sectionRef} // Uncomment if using the hook for the whole section or individual items
      className={`${styles.studentWorksSection} section-padding`}
    >
      <div className="container">
        <h2 className={`${styles.title} gsap-fade-in`}>Student Works</h2>
        <div className={`${styles.galleryContainer} gsap-fade-in`} data-delay="0.2"> {/* Add class for App.jsx based animation */}
          {studentWorksData.map((work, index) => (
            <div
              key={work.id}
              className={styles.workItem}
              // You could apply useFadeInScroll to individual items too for a different effect
            >
              <img src={work.image} alt={work.alt || work.title} loading="lazy" />
              {/* Optionally, display title on hover or below image */}
              {/* <p className={styles.workTitle}>{work.title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentWorks;