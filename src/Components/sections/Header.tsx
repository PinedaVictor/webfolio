import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import { Drawer } from "../ui/Drawer";

export const Header: React.FC = () => {
  const [drawer, toggle] = useState(false);

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
      <Button
        onClick={() => {
          toggle(!drawer);
        }}
      ></Button>
      <Drawer control={drawer} />
    </Row>
  );
};
