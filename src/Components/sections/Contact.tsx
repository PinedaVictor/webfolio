import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useTransition, animated } from "react-spring";
import { ContactForm } from "../ContactForm";
import { ResumeForm } from "../ResumeForm";

export const Contact: React.FC = () => {
  const [contactForm, toggleContactForm] = useState(false);
  const [resumeForm, toggleResumeForm] = useState(false);
  const [accentDiv, setAccentDiv] = useState<Array<number>>([]);

  const GenAccentDivs = () => {
    const tempArr = [];
    for (let i = 0; i < 20; i++) {
      tempArr.push(((i + 1) * 100) / 20);
    }
    setAccentDiv(tempArr);
  };

  useEffect(() => {
    GenAccentDivs();
  }, []);

  const contactFormTransition = useTransition(contactForm, null, {
    config: {
      duration: 450,
    },
    from: {
      opacity: 0,
      width: "100%",
      backgroundColor: "black",
      height: "30rem",
      position: "absolute",
      left: "0",
      top: "-25rem",
      overflow: "hidden",
      borderRadius: "25px",
      boxShadow: "10px 10px 20px black, -10px 10px 20px black",
    },
    enter: {
      opacity: 1,
    },
    leave: { opacity: 0 },
  });

  const resumeFormTransition = useTransition(resumeForm, null, {
    config: {
      duration: 450,
    },
    from: {
      opacity: 0,
      width: "100%",
      backgroundColor: "black",
      height: "30rem",
      position: "absolute",
      right: "0",
      overflow: "hidden",
      borderRadius: "25px",
      boxShadow: "10px 10px 20px black, -10px 10px 20px black",
    },
    enter: {
      opacity: 1,
    },
    leave: { opacity: 0 },
  });

  return (
    <Container id="contactSectionWrapper" fluid>
      <Row>
        <Col id="contactSectionHeader" xs={12} sm={12} md={12} lg={12} xl={12}>
          <p id="contactHeaderText">Contact</p>
          <div id="contactIconWrapper">
            <BiMessageRoundedDetail
              id="contactChatIcon"
              size="5rem"
              color="white"
            />
          </div>
        </Col>
      </Row>
      <Row id="contactOptionsWrapper">
        <Col
          className="emailResumeContactCols"
          xs={12}
          sm={12}
          md={7}
          lg={6}
          xl={6}
        >
          <Button
            id="emailContactButton"
            onClick={() => toggleContactForm(!contactForm)}
          >
            <p className="contactButtonText">Email</p>
          </Button>
          <div>
            {accentDiv.map((item, index) => (
              <div
                key={index}
                className="linearGradientAccent"
                style={{
                  height: "10px",
                  marginTop: "10px",
                  marginBottom: "5px",
                  borderRadius: "20px",
                  width: `${item}%`,
                }}
              />
            ))}
          </div>
          {contactFormTransition.map(
            ({ item, key, props }) =>
              item && (
                <Col key={key} sm={12}>
                  <animated.div key={key} style={props}>
                    <ContactForm
                      toggleForm={() => toggleContactForm(!ContactForm)}
                    />
                  </animated.div>
                </Col>
              )
          )}
        </Col>
        <Col
          className="emailResumeContactCols"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          <div className="linearGradientAccent" id="getResumeButtonWrapper">
            <Button
              id="getResumeButton"
              onClick={() => toggleResumeForm(!resumeForm)}
            >
              <p className="contactButtonText">Get Resume</p>
            </Button>
          </div>
          {resumeFormTransition.map(
            ({ item, key, props }) =>
              item && (
                <Col key={key} sm={12}>
                  <animated.div key={key} style={props}>
                    <ResumeForm
                      toggleForm={() => toggleResumeForm(!resumeForm)}
                    />
                  </animated.div>
                </Col>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};
