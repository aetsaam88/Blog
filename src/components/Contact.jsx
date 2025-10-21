import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">📩 Join Our Community</h2>
        <p className="section-description">
          Subscribe to get the latest updates, articles, and tips delivered straight to your inbox.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email to subscribe"
            required
            className="email-input"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe Now
          </button>
        </form>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            Have questions or collaboration ideas?  
            Feel free to reach out anytime!
          </p>
          <p>
            📧 Email: <a href="mailto:info@blog.com">info@blog.com</a>
          </p>
          <p>📍 Location: Islamabad, Pakistan</p>

          <div className="social-links">
            <a href="#">Twitter</a> | <a href="#">Facebook</a> | <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Blog Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.746191460333!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df958d7b5fcaab%3A0x3cf5e2dfbd3168a9!2sIslamabad!5e0!3m2!1sen!2s!4v1687500000000!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
