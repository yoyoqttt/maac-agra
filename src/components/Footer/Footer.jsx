import styles from './Footer.module.css';
import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import footerLogo from '../../logo.png'; // Add your logo

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerTop} container`}>
        <div className={styles.footerColumn}>
          <img src={footerLogo} alt="MAAC Agra" className={styles.footerLogo} />
          {/* <h3 className={styles.footerLogoText}>MAAC AGRA</h3> */}
          <p>
            The Academy provides quality education through career-oriented courses, leading to top-notch job placements. MAAC has a dedicated Research & Development team.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#showcase">Student Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#placements">Placements</a></li>
            {/* <li><a href="#">Life At Maac</a></li> */}
            {/* <li><a href="#">Contact</a></li> */}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Courses</h4>
          <ul>
            <li><a href="#">3D Animation</a></li>
            <li><a href="#">VFX</a></li>
            <li><a href="#">Gaming Design</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">UI/UX</a></li>
            <li><a href="#">More Courses</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> 604-605, 6th Floor, Corporate Park, behind Ashok Cosmos Mall, near G.G. Nursing Home, Sanjay Place, Agra, Uttar Pradesh 282002</p>
          <p><FaPhone /> +919319128389 | +919045508555</p>
          <p><FaEnvelope /> maacagra14@gmail.com</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://wa.me/919319128389" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            {/* Add more social icons */}
          </div>
        </div>
      </div>
      <div className={styles.mapSection}>
        {/* Replace with your actual Google Maps embed code */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.480908930864!2d78.00785031505019!3d27.19072898301304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477ccaaaaaaab%3A0x4c4e936e0a2f5c9!2sMAAC%20AGRA%20%7C%20High-end%203D%20Animation%2C%20VFX%2C%20Gaming%2C%20Graphics%20%26%20Web%20Designing%20Courses!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border:0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MAAC Agra Location"
        ></iframe>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} MAAC Agra. All Rights Reserved. <span className={styles.nimactLink}>Designed by <a href="https://nimact.com" target="_blank" rel="noopener noreferrer">NIMACT</a></span></p>
      </div>
    </footer>
  );
};

export default Footer;