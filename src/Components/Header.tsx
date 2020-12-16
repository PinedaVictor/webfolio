import React from "react";
import "../Styles/main.scss";
import { ReactComponent as IDK } from "../SVGs/idk.svg";
import { Container, Col } from "react-bootstrap";

export const Header: React.FC = () => {
  return (
    <Container className="HeroWrapper">
      <Col style={{ backgroundColor: "", width: "100px" }}>
        <IDK className="initials" />
      </Col>
      <Col style={{ backgroundColor: "green" }}>Vp</Col>
      <Col style={{ backgroundColor: "blue" }}>Vp</Col>
    </Container>
  );
};
