import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Home } from "./Pages/Home";

export const App: React.FC = () => {
  return (
    <Container fluid style={{ backgroundColor: "black" }}>
      <Home />
    </Container>
  );
};

export default App;
