import React from 'react';
import './About.css';

const About = () => (
  <div className="about-container">
    <h3>About Us</h3>
    <p>
      Welcome to Fantasy Miniatures Emporium — where imagination meets craftsmanship.
      We are a dedicated team of tabletop enthusiasts and miniature collectors who
      believe that the best adventures begin on the hobby desk.
    </p>
    <p>
      We're a small team of passionate hobbyists bringing the best supplies to fellow enthusiasts
      around the world.
    </p>
    <p>
      Our journey started in a small garage, surrounded by brushes, resin, and
      boundless passion. Today, we serve hobbyists across the world by offering
      finely curated miniatures, expertly written lore books, and the highest-quality
      paints and tools available.
    </p>
    <p>
      Whether you're assembling your first Warband, building terrain for your gaming
      table, or seeking the perfect brush for your next masterwork, we are here to help
      you bring your world to life.
    </p>
    <p>
      Thank you for making us part of your creative journey. We don't just sell
      miniatures — we build legacies, one figure at a time.
    </p>
    
    
    <h3>Our Location</h3>
    <div className="map-wrapper">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.638387622651!2d13.4058389!3d52.5200066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e2b2aa5f35%3A0x420d7c25356a!2sBerlin!5e0!3m2!1sen!2sde!4v1643308851259!5m2!1sen!2sde"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    <h3>Our Workshop Gallery</h3>
    <div className="gallery">
      <img src="/images/doombell.png" alt="Workshop 1" />
      <img src="/images/geld.png" alt="Workshop 2" />
      <img src="/images/marines.png" alt="Workshop 3" />
      <img src="/images/prince.png" alt="Workshop 4" />
      <img src="/images/slan.png" alt="Workshop 5" />
      <img src="/images/wizard.png" alt="Workshop 6" />
    </div>
  </div>
);

export default About;
