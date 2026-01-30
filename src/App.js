// src/App.js
import React from 'react';
import './App.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact" className="cta">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-content">
        <h1>Daniell Tec Puhawan</h1>
        {/*<h1>Hello, I'm Brooklyn Gilbert</h1>*/}
        <p>I'm a Freelance UX/UI Designer and Developer based in London, England. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
        <button className="cta">Say Hello!</button>
      </div>
      <div className="hero-image">
        <img 
          src="https://res.cloudinary.com/dfguuwyla/image/upload/cv-copy_d6ockt.jpg" 
          alt="Brooklyn Gilbert" 
        />
      </div>
    </div>
  </section>
);

/*
const Stats = () => (
  <section className="stats">
    <div className="container">
      <div className="stat-item">
        <div className="stat-number">15 Y</div>
        <div className="stat-label">Years Experience</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">250+</div>
        <div className="stat-label">Projects Completed</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">58</div>
        <div className="stat-label">Happy Clients</div>
      </div>
    </div>
  </section>
);

*/

const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; 2026 Portfolio. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
      {/*  <Stats />  */}
      </main>
      <Footer />
    </div>
  );
}

export default App;