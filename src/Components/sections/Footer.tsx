import React from "react";
import "../../Styles/components/footer.scss";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <Container fluid>
      <Row style={{ textAlign: "center" }}>
        <div className="footerDivider" />
        <Link className="footerLink" to="AllProjects">
          <p className="footerLink">All Projects</p>
        </Link>
        <p id="copyRight">&#169; Victor A. Pineda All Rights Reserved, 2021</p>
      </Row>
    </Container>
  );
};
