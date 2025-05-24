import React from "react";
import "./WhyChooseSection.css";

// You can use any icon you like. This is a simple SVG checkmark in a circle.
const FeatureIcon = () => (
  <span className="feature-icon">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#232a36" stroke="#232a36" strokeWidth="2"/>
      <path d="M16 24l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const features = [
  {
    title: "Commitment to Excellence",
    description: (
      <>
        MAAC Agra is known for its commitment to excellence in creative education, providing students with the skills and knowledge they need to succeed in the industry. With a strong focus on practical training and industry-relevant curriculum, MAAC ensures that students are well-prepared for their careers.
      </>
    ),
  },
  {
    title: "Cutting-Edge Technology",
    description: (
      <>
        MAAC Agra is committed to helping you build a successful career. We offer excellent placement opportunities that align with your skills and aspirations. We pride ourselves on our high placement rate, which reflects our dedication to your professional growth and success.
      </>
    ),
  },
  {
    title: "Collaborative Learning Environment",
    description: (
      <>
        At MAAC, your journey with us doesn't end with graduation; it begins with a fulfilling career. We connect our graduates with top employers in their fields. We understand that great education is only as valuable as the opportunities it leads to.
      </>
    ),
  },
  {
    title: "Industry Connections",
    description: (
      <>
        MAAC Agra has a strong network of industry connections and collaborations, offering students valuable opportunities to interact with professionals and gain real-world insights. Through workshops, guest lectures, and industry visits, students can expand their knowledge and build a strong professional network.
      </>
    ),
  },
];

const WhyChooseSection = () => (
  <section className="why-choose-section">
    <div className="why-choose-features">
      {features.map((feature) => (
        <div className="feature-card" key={feature.title}>
          <FeatureIcon />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseSection;
