import React from "react";

function Tips() {
  const tipsData = [
    {
      title: "Use Browser DevTools",
      icon: "🧰",
      description:
        "Right-click on a webpage and choose ‘Inspect’. It helps you view and test HTML/CSS instantly without editing your main code.",
    },
    {
      title: "Optimize Your Images",
      icon: "🖼️",
      description:
        "Compress images using tools like TinyPNG or Squoosh before uploading. It makes your website load faster.",
    },
    {
      title: "Use Keyboard Shortcuts",
      icon: "⌨️",
      description:
        "In VS Code, use Ctrl + P to quickly open files, and Ctrl + / to comment or uncomment code lines faster.",
    },
    {
      title: "Responsive Design Testing",
      icon: "📱",
      description:
        "Check how your site looks on different screen sizes using Chrome DevTools' responsive mode.",
    },
    {
      title: "Use Semantic HTML",
      icon: "🧩",
      description:
        "Always use tags like <header>, <main>, <footer> instead of just <div> to make your code cleaner and SEO-friendly.",
    },
      {
      title: "Responsive Design Testing",
      icon: "📱",
      description:
        "Check how your site looks on different screen sizes using Chrome DevTools' responsive mode.",
    },
  ];

  return (
    <section id="tips" className="tips-section">
      <div className="container">
        <h2 className="section-title">💡 Quick Tips & Tricks</h2>
        <p className="section-description">
          Improve your web development workflow with these practical coding and design tips.
        </p>

        <div className="tips-grid">
          {tipsData.map((tip, index) => (
            <div key={index} className="tip-card">
              <span className="tip-icon">{tip.icon}</span>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tips;
