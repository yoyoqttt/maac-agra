import styles from './Testimonials.module.css';
import { FaStar } from 'react-icons/fa'; // npm install react-icons
// import user1 from '../../assets/images/user-divyansi.jpg';
// import user2 from '../../assets/images/user-shruti.jpg';

const testimonialsData = [
  {
    name: "Divyansi Pourush",
    image: 'user-divyansi.jpg', // Placeholder
    quote: "I'd like to thank MAAC Agra for the knowledge that I obtained during my studies. When I first came to this institution I was absolutely clueless about the creative industry... Now, after completion of my course, my vision is clear...",
    rating: 5,
    designation: "Jobaaj.com",
    location: "Agra"
  },
  {
    name: "Shruti Jain",
    image: 'user-shruti.jpg', // Placeholder
    quote: "Thank you so much MAAC Agra and all the faculty for such great knowledge & experience. I had an amazing experience being a MAAC student.",
    rating: 5,
    designation: "Graphics Designer",
    location: "Chanderpur Group Haryana"
  },
  {
    name: "Gaurav Sharma",
    image: null, // No image example
    quote: "MAAC Agra has been a great institute for my career. The mentors here push you to your strength. The faculties at MAAC Agra provide thorough knowledge. It's been a great experience being a part of the MAAC Agra family.",
    rating: 5,
    designation: "Graphic Designer",
    location: "Inno-designs Designation"
  }
];

const Testimonials = () => {
  // For a real carousel, use Swiper.js or build custom with GSAP
  return (
    <section id="testimonials" className={`${styles.testimonialsSection} section-padding gsap-fade-in`}>
      <div className="container">
        <h2 className={styles.title}>Some Inspirations of Previous Years<br/>For Next Gen</h2>
        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              {testimonial.image && (
                // <img src={testimonial.image} alt={testimonial.name} className={styles.userImage} />
                <div className={styles.userImagePlaceholder}>Img: {testimonial.name}</div>
              )}
              <div className={styles.cardContent}>
                <h3>{testimonial.name}</h3>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                </div>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <p className={styles.designation}>
                  <strong>{testimonial.designation}</strong><br/>
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Add carousel navigation if implemented */}
      </div>
    </section>
  );
};

export default Testimonials;