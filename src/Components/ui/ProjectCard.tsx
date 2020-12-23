import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { useTransition, animated } from "react-spring";

export const ProjectCard: React.FC = () => {
  const [info, toggle] = useState(false);
  const transition = useTransition(info, null, {
    config: {
      duration: 425,
    },
    from: {
      transform: "translate3d(0, 30em, 0)",
      opacity: 1,
      width: "100%",
      backgroundColor: "red",
      height: "30rem",
      position: "absolute",
      left: "0",
    },
    enter: { transform: "translate3d(0, -30em, 0)" },
    leave: { transform: "translate3d(0, 30em, 0)" },
  });
  return (
    <Col
      xs={12}
      sm={12}
      md={6}
      style={{
        backgroundColor: "grey",
        height: "30rem",
        left: "0",
        border: "1px solid black",
        margin: "0",
        padding: "0",
      }}
    >
      <div style={{ backgroundColor: "green", height: "55px" }}>Icons</div>
      <div style={{ backgroundColor: "orange", height: "100%" }}>
        SVG or img
      </div>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <Col key={key} sm={12}>
              <animated.div key={key} style={props}>
                <div
                  style={{
                    backgroundColor: "black",
                    width: "100%",
                    height: "60px",
                  }}
                ></div>
                <div style={{ backgroundColor: "grey", height: "100%" }}>
                  idk
                </div>
              </animated.div>
            </Col>
          )
      )}
      <Button
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          zIndex: 1,
          margin: "10px",
        }}
        onClick={() => toggle(!info)}
      ></Button>
    </Col>
  );
};
