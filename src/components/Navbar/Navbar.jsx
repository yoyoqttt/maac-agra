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
          <Link to="/"><img src={logo} alt="MAAC AgrLink Logo" /></Link>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li onClick={toggleCourses}>
            <span className={styles.dropdownToggle}>Courses ▾</span>
            {coursesOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link to="/3Ddesign">3D</Link></li>
                <li><Link to="/courses/vfx">VFX</Link></li>
                <li><Link to="/courses/gaming">Gaming</Link></li>
                <li><Link to="/courses/graphic">Graphic</Link></li>
                <li><Link to="/multimedia"> Multimedia</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/showcase">Showcase</Link></li>
          <li><Link to="/place">Placements</Link></li>
          <li className={styles.applyNowMobile}>
            <Link to="/placements"><Button onClick={onApplyNowClick} variant="primary">Apply Now</Button></Link>
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
