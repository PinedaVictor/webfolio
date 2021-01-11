import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Drawer } from "../ui/Drawer";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

export const Header: React.FC = () => {
  const [drawer, toggle] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "transparent",
        // backgroundColor: "red",
        top: "0",
        position: "fixed",
        width: "100%",
        height: "70px",
        padding: "10px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Button
        onClick={() => {
          toggle(!drawer);
        }}
        style={{
          // padding: "10px",
          // margin: "0",
          backgroundColor: "black",
          border: "2px solid white",
          borderRadius: "15px",
          marginLeft: "-33px",
          width: "3.7rem",
          // height: "3rem",
        }}
      >
        {drawer ? (
          <IoMdClose size="2.5rem" style={{ paddingLeft: "7px" }} />
        ) : (
          <CgMenu
            size="2.5rem"
            style={
              {
                // backgroundColor: "red",
                // paddingBottom: "5px",
              }
            }
          />
        )}
      </Button>
      <Drawer control={drawer} />
    </div>
  );
};
