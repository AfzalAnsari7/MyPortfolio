import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./HeroSection.css";
import profilePic from "./assets/afzal.png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Hello, It's Me</h3>
        <h1>Afzal</h1>
        <h2>
          And I'm a <span>Frontend Developer</span>
        </h2>
        <p>
          I’m a passionate Frontend Software Developer from Gurgaon building
          modern, responsive, and user-friendly websites with HTML, CSS,
          JavaScript, React.js, and Bootstrap. 10 months’ experience at Indus
          Towers as Associate Frontend Developer creating client-focused
          components and solutions. Skilled in C++ and Data Structures, writing
          efficient, optimized code. Always exploring new technologies and
          turning ideas into high-quality web applications.
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/afzal-ansari-06a09b255">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/AfzalAnsari7">
            <FaGithub />
          </a>
        </div>

        <a
          href="/Afzal__Ansari_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Down....CV
        </a>
      </div>

      <div className="hero-image">
        <div className="image-border">
          <img src={profilePic} alt="Afzal" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
