import React from "react";
import { Container, Col } from "react-bootstrap";
import { ProjectCard } from "../ui/ProjectCard";

export const Temp: React.FC = () => {
  const FeaturedProjects = [1, 2, 3, 4];
  return (
    <Container
      fluid
      style={{
        backgroundColor: "red",
        margin: "0",
        padding: "0",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {FeaturedProjects.map((item) => (
        <ProjectCard key={item} />
      ))}
    </Container>
  );
};
