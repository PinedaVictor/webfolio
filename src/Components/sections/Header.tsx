import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Drawer } from "../ui/Drawer";
import { CgMenu } from "react-icons/cg";

export const Header: React.FC = () => {
  const [drawer, toggle] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "transparent",
        top: "0",
        position: "fixed",
        width: "100%",
        height: "60px",
        padding: "10px",
        zIndex: 1,
      }}
    >
      <Button
        onClick={() => {
          toggle(!drawer);
        }}
        style={{
          padding: "10px",
          margin: "0",
          backgroundColor: "black",
          border: "2px solid white",
          borderRadius: "50%",
          // float: "right",
        }}
      >
        <CgMenu size="2rem" />
      </Button>
      <Drawer control={drawer} />
    </div>
  );
};
