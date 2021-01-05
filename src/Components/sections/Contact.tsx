import React, { useState } from "react";
import "../../Styles/main.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IoMdChatboxes } from "react-icons/io";
import { useTransition, animated } from "react-spring";

export const Contact: React.FC = () => {
  const [form, toggleForm] = useState(false);

  const transition = useTransition(form, null, {
    config: {
      duration: 450,
    },
    from: {
      //   transform: "translate3d(0, 0em, 0)",
      opacity: 0,
      width: "100%",
      backgroundColor: "red",
      height: "33rem",
      position: "absolute",
      left: "0",
      overflow: "hidden",
    },
    enter: {
      //   transform: "translate3d(0, -33em, 0)",
      opacity: 1,
    },
    leave: { opacity: 0 },
  });

  const ContactForm = () => {
    return (
      <div style={{}}>
        <Form style={{ maxWidth: "35rem", margin: "auto", marginTop: "15%" }}>
          <Form.Group controlId="name">
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="subject" placeholder="Subject" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Button onClick={() => toggleForm(!form)} />
      </div>
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
        {/* <IoMdChatboxes
          size="35rem"
          style={{ fill: "white", paddingLeft: "5%" }}
        />
        <Button style={{ height: "2rem", width: "6rem" }}>Contact</Button> */}
        <Col lg={1}></Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={
            {
              // backgroundColor: "#0cce6b",
              // backgroundColor: "#000d2a",
              // height: "40rem",
              // maxHeight: "35rem",
            }
          }
        >
          <div>
            {/* <IoMdChatboxes
              size="35rem"
              style={{
                // backgroundColor: "green",
                // maxHeight: "100%",
                maxWidth: "100%",
                fill: "white",
              }}
            /> */}
            <p
              style={{
                fontSize: "5rem",
                overflowWrap: "break-word",
                // padding: "50px",
                margin: "0",
                lineHeight: "5rem",
                color: "white",
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
                // marginBottom: "5px",
                borderRadius: "20px",
                width: "25%",
                // float: "right",
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
                // float: "right",
              }}
            />
            <div
              className="contactButton"
              style={{
                height: "10px",
                marginTop: "10px",
                marginBottom: "5px",
                borderRadius: "20px",
                // float: "right",
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
                // float: "right",
                // width: "75%",
              }}
            />
          </div>
          {/* <Button
            onClick={() => toggleForm(!form)}
            style={{
              height: "10rem",
              width: "10rem",
              borderRadius: "50%",
              position: "absolute",
              right: "0",
              //   top: "40%",
            }}
          >
            Contact
          </Button> */}
        </Col>
        <Col
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className="contactButton"
          style={{
            backgroundColor: "red",
            // height: "25re",
            // maxHeight: "504rem",
          }}
        >
          {/* <div style={{ margin: "auto" }}>
            <Button
              className="idk"
              onClick={() => toggleForm(!form)}
              style={{
                height: "10rem",
                width: "10rem",
                // borderRadius: "50%",
                // marginTop: "50%",
                // marginLeft: "25%",
                position: "absolute",
                // fontSize: "3rem",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Contact
            </Button>
          </div> */}
          <p>Contact</p>
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
