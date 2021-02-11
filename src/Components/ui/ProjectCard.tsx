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
  const [projectTechStack, toggleTechStack] = useState(false);
  const [projectDetails, toggleDetails] = useState(false);

  const transition = useTransition(projectTechStack, null, {
    config: {
      duration: 450,
    },
    from: {
      transform: "translate3d(0, 0rem, 0)",
      opacity: 0,
      width: "100%",
      backgroundColor: "red",
      height: "35rem",
      position: "absolute",
      left: "0",
      overflow: "hidden",
    },
    enter: {
      transform: "translate3d(0, -35rem, 0)",
      opacity: 1,
    },
    leave: { transform: "translate3d(0, 35rem, 0)", opacity: 0 },
  });

  const transitionDetails = useTransition(projectDetails, null, {
    config: {
      duration: 450,
    },
    from: {
      transform: "translate3d(0, 0rem, 0)",
      opacity: 0,
      width: "100%",
      backgroundColor: "#000d2a",
      height: "35rem",
      position: "absolute",
      left: "0",
      overflow: "hidden",
    },
    enter: {
      transform: "translate3d(0, -35rem, 0)",
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
        {/* <div id="projectDisplayHeaderWrapper"> */}
        <h1 id="projectDisplayHeader">{props.data.title}</h1>
        {/* </div> */}
      </div>
    );
  };

  const ProjectDetails = () => {
    return (
      <div>
        <div>
          {props.data.cruces.map((crux: string, index: number) => (
            <div key={index} style={{ marginTop: "25px" }}>
              <ul style={{ color: "white" }}>
                <li style={{ backgroundColor: "" }}>
                  <p className="displayCrux">{crux}</p>
                </li>
              </ul>
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
      {projectTechStack && (
        <div>
          {transitionDetails.map(
            ({ item, key, props }) =>
              item && (
                <Col key={key} sm={12}>
                  <animated.div key={key} style={props}>
                    <ProjectDetails />
                  </animated.div>
                </Col>
              )
          )}
        </div>
      )}
      <div>
        <Button
          id="techStackOpenButton"
          style={{ width: projectTechStack ? "2.7rem" : "10rem" }}
          onClick={() => {
            toggleTechStack(!projectTechStack);
            toggleDetails(false);
          }}
        >
          {!projectTechStack && (
            <p
              style={{
                // marginTop: "12px",
                margin: "auto",
                fontWeight: "bold",
                letterSpacing: "1.5px",
                fontSize: "16px",
                marginRight: "3px",
                fontFamily: "Arial",
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
            {projectTechStack ? (
              <IoMdClose size="2rem" />
            ) : (
              <IoMdArrowRoundUp size="2rem" />
            )}
          </div>
        </Button>
        {projectTechStack && (
          <div>
            <Button
              // id="techStackOpenButton"
              style={{
                position: "absolute",
                right: "4rem",
                bottom: "0rem",
                margin: "10px",
                borderRadius: "20px",
                height: "2.7rem",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2.5px solid",
                borderColor: "white",
              }}
              onClick={() => toggleDetails(!projectDetails)}
            >
              <p
                style={{
                  // marginTop: "12px",
                  margin: "auto",
                  fontWeight: "bold",
                  letterSpacing: "1.7px",
                  fontSize: "16px",
                  marginRight: "3px",
                  fontFamily: "Arial",
                }}
              >
                Details
              </p>
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
              >
                {projectDetails ? (
                  <IoMdClose size="2rem" />
                ) : (
                  <IoMdArrowRoundUp size="2rem" />
                )}
              </div>
            </Button>
          </div>
        )}
      </div>
    </Col>
  );
};
