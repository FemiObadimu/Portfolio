import {
  faAngleDoubleLeft,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";

const Send = () => {
  return (
    <motion.div
      className="container text-center"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "200px 0px",
        alignItems: "center",
        color: "white",
      }}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: "120" }}
    >
      <div className="container text-center">
        <h2 style={{ color: "#c0c0c0", overflow: "hidden" }}>
          Email Sent{" "}
          <FontAwesomeIcon
            icon={faMailBulk}
            style={{ color: "rgb(216, 4, 50)" }}
          />
        </h2>
        <Container>
          
          <Row>
            <Col md={12}>
              <Button className="btn-md btn-send">
                <Link to="/" className="link" style={{ color: "#9e9d9d" }}>
                  <FontAwesomeIcon
                    icon={faAngleDoubleLeft}
                    style={{ background: "none" }}
                  />
                  <span
                    style={{
                      fontSize: "25px",
                      background: "none",
                      color: "#9e9d9d",
                    }}
                  >
                    Back to Home
                  </span>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </motion.div>
  );
};

export default Send;
