import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Drawer } from "../ui/Drawer";
import { Arduino } from "../../Assets/icons";

export const Header: React.FC = () => {
  const [drawer, toggle] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "black",
        top: "0",
        position: "fixed",
        width: "100%",
        zIndex: 2,
        height: "60px",
      }}
    >
      <Button
        onClick={() => {
          toggle(!drawer);
        }}
      ></Button>
      <Arduino />
      <Drawer control={drawer} />
    </div>
  );
};
