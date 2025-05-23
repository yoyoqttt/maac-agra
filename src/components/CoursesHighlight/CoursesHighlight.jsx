import styles from './CoursesHighlight.module.css';
import coursesData from '../../data/courses.json'; // Import the JSON data
// import Button from '../common/Button/Button'; // If you have a learn more button

const CoursesHighlight = () => {
  return (
    <section id="courses" className={`${styles.coursesSection} section-padding gsap-fade-in`}>
      <div className="container">
        <h2 className={styles.title}>Kickstart your career with MAAC courses</h2>
        <p className={styles.subtitle}>What are you interested in?</p>
        <div className={styles.coursesGrid}>
          {coursesData.map((course) => ( // Use coursesData from the imported JSON
            <div key={course.id} className={styles.courseCard}>
              {/*
                For images in src/assets, you'd typically import them:
                import courseAnimationImg from '../../assets/images/courses/course-animation.jpg';
                And then in the map, you might have a helper function to get the correct import
                or structure your courses.json to include the imported variable name.
                For simplicity with paths like "/assets/...", they are best placed in the `public` folder.
                Vite treats `public` as the root. So "/assets/..." becomes "http://localhost:5173/assets/..."
              */}
              <img src={course.image} alt={course.name} className={styles.courseImage} />
              {/* If image not found, show placeholder: */}
              {/* <div className={styles.courseImagePlaceholder}>Image for {course.name}</div> */}
              <div className={styles.courseInfo}>
                <h3>{course.shortName}</h3> {/* Using shortName for the card title */}
                <p>{course.description.substring(0, 100)}...</p> {/* Truncate description */}
                <a href={`/courses/${course.id}`} className={styles.learnMore}>Learn More →</a> {/* Example link */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesHighlight;