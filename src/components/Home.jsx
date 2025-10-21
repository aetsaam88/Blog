import React from "react";

function Home() {
  return (
    <div className="home-page">

      {/* ===== Hero Section ===== */}
      <section className="hero">
        <h1>Welcome to My Big Blog</h1>
        <p>
          Discover powerful insights, deep analysis, and practical tips across 
          technology, lifestyle, travel, and productivity — all in one place.
        </p>
        <button className="btn-primary">Explore Latest Posts</button>
      </section>

      {/* ===== About Section ===== */}
      <section className="about">
        <h2>About Our Blog</h2>
        <p>
          My Big Blog was founded to share valuable knowledge and ideas that inspire 
          readers to learn, grow, and stay ahead in the digital world. Whether you’re 
          a tech enthusiast, traveler, or creative mind — there’s something here for you!
        </p>
        <p>
          Our mission is simple: provide trustworthy, easy-to-read, and actionable content 
          that helps you improve your lifestyle, productivity, and digital presence.
        </p>
      </section>

      {/* ===== Featured Articles Section ===== */}
      <section className="featured">
        <h2>Featured Articles</h2>
        <div className="post-grid">
          <article className="post-card">
            <h3>The Future of Web Development</h3>
            <p>
              Explore the evolution of front-end technologies and how AI is shaping 
              the coding world.
            </p>
            <a href="/latest" className="read-more">Read More →</a>
          </article>

          <article className="post-card">
            <h3>10 Ways to Boost Productivity</h3>
            <p>
              From better time management to digital detox, learn how to get more done 
              in less time.
            </p>
            <a href="/latest" className="read-more">Read More →</a>
          </article>

          <article className="post-card">
            <h3>Minimalist Travel Guide</h3>
            <p>
              Learn how to pack light, plan efficiently, and enjoy stress-free trips 
              anywhere in the world.
            </p>
            <a href="/latest" className="read-more">Read More →</a>
          </article>

          <article className="post-card">
            <h3>Mastering Remote Work</h3>
            <p>
              Tips to stay productive, focused, and mentally healthy while working from home.
            </p>
            <a href="/latest" className="read-more">Read More →</a>
          </article>

          <article className="post-card">
            <h3>Financial Planning for Beginners</h3>
            <p>
              Understand the basics of budgeting, saving, and building a strong financial future.
            </p>
            <a href="/latest" className="read-more">Read More →</a>
          </article>

          <article className="post-card">
            <h3>Top 10 Coding Tools for 2025</h3>
            <p>
              Discover new frameworks and extensions to improve your web development workflow.
            </p>
            <a href="/latest" className="read-more">Read More →</a>
          </article>
        </div>
      </section>

      {/* ===== Popular Categories Section ===== */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <h4>💻 Technology</h4>
            <p>Stay updated with the latest software trends and AI innovations.</p>
          </div>
          <div className="category-card">
            <h4>🌍 Travel</h4>
            <p>Guides, hacks, and personal stories from explorers worldwide.</p>
          </div>
          <div className="category-card">
            <h4>💡 Lifestyle</h4>
            <p>Improve daily habits and boost your overall well-being.</p>
          </div>
          <div className="category-card">
            <h4>💰 Finance</h4>
            <p>Smart money tips for students, professionals, and entrepreneurs.</p>
          </div>
          <div className="category-card">
            <h4>🎮 Gaming</h4>
            <p>Latest updates, console reviews, and pro gaming tips.</p>
          </div>
          <div className="category-card">
            <h4>📚 Education</h4>
            <p>Learn new skills, boost your knowledge, and grow every day.</p>
          </div>
        </div>
      </section>

      {/* ===== Tips Section ===== */}
      <section className="tips">
        <h2>Quick Tips of the Day</h2>
        <ul>
          <li>💡 Always back up your work using Git or cloud storage.</li>
          <li>📅 Set daily goals and track progress at night.</li>
          <li>🧘 Take small breaks to refresh your focus and creativity.</li>
          <li>📱 Limit screen time before bed for better sleep quality.</li>
        </ul>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="testimonials">
        <h2>What Readers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “I love how this blog combines deep insights with easy-to-understand writing. 
              It’s my go-to for tech news and motivation!”
            </p>
            <h4>- Ayesha Khan</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Great layout, practical advice, and a positive community. I’ve learned 
              so much about web development here.”
            </p>
            <h4>- Bilal Ahmed</h4>
          </div>
        </div>
      </section>

      {/* ===== Newsletter Section ===== */}
      <section className="newsletter">
        <h2>Join Our Community</h2>
        <p>Subscribe to get new blog posts, tutorials, and updates delivered to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      </section>

    </div>
  );
}

export default Home;
