import React from "react";
import "./OurExpertise.css";

const expertise = [
  {
    title: "3D Animation",
    text: "3D Animation is a master of the art of animation. With extensive knowledge and experience in the field, 3D Animation brings characters and environments to life like never before. Through meticulous attention to detail and a keen eye for movement, 3D Animation creates stunning visuals that captivate audiences."
  },
  {
    title: "Visual Effects",
    text: "In addition to 3D animation, 3D Animation is also well-versed in the world of visual effects. With a deep understanding of the technical aspects of VFX, 3D Animation is able to seamlessly integrate computer-generated imagery into live-action footage, enhancing the overall cinematic experience."
  },
  {
    title: "Character Modeling",
    text: "3D Animation is also skilled in the art of character modeling. Using advanced software and techniques, 3D Animation is able to sculpt and shape digital characters with lifelike detail and precision. From facial expressions to body movements, each character created by 3D Animation is a work of art."
  },
  {
    title: "Motion Graphics",
    text: "Lastly, 3D Animation is an expert in the field of motion graphics. With a keen sense of design and a flair for creativity, 3D Animation brings static graphics to life through movement and animation. From title sequences to promotional videos, 3D Animation's motion graphics work is visually stunning and engaging."
  }
];

const OurExpertise = () => (
  <section className="expertise-section">
    <h2>Our Expertise</h2>
    <div className="expertise-grid">
      {expertise.map((item, idx) => (
        <div className="expertise-item" key={idx}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OurExpertise;
