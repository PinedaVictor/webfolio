import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiPencilBrush } from "react-icons/gi";
import { AiFillCode, AiOutlineCode } from "react-icons/ai";
// import { FaFileCode, FaCode } from "react-icons/fa";
// import { GrCode } from "react-icons/gr";
// import { BiCodeAlt, BiCodeCurly } from "react-icons/bi";
import { Pi, Icons } from "../../Assets/icons";
import { ParallaxContext } from "../Parallax";

export const Dexterity: React.FC = () => {
  const ParallaxAttributes = useContext(ParallaxContext);

  console.log("The YOFFSET::::", ParallaxAttributes.yOffset);
  console.log("The viewport Width:::", ParallaxAttributes.viewPort);
  console.log(
    "Transform::::",
    (ParallaxAttributes.yOffset / ParallaxAttributes.viewPort.width) * 100
  );
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
      }}
    >
      <Row
        style={{
          // backgroundColor: "red",
          marginLeft: "2%",
          marginRight: "2%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0",
          padding: "0",
          width: "100%",
          marginTop: "80rem",
          transform: `translateY(-${ParallaxAttributes.yOffset / 2.5}px)`,
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            // backgroundColor: "#0cce6b",
            // backgroundColor: "#000d2a",
            height: "40rem",
            // maxHeight: "35rem",
            overflow: "hidden",
          }}
        >
          {/* aqua 00c5d4 */}
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
          <AiOutlineCode
            style={{
              width: "100%",
              height: "100%",
              fill: "#0cce6b",
              // backgroundColor: "red",
              position: "absolute",
              left: "-60rem",
              transform: `translateX(${ParallaxAttributes.yOffset / 3.2}px)`,
            }}
          />
          <Pi
            width="5rem"
            height="5rem"
            style={{
              marginTop: "105rem",
              position: "absolute",
              transform: `translateY(-${ParallaxAttributes.yOffset / 2}px)`,
            }}
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
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
              transform: `translateX(-${ParallaxAttributes.yOffset / 50}px)`,
            }}
          />
          <Icons
            width="100%"
            height="100%"
            style={{
              // marginTop: "80rem",
              // marginLeft: "-35rem",
              // left: "",
              right: "-85rem",
              position: "absolute",
              transform: `translateX(-${ParallaxAttributes.yOffset / 2.5}px)`,
            }}
          />
          {/* </div> */}
          <GiPencilBrush
            style={{
              width: "100%",
              height: "100%",
              fill: "#ffb400",
              right: "-80rem",
              position: "absolute",
              transform: `translateX(-${ParallaxAttributes.yOffset / 2.5}px)`,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
