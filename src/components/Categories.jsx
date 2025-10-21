import React from "react";

function Categories() {
  const categories = [
    {
      name: "Technology",
      posts: 25,
      description: "Stay updated with the latest trends in AI, software, and digital innovation.",
      icon: "💻",
    },
    {
      name: "Lifestyle",
      posts: 18,
      description: "Explore articles on health, fashion, food, and living your best life.",
      icon: "🌿",
    },
    {
      name: "Travel",
      posts: 12,
      description: "Discover new destinations, travel hacks, and cultural insights.",
      icon: "✈️",
    },
    {
      name: "Finance",
      posts: 8,
      description: "Learn smart ways to save, invest, and manage your money.",
      icon: "💰",
    },
    {
      name: "Education",
      posts: 10,
      description: "Guides and tips for students, teachers, and lifelong learners.",
      icon: "📚",
    },
    {
      name: "Reviews",
      posts: 15,
      description: "Honest reviews of gadgets, apps, and trending products.",
      icon: "⭐",
    },
  ];

  return (
    <section id="categories" className="categories-section">
      <div className="container">
        <h2 className="section-title">Browse Topics</h2>
        <p className="section-description">
          Explore a variety of categories to find articles that match your interests.
        </p>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <span className="category-icon">{cat.icon}</span>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <span className="post-count">{cat.posts} Posts</span>
            </div>
          ))}
        </div>

        <div className="browse-more">
          <button className="btn">View All Categories</button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
