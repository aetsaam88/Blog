import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Blog</h3>
          <p>
            We are a platform dedicated to providing high-quality content on tech,
            lifestyle, and more.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#latest">Articles</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#">Twitter</a>| 
            <a href="#"> Facebook</a>| 
            <a href="#"> LinkedIn</a>
          </div>
          <p className="contact-inf">Email: contact@blog.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 My Enhanced Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
