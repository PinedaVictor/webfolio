import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiPencilBrush } from "react-icons/gi";
import { AiFillCode, AiOutlineCode } from "react-icons/ai";
import { FaFileCode, FaCode } from "react-icons/fa";
import { GrCode } from "react-icons/gr";
import { BiCodeAlt, BiCodeCurly } from "react-icons/bi";

export const Dexterity: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        // backgroundColor: "#000d2a",
        marginBottom: "30px",
        margin: "0",
        padding: "0",
      }}
    >
      {/* <Row>
        <h4
          style={{
            color: "#00a6ed",
            fontWeight: "bold",
            fontFamily: "OCRAExtended, OCR A Extended",
            display: "block",
            // marginLeft: "2%",
          }}
        >
          Dexterity
        </h4>
      </Row> */}
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
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{
            // backgroundColor: "#0cce6b",
            // backgroundColor: "#000d2a",
            height: "40rem",
            // maxHeight: "35rem",
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
            }}
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{
            // backgroundColor: "aqua",
            height: "40rem",
            // maxHeight: "35rem",
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
          <GiPencilBrush
            style={{ width: "100%", height: "100%", fill: "#ffb400" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
