// ServicesOpportunitiesSection.jsx
import React from "react";
import "./ServicesOpportunitiesSection.css";

const opportunities = [
  {
    title: "Placement Opportunities in VFX",
    description: `In this program, students or participants are offered structured and well-planned placement opportunities based on their specialization in various creative disciplines. These disciplines include VFX, which deals with adding stunning visual effects to films, videos, and other media; 3D Animation, which focuses on creating lifelike and dynamic animations in three-dimensional space; Web & Graphic Design, which involves crafting visually appealing and functional designs for websites and digital platforms; and Gaming, which revolves around the development and design of interactive video games.`,
  },
  {
    title: "Placement Opportunities in 3D Animation",
    description: `The organized placement program is likely to be set up by an educational institution or a training center that offers courses in these creative fields. It aims to connect students or aspiring professionals with relevant industry opportunities, internships, or job placements, ensuring that they can apply the skills and knowledge acquired during their courses in real-world settings.`,
  },
  {
    title: "Placement Opportunities in Web & Graphic Design",
    description: `By providing a structured placement process, this program helps bridge the gap between education and professional experience, giving participants a chance to enter the workforce with confidence and competence in their respective areas of expertise. It also serves as a valuable resource for employers seeking talented individuals with specialized skills in VFX, 3D Animation, Web & Graphic Design, and Gaming.`,
  },
];

const ServicesOpportunitiesSection = () => (
  <section className="services-section">
    <h2 className="services-title">Explore Our Services</h2>
    <div className="services-cards">
      {opportunities.map((item) => (
        <div className="services-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesOpportunitiesSection;
