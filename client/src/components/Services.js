import {
  faBolt,
  faCloud,
  faCode,
  faCogs,
  faDatabase,
  faLaptopCode,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: "0.1", stiffness: "120" }}
    >
      <Container style={{ padding: "30px 40px", color: "#c0c0c0" }}>
        <Row>
          <Col>
            <h1 style={{ overflow: "hidden" }}>
              Skills and Services{" "}
              <FontAwesomeIcon icon={faCogs} className="glowing-credit" />
            </h1>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={4}>
            <div className="service-bg">
              <div className="service-icon">
                <FontAwesomeIcon icon={faLaptopCode} className="icon-services" />
              </div>
              <h2 className="service-tag">Frontend Development</h2>
              <p className="service-text">
                By leveraging on my proficient knowledge of HTML, CSS, and
                modern JavaScript, I can build intuitive frontend interfaces
                with amazing user experiences.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-bg">
              <div className="service-icon">
                <FontAwesomeIcon icon={faCode} className="icon-services" />
              </div>
              <h2 className="service-tag">Backend Development</h2>
              <p className="service-text">
                With a solid grasp of Python and NodeJs I'm able to work the
                backend logic of any application like magic and turn ordinary
                webpages into web apps.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-bg">
              <div className="service-icon">
                <FontAwesomeIcon icon={faLink} className="icon-services" />
              </div>
              <h2 className="service-tag">API Integration</h2>
              <p className="service-text">
                Need to make an app with a web-based server? My knowledge of
                RESTful APIs development is sufficient enough to make that
                happen.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={4}>
            <div className="service-bg">
              <div className="service-icon">
                <FontAwesomeIcon icon={faBolt} className="icon-services" />
              </div>
              <h2 className="service-tag">Optimization</h2>
              <p className="service-text">
                Nobody likes it slow... So, let's add a programming equavalent
                of NO2 gas into your frontend or backend logic and make it go
                fast...
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-bg">
              <div className="service-icon">
                <FontAwesomeIcon icon={faDatabase} className="icon-services" />
              </div>
              <h2 className="service-tag">Database Management</h2>
              <p className="service-text">
                From Relational to Object-based, I've got a quite intermediate
                knowledge of databases and I can help you manage them.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-bg">
              <div className="service-icon">
                <FontAwesomeIcon icon={faCloud} className="icon-services" />
              </div>
              <h2 className="service-tag">Frameworks & Extentions</h2>
              <p className="service-text">
                I smell exotic. I guess you're looking to make your app a little
                more sophisticating, right? Well, you're in for a treat cos I've
                got the juice to make that happen.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Services;
