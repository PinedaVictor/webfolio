import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import { IoMdArrowRoundUp, IoMdClose } from "react-icons/io";
import { GrStackOverflow } from "react-icons/gr";
import { BiCoinStack } from "react-icons/bi";
import { LeftBrace, RightBrace, LB } from "../../Assets/icons";

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
          backgroundColor: "white",
          height: "100%",
          color: "white",
          // borderTop: "2px solid white",
          // padding: "5px",
        }}
      >
        {/* <div
          style={{
            backgroundImage:
              "linear-gradient(to left, #011C40, #00C5D4, #011C40)",
            height: "5px",
            marginBottom: "5px",
            width: "100%",
            padding: "0px",
          }}
        ></div> */}
        <div
          style={{
            // backgroundColor: "black",
            height: "70px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // borderBottom: "4px solid white",
          }}
        >
          {/* <div
            style={{
              // backgroundColor: "#00c5d4",
              display: "block",
              height: "100%",
              padding: "5px",
            }}
          > */}
          <GrStackOverflow
            size="15rem"
            color="#101726"
            style={{
              margin: "auto",
              display: "block",
              padding: "10px",
              backgroundColor: "#00c5d4",
              // borderRadius: "30%",
            }}
          />
        </div>
        {/* <div>
            <p
              style={{
                // backgroundColor: "#101726",
                fontSize: "30px",
                fontWeight: "bold",
                paddingTop: "10px",
                fontFamily: "OCRAExtended, OCR A Extended",
                color: "white",
              }}
            >
              {"=>"}
            </p>
          </div> */}
        {/* <div
            style={{
              backgroundColor: "black",
              height: "100%",
            }}
          >
            <LB
              style={{
                backgroundColor: "",
                // width: "20px",
                height: "45px",
                marginTop: "5px",
                marginLeft: "4px",
                fill: "white",
              }}
            />
          </div> */}
        {/* <div
            style={{
              // backgroundColor: "#101726",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              padding: "5px",
            }}
          >
            {projectData.icons.map((Icon: any, index: number) => (
              <div key={index} style={{ paddingLeft: "7px" }}>
                <Icon
                  key={index}
                  size="3rem"
                  color="black"
                  style={{
                    display: "block",
                    padding: "5px",
                    backgroundColor: "#00C5D4",
                    borderRadius: "50%",
                  }}
                />
              </div>
            ))}
          </div> */}
        {/* <div style={{ height: "100%", backgroundColor: "black" }}>
            <RightBrace
              style={{
                backgroundColor: "",
                // width: "20px",
                height: "50px",
                marginTop: "5px",
                marginLeft: "4px",
                fill: "white",
              }}
            />
          </div> */}
        {/* </div> */}
        {/* <h5>Company: Foodie Senior Design Project</h5>
        <h5>
          About: Foodie is a mobile application which enables food enthusiasts
          to explore highly rated and interesting restaurants in their area
          according to their culinary interests.
        </h5>
        <ul style={{ fontSize: "18px" }}>
          {projectData.cruces.map((crux: string, index: number) => (
            <li key={index}>{crux}</li>
          ))}
        </ul> */}
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
