import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import "./FooterSection.css";

function FooterSection() {
  return (
    <footer className="footer-section py-5">
      <Container className="text-center">
        <h3 className="fw-bold mb-3">Afzal Ansari</h3>
        <p className="text-secondary mb-4">
          Front-End Developer | Building Interactive & Responsive Web
          Experiences
        </p>
        <div className="social-icons d-flex justify-content-center gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/afzal-ansari-06a09b255"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/AfzalAnsari7"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a href="mailto:afzalansarisaddam@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>

        <p className="small text-secondary">
          © {new Date().getFullYear()} Afzal Ansari. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default FooterSection;
