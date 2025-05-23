import styles from './CoursesHighlight.module.css';
import coursesData from '../../data/courses.json';

const CoursesHighlight = () => {
  return (
    <section id="courses" className={`${styles.coursesSection} section-padding`}>
      <div className={styles.blackPanel}>
        <div className={styles.gridContainer}>
          {coursesData.map((course) => (
            <a key={course.id} href={`/courses/${course.id}`} className={styles.card}>
              <div className={styles.cardOverlay}></div>
              <video
                className={styles.cardImage}
                src={course.video} // Use "video" field instead of "image" in JSON
                autoPlay
                muted
                loop
                playsInline
              />
              <h3 className={styles.cardTitle}>{course.shortName}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesHighlight;
