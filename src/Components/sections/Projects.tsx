import React from "react";
import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "../ui/ProjectCard";
import { Foodie, Happiibook, UIS } from "../../Data/projects";

export const FeaturedProjects: React.FC = () => {
  const FeaturedProjects = [Foodie, Happiibook, UIS, Foodie];

  return (
    <Container
      fluid
      style={{
        margin: "0",
        padding: "0",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <Row style={{ backgroundColor: "", width: "100%" }}>
        <p
          style={{
            textAlign: "left",
            color: "white",
            fontSize: "7vw",
            fontFamily: "OCRAExtended, OCR A Extended",
            borderRadius: "5px",
            marginLeft: "7%",
            backgroundColor: "black",
          }}
        >
          Projects
        </p>
      </Row>
      {FeaturedProjects.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </Container>
  );
};
