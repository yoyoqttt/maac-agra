import React from "react";
import styles from "./Howitwork.module.css";

const steps = [
  {
    number: "1",
    title: "Enquire",
    description: "About Courses, Fees, Duration, Career opportunities",
    image: "",
  },
  {
    number: "2",
    title: "Enroll",
    description: "Hurray! You are a student at maac!",
    image: "/images/enroll.png",
    // import myImage from '../../assets/path-to-your-image.jpg';

  },
  {
    number: "3",
    title: "Attend",
    description: "Regular classes and practice with the best industrial trainers",
    image: "/images/attend.png",
  },
];

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How it works</h2>
      <div className={styles.stepsWrapper}>
        {steps.map((step) => (
          <div key={step.number} className={styles.stepRow}>
            <div className={styles.stepLeft}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
            <div className={styles.stepRight}>
              <img src={step.image} alt={step.title} className={styles.stepImage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
