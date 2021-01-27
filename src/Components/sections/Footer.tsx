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
      <Row style={{ textAlign: "center" }}>
        <div
          className="contactButton"
          style={{ height: "2px", width: "100%", marginBottom: "1rem" }}
        />
        <p
          style={{
            textAlign: "center",
            width: "100%",
            color: "white",
            fontSize: "2rem",
            textDecoration: "underline",
          }}
        >
          All Projects
        </p>
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
