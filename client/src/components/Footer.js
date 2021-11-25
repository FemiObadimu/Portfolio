import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Container style={{ padding: "20px 0px" }}>
      <Row>
        <Col
          className="text-center"
          style={{ color: "#c0c0c0", overflow: "hidden" }}
        >
          Copyright <FontAwesomeIcon icon={faCopyright} /> {date} | All right
          reserved
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
