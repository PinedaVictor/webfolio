import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../sections/Header";
export const Layout: React.FC = (props: any) => {
  return (
    <Container fluid style={{ backgroundColor: "", margin: "0", padding: "0" }}>
      <Header />
      {props.children}
    </Container>
  );
};
