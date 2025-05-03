import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact-container">
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
