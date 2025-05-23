import React, { useEffect, useState } from 'react';
import styles from './FormPopup.module.css';

const FormPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
  const shown = sessionStorage.getItem('formShown');
  if (!shown) {
    setIsVisible(true);
    sessionStorage.setItem('formShown', 'true');
  } else {
    setIsVisible(false);
  }
}, []);


  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose}>×</button>
        <h2>Enroll Now</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
