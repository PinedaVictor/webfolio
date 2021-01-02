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

  // const handleCPUMarginTop = () => {
  //   let marginTop = 0;
  //   if (props.viewPortWidth > 0 && props.viewPortWidth <= 375) {
  //     marginTop = 0.3;
  //   }
  //   console.log("Setting the marginTop::::", marginTop);
  // };

  // useEffect(() => {
  //   let marginTop = 0;
  //   // console.log("View port prop in HERO::::", props.viewPortWidth);
  //   // console.log("Y offset prop in HERO::::", props.yOffset);
  //   // console.log("Without useing state:::", window.visualViewport.width);
  //   console.log("Calling if in hero in useEffect with:::", screenSize);
  //   if (screenSize > 0 && screenSize <= 375) {
  //     marginTop = -10;
  //     console.log("I am getting to here", marginTop);
  //   }
  //   setCPUMarginTop(marginTop);
  //   // console.log("Setting the marginTop::::", marginTop);
  // }, [screenSize]);

  return (
    <Container fluid className="HeroWrapper" style={{ backgroundColor: "" }}>
      <div
        style={{
          transform: `translate3d(-${props.yOffset * 5}px,${0}px,0px)`,
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
          // height: "100vh",
        }}
      >
        <CPU
          style={{
            width: "100%",
            // height: "100%",
            // backgroundColor: "black",
            // marginTop: "-43rem",
            marginTop: `${CPUMarginTop}rem`,
            transform: `translateY(-${props.yOffset * 1}px)`,
            zIndex: 0,
          }}
        />
      </Row>
    </Container>
  );
};
