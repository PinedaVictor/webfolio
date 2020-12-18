import React from "react";
import "../Styles/main.scss";
import { ReactComponent as IDK } from "../SVGs/idk.svg";
import { Container, Col, Row } from "react-bootstrap";
import { useSpring, useTransition, animated } from "react-spring";

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
    enter: { transform: "translate3d(0px, 100px, 0px)" },
  });

  return (
    <Container fluid className="HeroWrapper">
      <Row style={{ backgroundColor: "blue" }}>
        <Col>
          <animated.div style={fade}>
            <IDK className="initials" />
          </animated.div>
          {transitionOne.map(
            ({ item, props, key }) => (
              console.log("The props::::", item),
              (
                <animated.div key={key} style={props}>
                  <p style={{ color: "red" }}>the</p>
                  <IDK className="initials" />
                </animated.div>
              )
            )
          )}
        </Col>
        <Col style={{ backgroundColor: "green" }}>
          {transitionTwo.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <p style={{ color: "blue" }}>the</p>
              <IDK className="initials" />
            </animated.div>
          ))}
        </Col>
      </Row>

      {/* <Col style={{ backgroundColor: "blue" }}>Vp</Col> */}
    </Container>
  );
};
