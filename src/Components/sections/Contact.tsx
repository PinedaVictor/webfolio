import React, { useState, useContext } from "react";
import "../../Styles/main.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { useTransition, animated } from "react-spring";
import { ParallaxContext } from "../Parallax";

export const Contact: React.FC = () => {
  const [form, toggleForm] = useState(false);

  const ParallaxAttributes = useContext(ParallaxContext);

  console.log("The parallax properties::::", ParallaxAttributes);

  const transition = useTransition(form, null, {
    config: {
      duration: 450,
    },
    from: {
      opacity: 0,
      width: "100%",
      backgroundColor: "black",
      height: "33rem",
      position: "absolute",
      left: "0",
      overflow: "hidden",
      borderRadius: "25px",
      boxShadow: "10px 10px 20px black, -10px 10px 20px black",
    },
    enter: {
      opacity: 1,
    },
    leave: { opacity: 0 },
  });

  const ContactForm = () => {
    return (
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
          height: "20rem",
          borderRadius: "25px",
          margin: "auto",
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
          onClick={() => toggleForm(!form)}
        >
          <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
        </Button>
        <Form style={{ maxWidth: "35rem", margin: "auto" }}>
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

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="subject" placeholder="Subject" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
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
  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        // backgroundColor: "#000d2a",
        marginBottom: "30px",
        margin: "0",
        padding: "0",
        marginTop: "33px",
        paddingBottom: "55px",
      }}
    >
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
        {/* <Col md={3}></Col> */}
        <Col
          xs={12}
          sm={12}
          md={7}
          lg={6}
          xl={6}
          style={{
            // backgroundColor: "#0cce6b",
            // backgroundColor: "#000d2a",
            // height: "40rem",
            // height: "100%",
            // width: "100%",
            margin: "auto",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "5rem",
                overflowWrap: "break-word",
                margin: "0",
                lineHeight: "5rem",
                color: "white",
                fontFamily: "Arial",
              }}
            >
              {
                "Hi, My name is Victor and I'm a software developer. Feel free to contact me."
              }
            </p>
            <div
              className="contactButton"
              style={{
                height: "10px",
                marginTop: "5px",
                borderRadius: "20px",
                width: "25%",
              }}
            />
            <div
              className="contactButton"
              style={{
                height: "10px",
                marginTop: "10px",
                marginBottom: "5px",
                borderRadius: "20px",
                width: "50%",
              }}
            />
            <div
              className="contactButton"
              style={{
                height: "10px",
                marginTop: "10px",
                marginBottom: "5px",
                borderRadius: "20px",
                width: "75%",
              }}
            />
            <div
              className="contactButton"
              style={{
                height: "10px",
                marginTop: "10px",
                marginBottom: "5px",
                borderRadius: "20px",
              }}
            />
          </div>
        </Col>
        <Col
          xs={11}
          sm={11}
          md={6}
          lg={5}
          xl={5}
          className="contactButton"
          style={{
            backgroundColor: "red",
            height: "20rem",
            borderRadius: "25px",
            margin: "auto",
            marginTop: "15px",
          }}
        >
          <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <Button
              onClick={() => toggleForm(!form)}
              style={{
                backgroundColor: "black",
                border: "3px solid white",
                top: "5%",
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
                Contact
              </p>
            </Button>
          </div>
          {transition.map(
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
      </Row>
    </Container>
  );
};
