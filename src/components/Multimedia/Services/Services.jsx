import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Multimedia Training',
    description: 'At MAAC, we offer comprehensive training programs in the field of multimedia. ...'
  },
  {
    title: 'Graphic Design',
    description: 'MAAC is proud to provide industry-leading training in graphic design. ...'
  },
  {
    title: 'Web Development',
    description: 'At MAAC, we offer professional training in web development. ...'
  }
];

function Services() {
  return (
    <section className="services">
      <h2>Explore Our Services</h2>
      <div className="service-cards">
        {services.map((srv, idx) => (
          <div className="service-card" key={idx}>
            <h3>{srv.title}</h3>
            <p>{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
