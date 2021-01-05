import React from "react";
import { Container } from "react-bootstrap";
import { ProjectCard } from "../ui/ProjectCard";
import { Foodie } from "../../Data/projects";

export const FeaturedProjects: React.FC = () => {
  const FeaturedProjects = [Foodie, Foodie, Foodie, Foodie];

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
      {FeaturedProjects.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </Container>
  );
};
