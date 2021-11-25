import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound4O4 = () => {
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
      <div>
        <div className="not-found"></div>
        <h2 style={{ color: "#c0c0c0", overflow: "hidden" }}>
          Ooops An Error Occured, Check your Connections
        </h2>
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
      </div>
    </motion.div>
  );
};

export default NotFound4O4;
