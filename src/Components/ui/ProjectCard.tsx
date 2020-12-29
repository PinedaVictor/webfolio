import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import { IoMdArrowRoundUp, IoMdClose } from "react-icons/io";
import { GrStackOverflow } from "react-icons/gr";
import { BiCoinStack } from "react-icons/bi";
import { LeftBrace, RightBrace, LB, FirebaseIcon } from "../../Assets/icons";
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
  console.log("Project Data:::", project);

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
    },
    enter: {
      transform: "translate3d(0, -33em, 0)",
      opacity: 1,
    },
    leave: { transform: "translate3d(0, 33rem, 0)", opacity: 0 },
  });

  const ProjectDisplay = () => {
    let gig = "";
    props.data.map(
      (item: any) => (
        console.log("THE ITEM:::", item), (gig = item.backgroundImg)
      )
    );
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
    // main 011126
    // 011638
    // 001c70
    return (
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
        }}
      >
        <div
          style={{ left: "0", width: "85%", height: "100vh", opacity: "40%" }}
        >
          <Code />
        </div>
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            backgroundColor: "#ff592e",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            // boxShadow: "5px 3px 5px black",
            padding: "10px",
          }}
        >
          <GrStackOverflow size="5rem" color="#011126" />
          {/* <TechStack
            style={{
              height: "10rem",
              width: "10rem",
              paddingLeft: "10px",
            }}
          /> */}
        </div>
        {/* <div
          style={{
            position: "absolute",
            right: "0",
            top: "30%",
            backgroundColor: "red",
            borderTopLeftRadius: "25%",
            borderBottomLeftRadius: "25%",
            // boxShadow: "5px 3px 5px black",
            // display: "flex",
            // flexDirection: "row",
            // flexWrap: "wrap",
          }}
        > */}
        {projectData.icons.map((Icon: any, index: number) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${1 + index * 20}%`,
              right: "0",
              backgroundColor: "#000d2a",
              padding: "10px",
              paddingRight: `${100 / (index + 1 * 2)}%`,
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              display: "flex",
            }}
          >
            <Icon
              size="4rem"
              style={{
                fill: "#000d2a",
                backgroundColor: "#00c5d4",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <p
              style={{
                // backgroundColor: "red",
                margin: "auto",
                color: "white",
                paddingLeft: "10px",
              }}
            >
              FIRREE
            </p>
          </div>
        ))}
        {/* </div> */}
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
