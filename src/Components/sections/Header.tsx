import React from "react";
import { Row } from "react-bootstrap";

export const Header: React.FC = () => {
  return (
    <Row
      style={{
        backgroundColor: "black",
        top: "0",
        position: "fixed",
        width: "100%",
        zIndex: 1,
        height: "60px",
      }}
    >
      {/* <p>I am the Header</p> */}
    </Row>
  );
};
