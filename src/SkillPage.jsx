import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SkillsPage.css";

function SkillsPage() {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="skills-section1 py-5" id="skills">
      <h2 className="text-center fw-bold mb-5">My Skills</h2>

      <div className="container d-flex justify-content-center">
        {!showDetails ? (
          <Card
            className="main-skill-card shadow-lg text-center"
            onClick={handleCardClick}
          >
            <Card.Body>
              <Card.Title className="fs-3 fw-bold mb-3">
                Click to Explore My Skills
              </Card.Title>
              <Card.Text className="text-muted">
                Languages, Frameworks, and Tools I’ve learned and used...
              </Card.Text>
              <Button variant="outline-info" className="custom-btn">
                Explore
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <div className="row justify-content-center g-4">
            {/* Languages Section */}
            <div className="col-md-4">
              <Card className="skill-card shadow-lg border-0 h-100">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3 text-info">
                    🧠 Programming Languages (with DSA)
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li>• C</li>
                    <li>• C++</li>
                    <li>• HTML</li>
                    <li>• JavaScript</li>
                    <li>• Python (Basic)</li>
                    <li>• Data Structures & Algorithms</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>

            {/* Frameworks Section */}
            <div className="col-md-4">
              <Card className="skill-card shadow-lg border-0 h-100">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3 text-info">
                    ⚙️ Frameworks & Libraries
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li>• React.js</li>
                    <li>• Bootstrap</li>
                    <li>• Express.js</li>
                    <li>• Node.js</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>

            {/* Tools & Other Technologies */}
            <div className="col-md-4">
              <Card className="skill-card shadow-lg border-0 h-100">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3 text-info">
                    🛠️ Development & Tools
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li>• MongoDB</li>
                    <li>• MySQL</li>
                    <li>• Git & GitHub</li>
                    <li>• VS Code</li>
                    <li>• Excel</li>
                    <li>• Postman</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>

            {/* Back Button */}
            <div className="text-center mt-4">
              <Button
                variant="outline-light"
                onClick={handleCardClick}
                className="custom-btn-outline"
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillsPage;
