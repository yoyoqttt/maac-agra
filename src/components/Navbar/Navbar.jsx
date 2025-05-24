import { useState } from 'react';
import styles from './Navbar.module.css';
import Button from '../common/Button/Button';
import logo from '../../logo.png';

const Navbar = ({ onApplyNowClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCourses = () => setCoursesOpen(!coursesOpen);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <div className={styles.logo}>
          <a href="/"><img src={logo} alt="MAAC Agra Logo" /></a>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li><a href="/">Home</a></li>
          <li onClick={toggleCourses}>
            <span className={styles.dropdownToggle}>Courses ▾</span>
            {coursesOpen && (
              <ul className={styles.dropdownMenu}>
                <li><a href="/3Ddesign">3D</a></li>
                <li><a href="/courses/vfx">VFX</a></li>
                <li><a href="/courses/gaming">Gaming</a></li>
                <li><a href="/courses/graphic">Graphic</a></li>
              </ul>
            )}
          </li>
          <li><a href="/showcase">Showcase</a></li>
          <li><a href="/place">Placements</a></li>
          <li className={styles.applyNowMobile}>
            <a href="/placements"><Button onClick={onApplyNowClick} variant="primary">Apply Now</Button></a>
          </li>
        </ul>

        <div className={styles.navActions}>
          <span className={styles.phoneNumber}>Call: +91-9319128389</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
