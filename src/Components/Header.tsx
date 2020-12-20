import React from "react";
import "../Styles/main.scss";
import {
  Creativity,
  Initials,
  Integrity,
  Perseverance,
} from "../Assets/Vectors";
import { Container, Col, Row } from "react-bootstrap";
import { useTransition, useSpring, animated } from "react-spring";

export const Header: React.FC = () => {
  const items = ["the"];
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: {
      duration: 2000,
    },
  });

  const transitionOne = useTransition(items, (item) => item, {
    from: {
      transform: "translate3d(-500px, 0, 0)",
    },
    enter: { transform: "translate3d(25%,0px,0)" },
  });
  const transitionTwo = useTransition(items, (item) => item, {
    from: {
      transform: "translate3d(-500px, 0px, 0)",
    },
    enter: { transform: "translate3d(0px, 0px, 0px)" },
  });

  return (
    <Container fluid className="HeroWrapper">
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Col xs={2} sm={2} md={2} style={{ backgroundColor: "" }}></Col>
        <Col
          xs={12}
          sm={6}
          md={4}
          style={{
            backgroundColor: "",
            paddingTop: "10px",
          }}
        >
          {transitionOne.map(
            ({ item, props, key }) => (
              console.log("The props::::", item),
              (
                <animated.div key={key} style={props}>
                  <Initials className="initials" />
                </animated.div>
              )
            )
          )}
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          style={{
            backgroundColor: "",
            padding: "10px",
            paddingTop: "35px",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              maxWidth: "250px",
              marginLeft: "25%",
            }}
          >
            {transitionTwo.map(({ item, props, key }) => (
              <animated.div key={key} style={props}>
                <Integrity className="integrity" />
              </animated.div>
            ))}
          </div>
        </Col>
        <Col style={{ backgroundColor: "red" }}>
          <animated.div style={fade}>
            <Creativity />
          </animated.div>
        </Col>
        <Col xs={12}>
          <animated.div style={fade}>
            <Perseverance />
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};
