import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const Dexterity: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "red",
        marginTop: "35px",
        marginBottom: "30px",
      }}
    >
      <Row>
        <h4
          style={{
            color: "#00a6ed",
            fontWeight: "bold",
            fontFamily: "OCRAExtended, OCR A Extended",
            display: "block",
            marginLeft: "2%",
          }}
        >
          Dexterity
        </h4>
      </Row>
      <Row
        style={{
          backgroundColor: "",
          marginLeft: "2%",
          marginRight: "2%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{
            backgroundColor: "#0cce6b",
            height: "20rem",
          }}
        ></Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{
            backgroundColor: "#ffb400",
            height: "20rem",
          }}
        ></Col>
      </Row>
    </Container>
  );
};
