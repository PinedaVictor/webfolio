import React from "react";
import "../../Styles/main.scss";
import { Row, Container } from "react-bootstrap";

export const Footer: React.FC = () => {
  return (
    <Container fluid>
      <Row style={{ textAlign: "center" }}>
        <div className="footerDivider" />
        <p className="footerLink">All Projects</p>
        <p id="copyRight">&#169; Victor A. Pineda All Rights Reserved, 2021</p>
      </Row>
    </Container>
  );
};
