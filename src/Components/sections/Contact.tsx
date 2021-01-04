import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contact: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "red",
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
        </Col>
      </Row>
    </Container>
  );
};
