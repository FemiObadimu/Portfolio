import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessKnight,
  faWifi,
  faFireAlt,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <motion.div
      className="container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: "0.2", stiffness: "120" }}
    >
      <div
        className="introduction"
        style={{ padding: "60px 20px", background: "black" }}
      >
        <Col md={12} className="col-md-12 text-center">
          <div className="home-image text-center"></div>
        </Col>
        
        <div className="name">
          <p style={{ overflow: "hidden" }}>Femi Obadimu,</p>
        </div>
        <div className="title" style={{ overflow: "hidden" }}>
          <p className="glowing-text" style={{ overflow: "hidden" }}>
            Software Engineer, Technical Writer
          </p>
        </div>
        <div
          className="intro-text"
          style={{ color: "#c0c0c0", overflow: "hidden" }}
        >
          I'm a Developer based in Lagos, Nigeria with over 3 years experience
          building web applications. I have a passion for learning and problem
          solving. My passion and my career focus, developing applications for
          the web has been a drive
        </div>
        <div className="text-center" style={{ overflow: "hidden" }}>
          <span className="p-3 " style={{ fontSize: "25px" }}>
            <a
              href="https://www.twitter.com/femiobadimu3"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faTwitter} className="home-icon" />
            </a>
          </span>

          <span className="p-3" style={{ fontSize: "25px" }}>
            <a
              href="https://api.whatsapp.com/send?phone=2349034664244&text=just%20checking%20your%20app"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="home-icon" />
            </a>
          </span>
          <span className="p-3 " style={{ fontSize: "25px" }}>
            <a
              href="https://www.instagram.com/devsinstitute/"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faInstagram} className="home-icon" />
            </a>
          </span>

          <span className="p-3" style={{ fontSize: "25px" }}>
            <a
              href="https://www.linkedin.com/in/femi-obadimu-7021171b7/"
              rel="noreferrer"
              target="_blank"
              className="linksicon"
            >
              <FontAwesomeIcon icon={faLinkedin} className="home-icon" />
            </a>
          </span>
          <span className="p-3" style={{ fontSize: "25px" }}>
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
        <div className="intro-btn">
          <div>
            <Button className=" btn-md btn-text text-center">
              GET MY RESUME
            </Button>
          </div>
          <div>
            <Link to="/contact">
              <Button className="btn-md btn-text">CONTACT ME</Button>
            </Link>
          </div>
        </div>
      </div>

      <hr />

      <div
        className="container"
        style={{ padding: "60px 20px", overflow: "hidden" }}
      >


        <div className="text-center">
          <div className="img-about"></div>
        </div>
        <h2 style={{ color: "#c0c0c0", overflow: "hidden" }}>Introduction</h2>

        <h3 style={{ color: "#c0c0c0" }} className="py-3">
          Software Engineer
        </h3>
        <p style={{ color: "#c0c0c0", overflow: "hidden" }}>
          I give essence to work ethics and I am a great advocate of Crowdsource
          by Google (of which I am an Influencer). I love meeting new people and
          believe strongly in the importance of communities. I am also an avid
          lover of all forms of art, music being my favorite. I also enjoy
          Technical writing . You can read my articles on{" "}
          <i>
            <a
              href="https://medium.com/@FemiObadimu"
              rel="noreferrer"
              target="_blank"
              className="glowing-credit "
            >
              Medium
            </a>
          </i>{" "}
          and{" "}
          <i>
            <a
              href="https://dev.to/femiobadimu"
              rel="noreferrer"
              target="_blank"
              className="glowing-credit"
            >
              Dev.to
            </a>
          </i>{" "}
          . I am Critical Thinker, and I have grown to learn how to thrive under
          pressure. I am made for more
        </p>
      </div>

      <hr />

      <div className="container" style={{ padding: "60px 20px" }}>
        <h2 style={{ color: "#c0c0c0", overflow: "hidden" }}>Watchwords</h2>
        <Row className="text-center">
          <Col md={3} className="py-4">
            <span className="credit">
              <FontAwesomeIcon
                icon={faChessKnight}
                style={{ fontSize: "50px", color: "white" }}
              />
              <h4
                className="glowing-credit"
                style={{ fontWeight: "600", padding: "10px 0px" }}
              >
                Diligence
              </h4>
            </span>
          </Col>
          <Col md={3} className="py-4">
            <span className="credit">
              <FontAwesomeIcon
                icon={faFireAlt}
                style={{ fontSize: "50px", color: "white" }}
              />
              <h4
                className="glowing-credit"
                style={{ fontWeight: "600", padding: "10px 0px" }}
              >
                {" "}
                Community
              </h4>
            </span>
          </Col>
          <Col md={3} className="py-4">
            <span className="credit">
              <FontAwesomeIcon
                icon={faWifi}
                style={{ fontSize: "50px", color: "white" }}
              />
              <h4
                className="glowing-credit"
                style={{ fontWeight: "600", padding: "10px 0px" }}
              >
                Available
              </h4>
            </span>
          </Col>
          <Col md={3} className="py-4">
            <span className="credit">
              <FontAwesomeIcon
                icon={faNetworkWired}
                style={{ fontSize: "50px", color: "white" }}
              />
              <h4
                className="glowing-credit"
                style={{ fontWeight: "600", padding: "10px 0px" }}
              >
                Versatile
              </h4>
            </span>
          </Col>
        </Row>
      </div>
      <hr className="hr" />
      <div className="container">
        <h2 style={{ color: "#c0c0c0", overflow: "hidden" }}>
          Technologies i've worked with
        </h2>

        <Row>
          <Col md="12" className="text-center">
            <div className="about-images1 col-md-12"></div>
            <div className="about-images2 col-md-12"></div>

            {/* <div className="text-center">
              <video controls autoPlay>
                <source src={team} type="video/webm" />
              </video>
            </div> */}
          </Col>
        </Row>
        {/* <Row>
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faHtml5} className="icon-html" />
              <span className="technology">HTML</span>
            </div>
          </Col>
          <Col md={4} csm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faCss3Alt} className="icon-css" />
              <span className="technology">CSS</span>
            </div>
          </Col>{" "}
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faBootstrap} className="icon-bootstrap" />
              <span className="technology">Bootstrap</span>
            </div>
          </Col>{" "}
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faGitSquare} className="icon-git" />
              <span className="technology">Git</span>
            </div>
          </Col>{" "}
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faJs} className="icon-js" />
              <span className="technology">Javascript</span>
            </div>
          </Col>{" "}
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faReact} className="icon-react" />
              <span className="technology">React JS</span>
            </div>
          </Col>{" "}
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faVuejs} className="icon-vue" />
              <span className="technology">Vue JS</span>
            </div>
          </Col>{" "}
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faAngular} className="icon-angular" />
              <span className="technology">Angular JS</span>
            </div>
          </Col>{" "}
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faNodeJs} className="icon-node" />
              <span className="technology">Node JS</span>
            </div>
          </Col>{" "}
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faLinode} className="icon-express" />
              <span className="technology">Express</span>
            </div>
          </Col>
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faTerminal} className="icon-bash" />
              <span className="technology">Bash</span>
            </div>
          </Col>
          <Col md={4} sm={4}>
            <div class="icon-box">
              <FontAwesomeIcon icon={faJsfiddle} className="icon-cloud" />
              <span className="technology">Mongo DB</span>
            </div>
          </Col>
        </Row> */}
        <hr />

        <Row style={{ padding: "120px 0px" }}></Row>
      </div>
    </motion.div>
  );
};

export default About;
