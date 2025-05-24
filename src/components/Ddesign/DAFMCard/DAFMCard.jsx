import React, { useState } from "react";
import "./CourseSection.css";

const DAFMCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className={`course-section${flipped ? " flipped" : ""}`}>
      <div className="course-card" onClick={() => setFlipped(f => !f)}>
        <div className="course-card-inner">
          {/* Front */}
          <div className="course-card-front">
            <img
              src="https://pplx-res.cloudinary.com/image/private/user_uploads/6641318/ff0c0298-18cd-48f4-95cd-f39b7637231e/Screenshot-2025-05-24-060647.jpg"
              alt="DAFM Course"
              className="course-image"
            />
            <div className="course-details">
              <p className="course-feature">Featured Course: 3D Animation</p>
              <h1 className="course-title">DAFM : Program in Animation Filmmaking</h1>
              <p className="course-desc">
                The process of animation filmmaking involves detailed planning and implementation. As an animation professional you will bring the story and characters to life on screen, in an engaging manner to the audience. MAAC's DAFM course emphasises on the creative as well as technical aspects of filmmaking, so that you are ready for a career in the animation industry, on completing your course.
              </p>
              <button className="course-duration">Course Duration: 288 hrs</button>
            </div>
          </div>
          {/* Back */}
          <div className="course-card-back">
            <div className="course-back-content">
              <h2>Why Choose This Course?</h2>
              <ul>
                <li>Learn from industry experts</li>
                <li>Hands-on filmmaking projects</li>
                <li>Portfolio development</li>
              </ul>
              <button className="course-duration">Course Duration: 288 hrs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DAFMCard;
