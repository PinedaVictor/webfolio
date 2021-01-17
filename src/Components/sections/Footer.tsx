import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export const Footer: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        height: "15rem",
        backgroundColor: "",
        borderTop: "2px solid white",
      }}
    >
      <Row style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Col xs={12} sm={12} md={6} lg={6} style={{ backgroundColor: "" }}>
          <p
            style={{
              fontFamily: "OCRAExtended, OCR A Extended",
              fontSize: "60px",
              color: "#00c5d4",
              width: "100%",
              textAlign: "center",
            }}
          >
            V.P.
          </p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} style={{ backgroundColor: "green" }}>
          <ul>
            <li>Home</li>
            <li>All Projects</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <p
          style={{
            textAlign: "center",
            width: "100%",
            color: "white",
          }}
        >
          &#169; Victor Pineda All Rights Reserved, 2021
        </p>
      </Row>
    </Container>
  );
};
