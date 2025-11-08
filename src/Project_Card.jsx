import React from "react";
import Card from "react-bootstrap/Card";
import "./ProjectCard.css";

import ecommerce from "./assets/Ecommerce.jpg";
import carracing from "./assets/images.png";
import tictactoe from "./assets/tictach_toe.png";
import netflix from "./assets/netflix.png"

function ProjectCard() {
  const projects = [
    {
      title: "E-commerce Web Application",
      desc: "A full-stack e-commerce platform built using React.js, Node.js, and MongoDB with JWT authentication and admin panel. Implements secure shopping, REST APIs, dynamic routing, and a simulated payment gateway.",
      img: ecommerce,
      live: "https://smart-e-commerce.netlify.app/",
      github: "https://github.com/AfzalAnsari7/E-commerce-Website",
      tech: ["React.js", "Node.js", "MongoDB", "JWT", "Bootstrap"],
    },
    {
      title: "2D Car Racing Game",
      desc: "An interactive 2D racing game built with HTML, CSS, and JavaScript, playable on both desktop and mobile.",
      img: carracing,
      live: "https://carracinggamemani.netlify.app/",
      github: "https://github.com/AfzalAnsari7/Car_Racing_Game",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Netflix Clone",
      desc: "A front-end clone of Netflix created using HTML, CSS, and JavaScript, focusing on a responsive movie grid and hover effects.",
      img: netflix,
      live: null, // Removed live link
      github: "#",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Tic-Tac-Toe Game",
      desc: "A logic-based console game developed in C++, featuring turn-based gameplay and win-check algorithms. Highlights structured coding with loops, conditionals, and modular function design.",
      img: tictactoe,
      live: null, // Removed live link
      github: "https://github.com/AfzalAnsari7/Tic-Tac-Toe-games",
      tech: ["C++"],
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="text-center fw-bold mb-5">My Projects</h2>
      <div className="container">
        <div className="row justify-content-center g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-5 d-flex justify-content-center">
              <Card className="project-card shadow-lg border-0">
                <Card.Img variant="top" src={project.img} />
                <Card.Body className="project-content">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>

                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>

                  <div className="buttons-group">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      GitHub
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
