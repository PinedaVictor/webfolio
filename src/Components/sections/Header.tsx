import React, { useState } from "react";
import { Row, Button, Container } from "react-bootstrap";
import { Drawer } from "../ui/Drawer";

export const Header: React.FC = () => {
  const [drawer, toggle] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
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
    </div>
  );
};
