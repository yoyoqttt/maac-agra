import React from "react";
import "./CourseSection.css";

const ADDEDGECard = () => (
  <section className="course-section dark-bg">
    <img
      src="https://pplx-res.cloudinary.com/image/private/user_uploads/6641318/09872170-4183-4975-8838-3737bf4bd6c2/Screenshot-2025-05-24-060632.jpg"
      alt="AD3DEDGE Plus"
      className="course-img"
    />
    <div className="course-content">
      <p className="course-feature">Featured Course: 3D Animation</p>
      <h1 className="course-title">AD3DEDGE Plus</h1>
      <p className="course-desc">
        Animation is fascinating. From a young age, you may have dreamed of creating your own movies, TV series, characters, storylines and so much more. With MAAC's flagship course AD3DEDGE Plus, your dreams can finally meet reality. AD3DEDGE Plus is an animation program that teaches you a wide range of filmmaking techniques that are involved in the animation process. Join MAAC and acquire skills that will make you the best in the field.
      </p>
      <button className="course-duration">Course Duration: 576 hrs</button>
    </div>
  </section>
);

export default ADDEDGECard;
