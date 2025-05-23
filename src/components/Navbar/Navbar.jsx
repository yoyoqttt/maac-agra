import styles from './Navbar.module.css';
import Button from '../common/Button/Button';
import logo from '../../logo.png'; // Adjust path as needed

const Navbar = ({ onApplyNowClick }) => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <div className={styles.logo}>
        <a href="/"> <img src={logo} alt="MAAC Agra Logo" /></a> 
        </div>

        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/showcase">Showcase</a></li>
          <li><a href="/placements">Placements</a></li>
        </ul>

        <div className={styles.navActions}>
          <Button onClick={onApplyNowClick} variant="primary">Apply Now</Button>
          <span className={styles.phoneNumber}>Call: +91-9319128389</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
