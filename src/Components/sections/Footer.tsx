import React from "react";
import "../../Styles/main.scss";
import { Row, Col, Container } from "react-bootstrap";

export const Footer: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "",
      }}
    >
      <Row style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div
          className="contactButton"
          style={{ height: "2px", width: "100%" }}
        />
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ backgroundColor: "" }}
        ></Col>
        <Col xs={12} sm={12} md={6} lg={6} style={{ backgroundColor: "" }}>
          <ul style={{ fontSize: "20px", color: "white" }}>
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
