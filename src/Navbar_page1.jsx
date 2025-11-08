import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar_page.css";

function Navebar_page({ onAboutClick }) {
  return (
    <Navbar expand="lg" className="navbar-custom fixed-top shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          Portfolio.
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">
              Home
            </Nav.Link>

            {/* <Nav.Link
              href="#about"
              className="nav-link-custom"
              onClick={(e) => {
                e.preventDefault();
                onAboutClick(); // toggles About section
              }}
            >
              About
            </Nav.Link> */}

            <Nav.Link href="#skills" className="nav-link-custom">
              Skills
            </Nav.Link>

            <Nav.Link href="#projects" className="nav-link-custom">
              Projects
            </Nav.Link>

            <Nav.Link href="tel:+918920364955" className="nav-link-custom">
              Contact
            </Nav.Link>

            <NavDropdown title="More" id="basic-nav-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onAboutClick();
                }}
              >
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="tel:+918920364955">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar_page;
