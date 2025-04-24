import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="icon-wrapper">
              <span className="contact-icon">✉️</span>
            </div>
            <h3>Email</h3>
            <a href="mailto:manvirsingh.developer@gmail.com">manvirsingh.developer@gmail.com</a>
          </div>

          <div className="contact-card">
            <div className="icon-wrapper">
              <span className="contact-icon">📞</span>
            </div>
            <h3>Phone</h3>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>

          <div className="contact-card">
            <div className="icon-wrapper">
              <span className="contact-icon">📍</span>
            </div>
            <h3>Location</h3>
            <p>Punjab, India</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send me a message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={5}
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 