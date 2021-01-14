import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiBiceps } from "react-icons/gi";
import { AiOutlineCode } from "react-icons/ai";
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
  // Figma,
} from "../../Assets/icons";
import { Wave } from "../../Assets/vectors";
import { ParallaxContext } from "../Parallax";
import gig from "../../Assets/images/me2Back.png";

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
            // height: "20rem",
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "10vw",
              width: "100%",
              fontFamily: "OCRAExtended, OCR A Extended",
            }}
          >
            Dexterity
          </p>
          <div
            style={{
              margin: "auto",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <GiBiceps
              size="5rem"
              color="white"
              style={{
                borderRadius: "50%",
                backgroundColor: "#00c5d4",
              }}
            />
          </div>
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
            height: "40rem",
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
            height: "40rem",
            // maxHeight: "35rem",
            overflow: "hidden",
            // backgroundImage: `url(${gig})`,
            // backgroundSize: "100vh 100%",
          }}
        >
          <img
            src={gig}
            width="700px"
            height="700rem"
            style={{
              position: "absolute",
              // marginTop: "-20rem",
              // marginLeft: "-20rem",
              // float: "right",
              right: "-8rem",
              bottom: "0",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
            }}
          >
            <DexFrameworkIcons icons={[Ai, Ps]} />
          </div>
          <div style={{ position: "absolute" }}>
            <p
              style={{
                fontSize: "3rem",
                color: "white",
                fontFamily: "OCRAExtended, OCR A Extended",
                textAlign: "center",
              }}
            >
              Design
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
