import React from "react";
import { Container, Row } from "react-bootstrap";
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
      <Row style={{ backgroundColor: "", width: "100%" }}>
        <p
          style={{
            textAlign: "left",
            color: "white",
            fontSize: "6vw",
            fontFamily: "OCRAExtended, OCR A Extended",
            borderRadius: "50px",
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
      {/* <Row style={{ backgroundColor: "", width: "100%" }}>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            fontFamily: "OCRAExtended, OCR A Extended",
            float: "right",
            textAlign: "right",
            width: "100%",
            marginTop: "15px",
          }}
        >
          All Projects...
        </p>
      </Row> */}
    </Container>
  );
};
