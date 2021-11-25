import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Send from "./Send";
import NotFound4O4 from "./NotFound4O4";
import Loading from "./Loading";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState(true);
  const [sent, setSent] = useState(false);

  const { name, email, phone, subject, message } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setForm(false);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/send");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      if (xhr.responseText === "success") {
        setLoading(false);
        setSent(true);

      } else {
        setLoading(false);
        setError(true);
      }
    };

    setContact({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    xhr.send(JSON.stringify(contact));
  };

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: "0.1", stiffness: "120" }}
    >
      <Container className="container">
        <Row>
          <Col md={12}>
            {loading && <Loading />}
            {error && (
              <div className="text-center">
                <NotFound4O4 />
              </div>
            )}

            {sent && <Send />}

            {form && (
              <div
                className="contact-form"
                style={{
                  padding: "30px 0px",
                  color: "#c0c0c0",
                  overflow: "hidden",
                }}
              >
                <Col md={12} className="text-center">
                  <div className="contact-image"></div>
                </Col>
                <Col>
                  <h5 style={{ color: "#c0c0c0", overflow: "hidden" }}>
                    Contact{" "}
                  </h5>
                  <h2 style={{ color: "#c0c0c0", overflow: "hidden" }}>
                    Now That You're Here
                  </h2>
                </Col>

                <Col>
                  <Form autoComplete="off" onSubmit={onSubmit} className="form">
                    <Row>
                      <Col md={12}>
                        <input
                          autoComplete="off"
                          type="text"
                          placeholder="Full Name"
                          name="name"
                          required
                          value={name}
                          onChange={onChange}
                          className="my-3 form-control "
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          autoComplete="off"
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          value={email}
                          required
                          onChange={onChange}
                          className="my-3 form-control"
                        />
                      </Col>

                      <Col md={12} className="block">
                        <input
                          type="text"
                          autoComplete="off"
                          placeholder="Phone Number"
                          name="phone"
                          value={phone}
                          required
                          onChange={onChange}
                          className="my-3 form-control"
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          type="text"
                          autoComplete="off"
                          placeholder="Subject"
                          required
                          name="subject"
                          value={subject}
                          onChange={onChange}
                          className="my-3 form-control"
                        />
                      </Col>
                      <Col>
                        <textarea
                          autoComplete="off"
                          name="message"
                          cols="137"
                          rows="7"
                          type="text"
                          required
                          placeholder="Message"
                          value={message}
                          onChange={onChange}
                          className="my-3 p-3 form-control"
                        ></textarea>
                      </Col>
                    </Row>

                    <Button type="submit" className="btn-block btn-gradient">
                      <h5
                        className="contact-submit"
                        style={{ color: "#c0c0c0", overflow: "hidden" }}
                      >
                        Send Message
                      </h5>
                    </Button>
                  </Form>
                </Col>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;
