import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './ContactFormPopup.module.css';
import Button from '../common/Button/Button';
import { FaTimes } from 'react-icons/fa';

const ContactFormPopup = ({ onClose }) => {
  const popupRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(popupRef.current,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
    );
    gsap.fromTo(formRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, delay: 0.2 }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., using fetch or axios)
    alert('Form submitted (placeholder)!');
    onClose();
  };

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div ref={popupRef} className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.title}>Welcome</h2>
        <p className={styles.subtitle}>Let's Us Know!</p>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="tel" name="mobile" placeholder="Mobile Number" required />
          <input type="email" name="email" placeholder="Email" required />
          <Button type="submit" variant="primary" className={styles.submitButton}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPopup;