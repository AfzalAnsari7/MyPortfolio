import React, { useState } from "react";
import "./App.css";
import Navebar_page from "./Navbar_page1";
import HeroSection from "./HeroSection";
import About from "./About";
import SkillsPage from "./SkillPage";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectCard from "./Project_Card";
import FooterSection from "./FooterSection";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  // toggle function
  const handleAboutToggle = () => {
    setShowAbout((prev) => !prev);
  };

  return (
    <>
      {/* Pass toggle callback to Navbar */}
      <Navebar_page onAboutClick={handleAboutToggle} />

      {/* Home Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* About Section */}
      {showAbout && (
        <section id="about">
          <About />
        </section>
      )}

      {/* Projects Section */}
      <section id="projects">
        <ProjectsCarousel />
      </section>



            {/* Skills Section */}
      <section id="skills">
        <SkillsPage />
      </section>
            <section id="projects">
           <ProjectCard />
      </section>

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

export default App;
