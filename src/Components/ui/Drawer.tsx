import React from "react";

export const Drawer: React.FC = () => {
  console.log("CLicking this shit");

  return (
    <div
      style={{
        height: "100%",
        width: "250px",
        position: "fixed",
        right: "0",
        zIndex: 1,
        backgroundColor: "red",
        overflowX: "hidden",
        transition: "50.5s",
      }}
    >
      <p style={{}}>idk</p>
    </div>
  );
};
