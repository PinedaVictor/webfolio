import React, { useEffect, useState } from "react";
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
  viewPort: { width: number; height: number };
}

export const Hero: React.FC<HeroProps> = (props) => {
  const [CPUMarginTop, setCPUMarginTop] = useState(0);
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

  useEffect(() => {
    let marginTop = 0;
    const width = props.viewPort.width;
    const height = props.viewPort.height;

    // Surface duo
    if (width == 540 && height == 720) {
      marginTop = -13;
    }
    // Ipad Pro
    if (width >= 1000 && width <= 1050 && height >= 1300 && height <= 1400) {
      marginTop = 10;
    }

    if (width > 0 && width <= 375 && height == 812) {
      marginTop = 1.5;
    } else if (width > 0 && width <= 375 && height <= 600) {
      marginTop = -9.4;
    } else if (width > 0 && width <= 375 && height > 600 && height <= 700) {
      marginTop = -7.7;
    } else if (width > 0 && width > 375 && width <= 430 && height <= 750) {
      marginTop = -5.5;
    } else if (
      width > 0 &&
      width > 375 &&
      width <= 430 &&
      height > 750 &&
      height <= 850
    ) {
      marginTop = 1;
    } else if (width > 1400) {
      marginTop = -44;
    }
    setCPUMarginTop(marginTop);
  }, [props.viewPort]);

  return (
    <Container fluid className="HeroWrapper" style={{ backgroundColor: "" }}>
      <div
        style={{
          transform: `translate3d(-${props.yOffset * 5}px,${0}px,0px)`,
          position: "relative",
        }}
      >
        <Row id="initialsIntgrityRow">
          <Col xs={1} sm={1} md={1}></Col>
          <Col
            xs={12}
            sm={6}
            md={5}
            lg={5}
            style={{
              paddingTop: "10px",
            }}
          >
            {transitionOne.map(({ props, key }) => (
              <animated.div key={key} style={props}>
                <Initials id="initials" />
              </animated.div>
            ))}
          </Col>
          <Col
            xs={12}
            sm={1}
            md={6}
            style={{
              padding: "10px",
              paddingTop: "55px",
            }}
          >
            <div
              style={{
                maxWidth: "250px",
              }}
            >
              {transitionTwo.map(({ props, key }) => (
                <animated.div key={key} style={props}>
                  <Integrity id="integrity" />
                </animated.div>
              ))}
            </div>
          </Col>
        </Row>
        <Row id="creativityRow">
          <Col xs={0} sm={3} md={4} lg={7}></Col>
          <Col>
            <animated.div style={fade}>
              <Creativity id="creativity" />
            </animated.div>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "20px",
          }}
        >
          <Col xs={0} sm={2} md={3} lg={8}></Col>
          <Col>
            <animated.div style={fade}>
              <Perseverance id="perseverance" />
            </animated.div>
          </Col>
        </Row>
      </div>
      <Row>
        <CPU
          id="CPUVector"
          style={{
            marginTop: `${CPUMarginTop}rem`,
            transform: `translateY(-${props.yOffset * 1}px)`,
          }}
        />
      </Row>
    </Container>
  );
};
