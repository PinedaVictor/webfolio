import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiPencilBrush } from "react-icons/gi";
import { AiOutlineCode } from "react-icons/ai";
// import { FaFileCode, FaCode } from "react-icons/fa";
// import { GrCode } from "react-icons/gr";
// import { BiCodeAlt, BiCodeCurly } from "react-icons/bi";
import {
  Pi,
  FirebaseIcon,
  Sass,
  Nx,
  ReactIcon,
  Scala,
  Java,
  Arduino,
  Ts,
  Ai,
  Ps,
  Figma,
} from "../../Assets/icons";
import { Wave, Sq } from "../../Assets/vectors";
import { ParallaxContext } from "../Parallax";
// import gig from "../../Assets/images/Edit.png";

type SVGIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export const Dexterity: React.FC = () => {
  const ParallaxAttributes = useContext(ParallaxContext);

  console.log("The YOFFSET::::", ParallaxAttributes.yOffset);
  console.log("The viewport Width:::", ParallaxAttributes.viewPort);
  console.log(
    "Transform::::",
    (ParallaxAttributes.yOffset / ParallaxAttributes.viewPort.width) * 100
  );

  const DexSoftwareIcons = () => {
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
        {icons.map((Icon: SVGIcon, index) => (
          <Col
            xs={4}
            sm={2}
            // md={4}
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

  const DexFrameworkIcons = (props: { icons: SVGIcon[] }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
        }}
      >
        {props.icons.map((Icon: SVGIcon, index: number) => (
          <Col
            xs={4}
            sm={3}
            // md={4}
            lg={4}
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
            height: "40rem",
            // maxHeight: "35rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "0",
            }}
          >
            <DexSoftwareIcons />
          </div>
          <div style={{ position: "absolute" }}>
            <p
              style={{
                fontSize: "3rem",
                fontFamily: "OCRAExtended, OCR A Extended",
                textAlign: "center",
                color: "white",
              }}
            >
              Software
            </p>
          </div>
          <AiOutlineCode
            size="20rem"
            color="white"
            style={{
              position: "absolute",
              marginTop: "3rem",
            }}
          />
          <Wave width="80rem" style={{ marginLeft: "-10rem" }} />
          <Wave
            width="80rem"
            style={{ marginTop: "-5rem", marginLeft: "-15rem" }}
          />
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
          <div
            style={{
              position: "absolute",
              bottom: "0",
            }}
          >
            <DexFrameworkIcons icons={[Ai, Ps, Figma]} />
          </div>
          <div style={{ position: "absolute" }}>
            <p
              style={{
                fontSize: "3rem",
                // color: "#ffb400",
                color: "white",
                fontFamily: "OCRAExtended, OCR A Extended",
                textAlign: "center",
              }}
            >
              Design
            </p>
          </div>
          <GiPencilBrush
            size="20rem"
            color="white"
            style={{
              // width: "100%",
              // height: "100%",
              // fill: "#ffb400",
              // right: "-80rem",
              position: "absolute",
              top: "3rem",
              // transform: `translateX(-${ParallaxAttributes.yOffset / 2.5}px)`,
            }}
          />
          <Sq
            width="50rem"
            style={{ marginLeft: "-1rem", marginTop: "-1rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
