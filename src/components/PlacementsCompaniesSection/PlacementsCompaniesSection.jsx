import React from "react";
import "./PlacementsCompaniesSection.css";

// Replace these URLs with your actual company logo image paths
const companies = [
  {
    name: "technicolor",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Technicolor_logo.svg",
  },
  {
    name: "MPC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/MPC_logo.svg",
  },
  {
    name: "DNEG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/DNEG_logo.svg",
  },
  {
    name: "Yash Raj Films",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Yash_Raj_Films_logo.png",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Red Chillies Entertainment",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6a/Red_Chillies_Entertainment_logo.png",
  },
];

const PlacementsCompaniesSection = () => (
  <section className="placements-section">
    <div className="placements-container">
      <div className="placements-text">
        <h2>
          <span className="highlight">Best Placements companies</span>
        </h2>
        <p>
          Through expert career training and mentorship, our students start their careers at major companies across the globe.
        </p>
      </div>
      <div className="placements-logos">
        {companies.map((company) => (
          <div className="company-logo-card" key={company.name}>
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlacementsCompaniesSection;
