import React from "react";
import "../../Styles/components/layout.scss";
import { Container } from "react-bootstrap";
/* TODO: When site grows implement drawer */
// import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
export const Layout: React.FC = (props) => {
  return (
    <Container fluid id="mainSiteWrapper">
      {/* TODO: When site grows implement drawer */}
      {/* <Header /> */}
      {props.children}
      <Footer />
    </Container>
  );
};
