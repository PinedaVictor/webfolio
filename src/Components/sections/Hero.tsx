import React from "react";
import "../../Styles/main.scss";
import {
  Creativity,
  Initials,
  Integrity,
  Perseverance,
  CPU,
} from "../../Assets/vectors";
import { Container, Col, Row } from "react-bootstrap";
import { useTransition, useSpring, animated } from "react-spring";

interface HeroProps {
  yOffset: number;
}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
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
      width: "300px",
    },
    enter: { transform: "translate3d(20px,0px,0)" },
  });
  const transitionTwo = useTransition(items, (item) => item, {
    from: {
      transform: "translate3d(-800px, 0px, 0)",
    },
    enter: { transform: "translate3d(0px, 0px, 0px)" },
  });

  return (
    <Container fluid className="HeroWrapper" style={{ backgroundColor: "" }}>
      <div
        style={{
          transform: `translate3d(-${props.yOffset * 5}px,${
            props.yOffset * 2
          }px,0px)`,
          zIndex: 1,
          position: "relative",
          backgroundColor: "",
        }}
      >
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "",
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
            {transitionOne.map(({ props, key }) => (
              <animated.div key={key} style={props}>
                <Initials className="initials" />
              </animated.div>
            ))}
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
              {transitionTwo.map(({ props, key }) => (
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
          <Col
            xs={0}
            sm={3}
            md={4}
            lg={7}
            style={{ backgroundColor: "" }}
          ></Col>
          <Col style={{ backgroundColor: "" }}>
            <animated.div style={fade}>
              <Creativity className="creativity" />
            </animated.div>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "20px",
            backgroundColor: "",
          }}
        >
          <Col
            xs={0}
            sm={2}
            md={3}
            lg={8}
            style={{ backgroundColor: "" }}
          ></Col>
          <Col>
            <animated.div style={fade}>
              <Perseverance className="perseverance" />
            </animated.div>
          </Col>
        </Row>
      </div>
      <Row
        style={{
          backgroundColor: "",
          height: "100vh",
        }}
      >
        <CPU
          style={{
            width: "100%",
            // height: "100%",
            // backgroundColor: "black",
            marginTop: "-43rem",
            transform: `translateY(-${props.yOffset * 1}px)`,
            zIndex: 0,
          }}
        />
      </Row>
    </Container>
  );
};
