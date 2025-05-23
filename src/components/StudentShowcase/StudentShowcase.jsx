import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './StudentShowcase.module.css';
import showcaseData from '../../data/showcase.json';

const StudentShowcase = () => {
  const categories = showcaseData.categories || ['All'];
  const allItems = showcaseData.items || [];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [filteredItems, setFilteredItems] = useState(allItems);

  const galleryGridRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    if (headerRef.current) {
      tl.from(headerRef.current.children, {
        opacity: 10,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
      });
    }

    if (tabsRef.current) {
      tl.from(tabsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
      }, "-=0.3");
    }

    if (galleryGridRef.current && galleryGridRef.current.children.length > 0) {
      gsap.from(galleryGridRef.current.children, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        stagger: 0.05,
        duration: 0.4,
        delay: tl.duration() - 0.4,
      });
    }
  }, []);

  useEffect(() => {
    const newFilteredItems =
      activeCategory === 'All'
        ? allItems
        : allItems.filter(
            (item) =>
              item.category === activeCategory ||
              (activeCategory === '3D Design & Animation' && item.category === '3D Design')
          );

    if (galleryGridRef.current && galleryGridRef.current.children.length > 0) {
      gsap.to(galleryGridRef.current.children, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        stagger: 0.03,
        onComplete: () => {
          setFilteredItems(newFilteredItems);
        },
      });
    } else {
      setFilteredItems(newFilteredItems);
    }
  }, [activeCategory, allItems]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (galleryGridRef.current && galleryGridRef.current.children.length > 0) {
        gsap.fromTo(
          galleryGridRef.current.children,
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            delay: 0.1,
          }
        );
      }
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [filteredItems]);

  return (
    <section id="showcase" className={`${styles.showcaseSection} section-padding`}>
      <div ref={headerRef} className={styles.headerBackground}>
        <div className="container">
          <h2 className={styles.mainTitle}>Student Showcase</h2>
          <p className={styles.description}>
            Student Work and Event Pictures to help you get a sneak peek into the student's life at MAAC Agra.
            All these artworks have been produced by students while pursuing courses of all genres.
          </p>
        </div>
      </div>

      <div className="container">
        <div   className={styles.filterTabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.tabButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={galleryGridRef} className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.galleryItem}>
              <img src={item.image} alt={item.title || 'Student work'} />
              <div className={styles.itemOverlay}>
                <h3>{item.title}</h3>
                <p>{item.studentName || item.category}</p>
              </div>
            </div>
          ))}
          {filteredItems.length === 0 && activeCategory !== 'All' && (
            <p style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '20px' }}>
              No works found for the category: {activeCategory}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentShowcase;
