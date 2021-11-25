import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const LandingPage = () => {
  return (
    <motion.div
      className="container"
      style={{ background: "black" }}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: "0.3", stiffness: "120" }}
    >
      <Container>
        <Row>
          <Col md={12}>
            <div className="home-image text-center"></div>
          </Col>
        </Row>
      </Container>
      <div className="home">
        <motion.div
          className="title"
          style={{ overflow: "hidden" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: "0.5" }}
        >
          <p className="glowing-text-home">
            Software Engineer, Technical Writer
          </p>
        </motion.div>
        <div className="my-2" style={{ fontSize: "30px", overflow: "hidden" }}>
          <span className="p-3 ">
            <a
              href="https://www.twitter.com/FemiObadimu3"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faTwitter} className="home-icon" />
            </a>
          </span>

          <span className="p-3" style={{ fontSize: "30px" }}>
            <a
              href="https://api.whatsapp.com/send?phone=2349034664244&text=Hello%20I%20am%20Femi%20Obadimu"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="home-icon" />
            </a>
          </span>
          <span className="p-3 " style={{ fontSize: "30px" }}>
            <a
              href="https://www.instagram.com/devsinstitute/"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faInstagram} className="home-icon" />
            </a>
          </span>

          <span className="p-3" style={{ fontSize: "30px" }}>
            <a
              href="https://www.linkedin.com/in/femi-obadimu-7021171b7/"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faLinkedin} className="home-icon" />
            </a>
          </span>
          <span className="p-3" style={{ fontSize: "30px" }}>
            <a
              href="https://github.com/FemiObadimu"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faGithub} className="home-icon" />
            </a>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
