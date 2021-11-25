import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBars, faTerminal, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";

const Navs = () => {
  const [toggle, setToggle] = useState(false);
  const onAdd = () => {
    setToggle(!toggle);
  };
  return (
    <Container className="py-2" style={{ background: "black" }}>
      <Navbar expand="lg">
        <Navbar.Brand>
          <div className="logo " style={{ overflow: "hidden" }}>
            <Link to="/" className="link">
              <span className="logo-text">
                Stack{" "}
                <FontAwesomeIcon icon={faTerminal} color="rgb(216, 4, 50)" />
              </span>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          id="toggle"
          onClick={onAdd}
        >
          <FontAwesomeIcon
            icon={toggle ? faTimes : faBars}
            style={{ color: "white" }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/about" className="link">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services" className="link">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/portfolio" className="link">
                PortFolio
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navs;
