import React from "react";

function Reviews() {
  return (
    <section id="reviews">
      <h2>Gadget Reviews</h2>
      <p className="intro-text">
        Get honest and detailed reviews of the latest gadgets — from smartphones to wearables and accessories.
      </p>

      <div className="review-grid">
        <div className="review-item">
          <h4>Noise-Cancelling Headphones Pro X</h4>
          <p>Crystal-clear sound with immersive bass and up to 40 hours of battery life.</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐☆</p>
          <p><strong>Verdict:</strong> Best choice for music lovers and travelers.</p>
        </div>

        <div className="review-item">
          <h4>NextGen Smartphone Z5</h4>
          <p>Powerful performance with an AI camera and ultra-fast charging.</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
          <p><strong>Verdict:</strong> The most balanced flagship of the year.</p>
        </div>

        <div className="review-item">
          <h4>Smartwatch Pulse 3</h4>
          <p>Tracks sleep, heart rate, and stress — all in a sleek design.</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐☆</p>
          <p><strong>Verdict:</strong> Ideal for health-conscious users.</p>
        </div>

        <div className="review-item">
          <h4>Wireless Gaming Mouse GT-One</h4>
          <p>Lightweight and responsive with custom RGB lighting and 16000 DPI sensor.</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐☆</p>
          <p><strong>Verdict:</strong> Great for gamers seeking precision.</p>
        </div>

        <div className="review-item">
          <h4>4K Ultra Monitor VisionMax</h4>
          <p>Vivid colors and sharp visuals with eye-care technology.</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
          <p><strong>Verdict:</strong> Perfect for designers and professionals.</p>
        </div>

        <div className="review-item">
          <h4>Bluetooth Speaker BoomMini</h4>
          <p>Portable, waterproof, and surprisingly loud for its size.</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐☆</p>
          <p><strong>Verdict:</strong> Excellent travel companion.</p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
