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
          I’m a passionate Frontend Software Developer who builds modern,
          responsive, and user-friendly websites using HTML, CSS, JavaScript,
          React.js, and Bootstrap. I focus on creating visually appealing
          interfaces and smooth user experiences. Along with strong frontend
          skills, I also have a solid understanding of C++ and Data Structures,
          which helps me to write efficient and optimized code. I’m always eager to
          learn new technologies and turn creative ideas into functional,
          high-quality web applications.
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
