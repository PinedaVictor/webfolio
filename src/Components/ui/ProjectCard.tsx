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
      transform: "translate3d(0, 100%, 0)",
      opacity: 1,
      width: "100%",
      backgroundColor: "red",
      height: "30rem",
      float: "right",
      position: "absolute",
    },
    enter: { transform: "translate3d(0, -10%, 0)" },
    leave: { transform: "translate3d(0, 10%, 0)" },
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
      }}
    >
      <Button onClick={() => toggle(!info)}></Button>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <Col sm={12}>
              <animated.div key={key} style={props}></animated.div>
            </Col>
          )
      )}
    </Col>
  );
};
