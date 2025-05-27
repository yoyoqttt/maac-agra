import React from "react";
import styles from "./Howitwork.module.css";

const steps = [
  {
    number: "1",
    title: "Enquire",
    description: "About Courses, Fees, Duration, Career opportunities",
    image: "https://www.maacagra.com/img/teacher-explaining-using-gestures.png",
  },
  {
    number: "2",
    title: "Enroll",
    description: "Hurray! You are a student at maac!",
    image: "https://www.maacagra.com/img/boy-exploding-party-popper.png",
    // import myImage from '../../assets/path-to-your-image.jpg';

  },
  {
    number: "3",
    title: "Attend",
    description: "Regular classes and practice with the best industrial trainers",
    image: "https://www.maacagra.com/img/create-file.png",
  },
    {
    number: "4",
    title: "Participate",
    description: "Regular classes and practice with the best industrial trainers",
    image: "https://www.maacagra.com/img/businessman-with-financial-idea.png",
  },
    {
    number: "5",
    title: "Submit",
    description: "Regular classes and practice with the best industrial trainers",
    image: "https://www.maacagra.com/img/approved-checklist.png",
  },
    {
    number: "6",
    title: "Prepare",
    description: "Regular classes and practice with the best industrial trainers",
    image: "https://www.maacagra.com/img/business-startup.png",
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
