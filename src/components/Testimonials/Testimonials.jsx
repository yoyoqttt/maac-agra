import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    name: "Divyansi Pourush",
    image: 'user-divyansi.jpg',
    quote: "I'd like to thank MAAC Agra for the knowledge that I obtained during my studies...",
    rating: 5,
    designation: "Jobaaj.com",
    location: "Agra"
  },
  {
    name: "Shruti Jain",
    image: 'user-shruti.jpg',
    quote: "Thank you so much MAAC Agra and all the faculty for such great knowledge...",
    rating: 5,
    designation: "Graphics Designer",
    location: "Chanderpur Group Haryana"
  },
  {
    name: "Gaurav Sharma",
    image: null,
    quote: "MAAC Agra has been a great institute for my career...",
    rating: 5,
    designation: "Graphic Designer",
    location: "Inno-designs Designation"
  },
  {
    name: "Gaurav Sharma",
    image: null,
    quote: "MAAC Agra has been a great institute for my career...",
    rating: 5,
    designation: "Graphic Designer",
    location: "Inno-designs Designation"
  },
  {
    name: "Gaurav Sharma",
    image: null,
    quote: "MAAC Agra has been a great institute for my career...",
    rating: 5,
    designation: "Graphic Designer",
    location: "Inno-designs Designation"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const testimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className={`${styles.testimonialsSection} section-padding`}>
      <div className="container">
        <h2 className={styles.title}>Some Inspirations of Previous Years<br/>For Next Gen</h2>
        <div className={styles.testimonialsGrid} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={prevSlide}>&lt;</button>
          <div className={styles.testimonialCard}>
            {testimonial.image ? (
              <div className={styles.userImagePlaceholder}>Img: {testimonial.name}</div>
            ) : (
              <div className={styles.userImagePlaceholder}>{testimonial.name[0]}</div>
            )}
            <div className={styles.cardContent}>
              <h3>{testimonial.name}</h3>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} color="gold" />
                ))}
              </div>
              <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
              <p className={styles.designation}>
                <strong>{testimonial.designation}</strong><br />
                {testimonial.location}
              </p>
            </div>
          </div>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
