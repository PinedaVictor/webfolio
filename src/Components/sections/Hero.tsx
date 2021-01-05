import React, { useEffect, useState } from "react";
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
    console.log("View port prop in hero in useEffect with:::", props.viewPort);
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
          // zIndex: 1,
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
          // height: "100vh",
        }}
      >
        <CPU
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "black",
            // marginTop: "-43rem",
            marginTop: `${CPUMarginTop}rem`,
            transform: `translateY(-${props.yOffset * 1}px)`,
            zIndex: -1,
          }}
        />
      </Row>
    </Container>
  );
};
