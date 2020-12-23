import React from "react";
import "../../Styles/main.scss";
import { Container } from "react-bootstrap";
import { ProjectCard } from "../ui/Card";

export const Projects: React.FC = () => {
  const projects = [1, 2, 3];
  return (
    <Container fluid style={{ backgroundColor: "", maxWidth: "80rem" }}>
      <div
        className="wrapper"
        style={{
          backgroundColor: "",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "auto",
          maxWidth: "80rem",
        }}
      >
        {projects.map((item, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
      <div>
        <p
          style={{
            color: "#ff592e",
            fontWeight: "bold",
            fontFamily: "OCRAExtended, OCR A Extended",
            display: "block",
            // margin: "auto",
            float: "right",
          }}
        >
          Projects Archive...
        </p>
      </div>
    </Container>
  );
};
