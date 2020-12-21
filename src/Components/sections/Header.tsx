import React from "react";
import "../../Styles/main.scss";
import {
  Creativity,
  Initials,
  Integrity,
  Perseverance,
} from "../../Assets/vectors";
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
      transform: "translate3d(-800px, 0, 0)",
    },
    enter: { transform: "translate3d(20%,0px,0)" },
  });
  const transitionTwo = useTransition(items, (item) => item, {
    from: {
      transform: "translate3d(-800px, 0px, 0)",
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
        <Col xs={1} sm={1} md={1} style={{ backgroundColor: "" }}></Col>
        <Col
          xs={12}
          sm={6}
          md={5}
          lg={5}
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
          sm={1}
          md={6}
          style={{
            backgroundColor: "",
            padding: "10px",
            paddingTop: "55px",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              maxWidth: "250px",
            }}
          >
            {transitionTwo.map(({ item, props, key }) => (
              <animated.div key={key} style={props}>
                <Integrity className="integrity" />
              </animated.div>
            ))}
          </div>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "",
          paddingBottom: "10px",
          paddingTop: "20px",
        }}
      >
        <Col xs={0} sm={3} md={4} lg={7} style={{ backgroundColor: "" }}></Col>
        <Col>
          <animated.div style={fade}>
            <Creativity className="creativity" />
          </animated.div>
        </Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col xs={0} sm={2} md={3} lg={8} style={{ backgroundColor: "" }}></Col>
        <Col>
          <animated.div style={fade}>
            <Perseverance className="perseverance" />
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};
