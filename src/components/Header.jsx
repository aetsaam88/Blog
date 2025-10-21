import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">My Big Blog</div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav>
        <ul className={menuOpen ? "active" : ""}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/latest">Latest</NavLink></li>
          <li><NavLink to="/reviews">Reviews</NavLink></li>
          <li><NavLink to="/categories">Topics</NavLink></li>
          <li><NavLink to="/tips">Tips</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
