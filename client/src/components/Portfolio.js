import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: "0.1", stiffness: "120" }}
    >
      <Container
        className="container"
        style={{ color: "#c0c0c0", overflow: "hidden", padding: "30px 40px" }}
      >
        <Row>
          <Col>
            <h1
              style={{
                overflow: "hidden",
              }}
            >
              Portfolio's
            </h1>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Portfolio;
