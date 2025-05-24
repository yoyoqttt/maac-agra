import React from "react";
import "./CourseSection.css";

const D3DCard = () => (
  <section className="course-section light-bg">
    <img
      src="https://pplx-res.cloudinary.com/image/private/user_uploads/6641318/73211166-d3e6-49fa-89af-d89351ce5248/Screenshot-2025-05-24-060639.jpg"
      alt="D3D Course"
      className="course-img"
    />
    <div className="course-content">
      <p className="course-feature">Featured Course: 3D Animation</p>
      <h1 className="course-title">D3D: 3D animation filmmaking course</h1>
      <p className="course-desc">
        With the advent of new technologies in filmmaking, animation has become easier and fun to work with. With the right skill set, you can give expression to your ideas, create memorable characters & bring them to life, and invent fantastic worlds that inspire and entertain audience. Learn to bring your imagination alive by enrolling in advanced 3D animation course that focuses on storyboarding, 3D filmmaking, character animation, and much more.
      </p>
      <button className="course-duration">Course Duration: 432 hrs</button>
    </div>
  </section>
);

export default D3DCard;
