import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_USER_ID'
    ).then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Something went wrong. Try again.');
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="form-section">
        <h1>Contact Us</h1>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
      <div className="map-section">
        {/* Google Maps iframe */}
      </div>
    </div>
  );
};

export default Contact;
