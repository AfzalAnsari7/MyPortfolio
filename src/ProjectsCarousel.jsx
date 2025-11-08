import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./ProjectsCarousel.css";
import ticktack from "./assets/tictach_toe.png"
import ecommerce from "./assets/Ecommerce.jpg"
import carracing from "./assets/images.png"

const projectDetails = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-stack E-commerce Web Application built using React (Vite), Node.js, Express, and MongoDB. It includes user authentication, an admin panel, product management, shopping cart, and checkout functionality. Deployed on Netlify and Render.",
    img: ecommerce,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://smart-e-commerce.netlify.app/",
    github: "https://github.com/AfzalAnsari7/E-commerce-Website",
  },
  {
    id: 2,
    title: "Car Racing Game",
    description:
      "A 2D car racing game built using HTML, CSS, and JavaScript. Players control a car, avoid obstacles, and earn points. Playable on both desktop and mobile devices.",
    img: carracing,
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://carracinggamemani.netlify.app/",
    github: "https://github.com/AfzalAnsari7/Car_Racing_Game",
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description:
      "A simple implementation of the Tic Tac Toe game using C++. Built for two players to compete, showcasing loops, logic, and conditions in game development.",
    img: ticktack,
    technologies: ["C++"],
    live: "",
    github: "https://github.com/AfzalAnsari7/Tic-Tac-Toe-games",
  },
];

function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = projectDetails[activeIndex];

  return (
    <section id="projects" className="myprojects-section">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-light">My Projects</h2>
        <p className="text-secondary">
          A showcase of my featured and recent works
        </p>
      </div>

      {/* 🖼️ Carousel */}
      <div className="carousel-container">
        <Carousel
          interval={4000}
          activeIndex={activeIndex}
          onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          className="projects-carousel shadow-lg"
        >
          {projectDetails.map((project) => (
            <Carousel.Item key={project.id}>
              <div className="project-slide text-center">
                <img
                  src={project.img}
                  className="project-image"
                  alt={project.title}
                />
                <Carousel.Caption className="project-caption">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    {project.live && (
                      <Button
                        variant="primary"
                        href={project.live}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    )}
                    <Button
                      variant="outline-light"
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* 📘 Project Info */}
      <div className="project-info-box mt-5 text-light">
        <h4>{currentProject.title}</h4>
        <p>{currentProject.description}</p>
        <div className="tech-list">
          {currentProject.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsCarousel;
