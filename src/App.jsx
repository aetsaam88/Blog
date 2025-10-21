import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Latest from "./components/Latest";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import Tips from "./components/Tips";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
