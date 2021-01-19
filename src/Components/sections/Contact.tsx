import React, { useState, useEffect, SyntheticEvent } from "react";
import "../../Styles/main.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useTransition, animated } from "react-spring";

export const Contact: React.FC = () => {
  const [contactForm, toggleContactForm] = useState(false);
  const [resumeForm, toggleResumeForm] = useState(false);
  const [accentDiv, setAccentDiv] = useState<Array<number>>([]);

  const GenAccentDivs = () => {
    const tempArr = [];
    for (let i = 0; i < 20; i++) {
      // tempArr.push(Math.random() * (100 - 25) + 25);
      tempArr.push(((i + 1) * 100) / 20);
      // console.log("index:::", i);
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
  // React.FormEvent<HTMLFormElement>
  // SyntheticBaseEvent
  const submitContactForm = (event: any) => {
    event.preventDefault();
    const { name, email, subject, message } = event.target.elements;
    // const contactForm = event.currentTarget.elements;

    // console.log("Calling onSubmit with::::", name.value);
    console.log("THis is the event::::");
  };

  const ContactForm = () => {
    return (
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
          height: "100%",
          borderRadius: "25px",
          margin: "auto",
          top: "0",
        }}
      >
        <Button
          style={{
            width: "3rem",
            height: "3rem",
            float: "right",
            marginBottom: "10px",
            border: "2px solid white",
            backgroundColor: "black",
            borderRadius: "25px",
            marginRight: "3%",
          }}
          onClick={() => toggleContactForm(!contactForm)}
        >
          <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
        </Button>
        <Form
          onSubmit={submitContactForm}
          style={{
            maxWidth: "35rem",
            margin: "auto",
            marginTop: "15px",
          }}
        >
          <Form.Group controlId="name">
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Text
              style={{
                color: "white",
                letterSpacing: "1.5px",
                paddingBottom: "3px",
                paddingLeft: "2.5px",
              }}
            >
              {"Your email will NOT be shared with anyone else."}
            </Form.Text>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="subject">
            <Form.Control type="subject" placeholder="Subject" />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <Button
            style={{
              marginLeft: "2%",
              backgroundColor: "black",
              border: "2px solid white",
            }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Col>
    );
  };

  const ResumeForm = () => {
    return (
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
          height: "100%",
          borderRadius: "25px",
          margin: "auto",
          top: "0",
        }}
      >
        <div>
          <Button
            style={{
              width: "3rem",
              height: "3rem",
              float: "right",
              marginBottom: "10px",
              border: "2px solid white",
              backgroundColor: "black",
              borderRadius: "25px",
              // marginRight: "3%",
              top: "0",
            }}
            onClick={() => toggleResumeForm(!resumeForm)}
          >
            <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
          </Button>
        </div>
        <p style={{ color: "white" }}>
          {"Enter your email and my resume will be sent"}
        </p>
        <Form
          style={{
            maxWidth: "35rem",
            margin: "auto",
            marginTop: "55px",
          }}
        >
          <Form.Group controlId="name">
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Text
              style={{
                color: "white",
                letterSpacing: "1.5px",
                paddingBottom: "3px",
                paddingLeft: "2.5px",
              }}
            >
              {"Your email will NOT be shared with anyone else."}
            </Form.Text>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Button
            style={{
              marginLeft: "2%",
              backgroundColor: "black",
              border: "2px solid white",
            }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Col>
    );
  };

  return (
    <Container
      fluid
      style={{
        // backgroundColor: "black",
        // backgroundColor: "#000d2a",
        marginBottom: "30px",
        margin: "0",
        padding: "0",
        marginTop: "33px",
        overflow: "hidden",
      }}
    >
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "10vw",
              width: "100%",
              fontFamily: "OCRAExtended, OCR A Extended",
            }}
          >
            Contact
          </p>
          <div
            style={{
              margin: "auto",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <BiMessageRoundedDetail
              size="5rem"
              color="white"
              style={{
                borderRadius: "50%",
                backgroundColor: "#00c5d4",
                padding: "7px",
              }}
            />
          </div>
        </Col>
      </Row>
      <Row
        style={{
          // backgroundColor: "red",
          marginLeft: "2%",
          marginRight: "2%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0",
          padding: "0",
          width: "100%",
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={7}
          lg={6}
          xl={6}
          style={{
            // backgr`oundColor: "#0cce6b",
            // backgroundColor: "#000d2a",
            height: "35rem",
            // height: "100%",
            // width: "100%",
            // margin: "auto",
            overflow: "hidden",
          }}
        >
          <Button
            onClick={() => toggleContactForm(!contactForm)}
            style={{
              backgroundColor: "black",
              border: "3px solid white",
              top: "15%",
              left: "10%",
              position: "absolute",
              borderRadius: "25px",
              width: "15rem",
              height: "15rem",
              boxShadow: "20px 20px 40px black",
            }}
          >
            <p
              style={{
                margin: "auto",
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "bold",
                fontFamily: "Arial",
              }}
            >
              Email
            </p>
          </Button>
          <div
            style={{
              backgroundColor: "",
            }}
          >
            <div>
              {accentDiv.map((item, index) => (
                <div
                  key={index}
                  className="contactButton"
                  style={{
                    height: "10px",
                    marginTop: "10px",
                    marginBottom: "5px",
                    borderRadius: "20px",
                    // width: `${Math.random() * (100 - 50) + 50}%`,
                    width: `${item}%`,
                  }}
                />
              ))}
            </div>
          </div>
          {contactFormTransition.map(
            ({ item, key, props }) =>
              item && (
                <Col key={key} sm={12}>
                  <animated.div key={key} style={props}>
                    <ContactForm />
                  </animated.div>
                </Col>
              )
          )}
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          // className="contactButton"
          style={{
            // backgroundColor: "red",
            height: "35rem",
            borderRadius: "25px",
            margin: "auto",
            marginTop: "15px",
          }}
        >
          <div
            className="contactButton"
            style={{
              width: "90%",
              height: "25rem",
              position: "absolute",
              borderRadius: "25px",
            }}
          >
            <Button
              onClick={() => toggleResumeForm(!resumeForm)}
              style={{
                backgroundColor: "black",
                border: "3px solid white",
                top: "5%",
                left: "5%",
                position: "absolute",
                borderRadius: "25px",
                width: "15rem",
                height: "15rem",
                boxShadow: "20px 20px 40px black",
              }}
            >
              <p
                style={{
                  margin: "auto",
                  textAlign: "center",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  fontFamily: "Arial",
                }}
              >
                Get Resume
              </p>
            </Button>
          </div>
          {resumeFormTransition.map(
            ({ item, key, props }) =>
              item && (
                <Col key={key} sm={12}>
                  <animated.div key={key} style={props}>
                    <ResumeForm />
                  </animated.div>
                </Col>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};
