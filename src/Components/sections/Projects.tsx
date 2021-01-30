import React from "react";
import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "../ui/ProjectCard";
import { Foodie, Happiibook, UIS, Research } from "../../Data/projects";

export const FeaturedProjects: React.FC = () => {
  const FeaturedProjects = [Foodie, Happiibook, UIS, Research];

  return (
    <Container fluid id="projectsWrapper">
      <Row style={{ backgroundColor: "", width: "100%" }}>
        <p id="projectsTitle">Projects</p>
      </Row>
      {FeaturedProjects.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </Container>
  );
};
