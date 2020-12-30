import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import { IoMdArrowRoundUp, IoMdClose } from "react-icons/io";
import { Code, TechStack } from "../../Assets/vectors";

interface ProjectCardProps {
  data: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = (
  props: ProjectCardProps
) => {
  const [info, toggle] = useState(false);

  let projectData: any = {};
  const project = props.data.map((data: any) => (projectData = data));
  // console.log("Project Data:::", project);

  const transition = useTransition(info, null, {
    config: {
      duration: 450,
    },
    from: {
      transform: "translate3d(0, 0em, 0)",
      opacity: 0,
      width: "100%",
      backgroundColor: "red",
      height: "33rem",
      position: "absolute",
      left: "0",
      overflow: "hidden",
    },
    enter: {
      transform: "translate3d(0, -33em, 0)",
      opacity: 1,
    },
    leave: { transform: "translate3d(0, 33rem, 0)", opacity: 0 },
  });

  const ProjectDisplay = () => {
    let gig = "";
    props.data.map((item: any) => (gig = item.backgroundImg));
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${gig})`,
          backgroundSize: "100vh 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "120px",
            fontFamily: "sans-serif",
            overflow: "hidden",
            fontWeight: "bold",
          }}
        >
          {projectData.type}
        </p>
      </div>
    );
  };

  const ProjectContent = () => {
    return (
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <div
          style={{
            float: "left",
            width: "50%",
            height: "100%",
            backgroundColor: "#000d2a",
          }}
        >
          <TechStack
            style={{
              width: "100%",
              height: "100%",
              marginTop: "2.5rem",
            }}
          />
        </div>
        <div
          style={{
            marginLeft: "50%",
            height: "100vh",
            opacity: "60%",
          }}
        >
          <Code />
        </div>
        {projectData.icons.map((Icon: any, index: number) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${(0 + index) * 20}%`,
              right: "0",
              backgroundColor: "black",
              padding: "10px",
              paddingRight: `${100 / (index + 1 * 2)}%`,
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              display: "flex",
              boxShadow: "-5px 2px 0px #004FFF",
            }}
          >
            <Icon.icon
              size="3rem"
              style={{
                fill: "#000d2a",
                backgroundColor: "#ff592e",
                borderRadius: "50%",
                padding: "5px",
                marginRight: "10px",
              }}
            />
            <p
              style={{
                margin: "auto",
                color: "white",
              }}
            >
              {Icon.Framework}
            </p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <Col
      xs={12}
      sm={12}
      md={6}
      style={{
        backgroundColor: "black",
        height: "33rem",
        left: "0",
        border: "1px solid black",
        margin: "0",
        padding: "0",
      }}
    >
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
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          zIndex: 1,
          margin: "10px",
          borderRadius: "50%",
          width: "2.7rem",
          height: "2.7rem",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid",
          borderColor: "white",
        }}
        onClick={() => toggle(!info)}
      >
        <div
          style={{
            right: "0",
            bottom: "0",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            display: "flex",
          }}
        >
          {/* TODO: Animate icons to fade in and out */}
          {info ? <IoMdClose size="2rem" /> : <IoMdArrowRoundUp size="2rem" />}
        </div>
      </Button>
    </Col>
  );
};
