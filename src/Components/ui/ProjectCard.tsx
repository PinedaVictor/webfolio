import React, { useState } from "react";
import "../../Styles/components/projectCard.scss";
import { Col, Button } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import { IoMdArrowRoundUp, IoMdClose } from "react-icons/io";
import { Code, TechStack } from "../../Assets/vectors";
import { IconType } from "react-icons";

type FrameworkIcon = { icon: IconType; Framework: string };
interface ProjectCardProps {
  data: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = (
  props: ProjectCardProps
) => {
  const [info, toggle] = useState(false);

  const transition = useTransition(info, null, {
    config: {
      duration: 450,
    },
    from: {
      transform: "translate3d(0, 0em, 0)",
      opacity: 0,
      width: "100%",
      backgroundColor: "red",
      height: "35rem",
      position: "absolute",
      left: "0",
      overflow: "hidden",
    },
    enter: {
      transform: "translate3d(0, -35em, 0)",
      opacity: 1,
    },
    leave: { transform: "translate3d(0, 35rem, 0)", opacity: 0 },
  });

  const ProjectDisplay = () => {
    return (
      <div
        id="projectDisplayWrapper"
        style={{
          backgroundImage: `url(${props.data.backgroundImg})`,
        }}
      >
        <div id="projectDisplayHeaderWrapper">
          <h1 id="projectDisplayHeader">{props.data.type}</h1>
        </div>
        <div id="projectDisplayCrucesWrapper">
          {props.data.cruces.map((crux: string, index: number) => (
            <div
              className="cruxWrapper"
              key={index}
              style={{
                top: `${(0 + index) * 20}%`,
                // paddingRight: `${100 / (index + 1 * 2)}%`,
              }}
            >
              <p className="displayCrux">{crux}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ProjectContent = () => {
    return (
      <div id="projectContentWrapper">
        <div id="techStackIconWrapper">
          <TechStack id="techStackIcon" />
        </div>
        <div id="codeVectorWrapper">
          <Code />
        </div>
        {props.data.icons.map((Icon: FrameworkIcon, index: number) => (
          <div
            className="frameworkWrapper"
            key={index}
            style={{
              top: `${(0 + index) * 20}%`,
              paddingRight: `${100 / (index + 1 * 2)}%`,
            }}
          >
            <Icon.icon className="frameworkIcon" size="3rem" />
            <p className="frameworkTitle">{Icon.Framework}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <Col className="projectCardWrapper" xs={12} sm={12} md={6}>
      <ProjectDisplay />
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <Col key={key} sm={12}>
              <animated.div key={key} style={props}>
                <ProjectContent />
              </animated.div>
            </Col>
          )
      )}
      <Button
        id="techStackOpenButton"
        style={{ width: info ? "2.7rem" : "12rem" }}
        onClick={() => toggle(!info)}
      >
        {!info && (
          <p
            style={{
              // marginTop: "12px",
              margin: "auto",
              fontWeight: "bold",
              letterSpacing: "1px",
              fontSize: "20px",
              marginRight: "3px",
            }}
          >
            Tech Stack
          </p>
        )}
        <div
          style={{
            width: "2rem",
            height: "2rem",
          }}
        >
          {/* TODO: Animate icons to fade in and out */}
          {info ? <IoMdClose size="2rem" /> : <IoMdArrowRoundUp size="2rem" />}
        </div>
      </Button>
    </Col>
  );
};
