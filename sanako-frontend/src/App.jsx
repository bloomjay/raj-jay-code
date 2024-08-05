import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Section2 />
      <Testimonials />
    </div>
  );
}

export default App;
