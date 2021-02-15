import React from "react";
import "../../Styles/components/footer.scss";
import { Row, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <Container fluid>
      <Row style={{ textAlign: "center" }}>
        <div className="footerDivider" />
        <Link className="footerLink" to="AllProjects">
          <p>All Projects</p>
        </Link>
        <div id="footerMediaIcons">
          <a
            href="https://github.com/PinedaVictor"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub id="gitHubIcon" size="1.5rem" color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-pineda-84956599/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="1.5rem" color="white" />
          </a>
        </div>
        <p id="copyRight">&#169; Victor A. Pineda All Rights Reserved, 2021</p>
      </Row>
    </Container>
  );
};
