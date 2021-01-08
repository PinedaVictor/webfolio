import React, { useContext, ReactComponentElement } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiPencilBrush } from "react-icons/gi";
import { AiFillCode, AiOutlineCode } from "react-icons/ai";
// import { FaFileCode, FaCode } from "react-icons/fa";
// import { GrCode } from "react-icons/gr";
// import { BiCodeAlt, BiCodeCurly } from "react-icons/bi";
import {
  Pi,
  Icons,
  FirebaseIcon,
  Sass,
  Nx,
  ReactIcon,
  Scala,
  Java,
  Arduino,
  Ts,
} from "../../Assets/icons";
import { TechEye } from "../../Assets/vectors";
import { ParallaxContext } from "../Parallax";
import gig from "../../Assets/images/Edit.png";
export const Dexterity: React.FC = () => {
  const ParallaxAttributes = useContext(ParallaxContext);

  console.log("The YOFFSET::::", ParallaxAttributes.yOffset);
  console.log("The viewport Width:::", ParallaxAttributes.viewPort);
  console.log(
    "Transform::::",
    (ParallaxAttributes.yOffset / ParallaxAttributes.viewPort.width) * 100
  );

  const DexIcons = () => {
    const icons = [
      Pi,
      Sass,
      Scala,
      Java,
      Arduino,
      Ts,
      ReactIcon,
      FirebaseIcon,
      Nx,
    ];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
        }}
      >
        {icons.map((Icon: any, index) => (
          <Col
            xs={4}
            sm={2}
            lg={2}
            key={index}
            style={{
              // paddingLeft: "15px",
              padding: "10px",
              // width: "6rem",
            }}
          >
            <Icon width="5rem" height="5rem" />
          </Col>
        ))}
      </div>
    );
  };
  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        // backgroundColor: "#000d2a",
        marginBottom: "30px",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        // height: "100vh",
      }}
    >
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            // backgroundColor: "red",
            // transform: `translateY(-${ParallaxAttributes.yOffset / 2.5}px)`,
            // marginTop: "65rem",
            height: "20rem",
          }}
        >
          <p style={{ textAlign: "center" }}>Dexterity</p>
          {/* <TechEye width="100vw" /> */}
        </Col>
      </Row>
      <Row
        style={{
          // backgroundColor: "blue",
          marginLeft: "2%",
          marginRight: "2%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0",
          padding: "0",
          width: "100%",
          // marginTop: "10rem",
          // backgroundColor: "blue",
          // transform: `translateY(-${ParallaxAttributes.yOffset / 2.5}px)`,
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            // backgroundColor: "#0cce6b",
            // backgroundColor: "#000d2a",
            // backgroundColor: "black",
            height: "45rem",
            // maxHeight: "35rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundImage: `url(${gig})`,
              backgroundSize: "100vh 100%",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              left: "0",
              // backgroundColor: "red",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
            }}
          >
            <DexIcons />
          </div>
          <div style={{ position: "absolute" }}>
            <p
              style={{
                fontSize: "3rem",
                color: "#0cce6b",
                fontFamily: "OCRAExtended, OCR A Extended",
                // backgroundColor: "red",
                textAlign: "center",
              }}
            >
              Software
            </p>
          </div>
          {/* <div
            style={{
              position: "absolute",
              left: "0",
              width: "100%",
              height: "100%",
              // backgroundColor: "green",
            }}
          > */}
          <AiOutlineCode
            size="22rem"
            style={{
              // width: "100%",
              // height: "100%",
              fill: "#0cce6b",
              // backgroundColor: "red",
              position: "absolute",
              marginTop: "3rem",
              // left: "-10vw",
              // transform: `translateX(${ParallaxAttributes.yOffset / 3.0}px)`,
            }}
          />
          {/* </div> */}
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            // backgroundColor: "aqua",
            height: "40rem",
            // maxHeight: "35rem",
            overflow: "hidden",
          }}
        >
          {/* Oj ff592e */}
          <div style={{ position: "absolute" }}>
            <p
              style={{
                fontSize: "3rem",
                color: "#ffb400",
                fontFamily: "OCRAExtended, OCR A Extended",
                textAlign: "center",
              }}
            >
              Design
            </p>
          </div>
          {/* <div> */}
          <Pi
            width="5rem"
            height="5rem"
            style={{
              // marginTop: "80rem",
              // marginLeft: "-35rem",
              // left: "",
              right: "0",
              position: "absolute",
              // transform: `translateX(-${ParallaxAttributes.yOffset / 50}px)`,
            }}
          />
          {/* </div> */}
          <GiPencilBrush
            size="20rem"
            style={{
              // width: "100%",
              // height: "100%",
              fill: "#ffb400",
              // right: "-80rem",
              position: "absolute",
              top: "3rem",
              // transform: `translateX(-${ParallaxAttributes.yOffset / 2.5}px)`,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
