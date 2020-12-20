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
    enter: { transform: "translate3d(55%,0px,0)" },
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
          // backgroundColor: "blue",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Col xs={12} sm={6} style={{ backgroundColor: "" }}>
          <div style={{}}>
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
          </div>
        </Col>
        <Col xs={12} style={{ backgroundColor: "" }}>
          {transitionTwo.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Integrity className="integrity" />
            </animated.div>
          ))}
        </Col>
        <Col xs={12}>
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
