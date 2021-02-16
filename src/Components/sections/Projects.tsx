import React from "react";
import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "../ui/ProjectCard";
import { Foodie, Happiibook, UIS, Research } from "../../Data/projects";

export const FeaturedProjects: React.FC = () => {
  const FeaturedProjects = [Foodie, UIS, Happiibook, Research];

  return (
    <Container fluid id="projectsWrapper">
      <Row id="projectTitleWrapper">
        <p id="projectsTitle">Projects</p>
      </Row>
      {FeaturedProjects.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </Container>
  );
};
