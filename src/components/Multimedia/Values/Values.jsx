import React from 'react';
import './Values.css';

const values = [
  {
    title: 'Trustworthiness',
    description: 'At MAAC, we pride ourselves on being the most trusted multimedia training institute in Agra. ...'
  },
  {
    title: 'Innovation',
    description: 'As a leading multimedia training institute, we are known for our innovative and cutting-edge curriculum. ...'
  },
  {
    title: 'Creativity',
    description: 'At MAAC, we believe in fostering a creative and collaborative learning environment. ...'
  },
  {
    title: 'Industry Connections',
    description: 'One of the key traits that sets us apart is our strong industry connections. ...'
  }
];

function Values() {
  return (
    <section className="values">
      {values.map((val, idx) => (
        <div className="value-card" key={idx}>
          <h2>{val.title}</h2>
          <p>{val.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Values;
