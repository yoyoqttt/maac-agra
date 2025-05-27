import React from 'react';
import './FormPopup.module.css';

const FormPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Welcome</h2>
        <p className="popup-subtitle">Let's Us Know!</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Mobile Number" />
        <input type="email" placeholder="Email" />
        <button className="popup-submit">submit</button>
      </div>
    </div>
  );
};

export default FormPopup;
