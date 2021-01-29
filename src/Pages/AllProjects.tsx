import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Layout } from "../Components/ui/Layout";
import { Container } from "react-bootstrap";
import {
  Foodie,
  ThreeDPrinterBuild,
  UDSCar,
  UIS,
  Research,
  Happiibook,
} from "../Data/projects";
import { ProjectCard } from "../Components/ui/ProjectCard";

export const AllProjects: React.FC = () => {
  const projects = [
    ThreeDPrinterBuild,
    UDSCar,
    Research,
    Happiibook,
    Foodie,
    UIS,
  ];
  return (
    <Layout>
      <Container
        fluid
        style={{
          margin: "0",
          padding: "0",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          overflow: "hidden",
          marginBottom: "5rem",
        }}
      >
        <div style={{ width: "100%", height: "10rem" }}>
          <Link
            to="/"
            style={{
              color: "white",
              fontSize: "5rem",
              display: "flex",
              marginLeft: "4rem",
            }}
          >
            <IoChevronBackCircleOutline
              size="3rem"
              style={{
                marginTop: "40px",
              }}
            />
            <p style={{ fontFamily: "OCRAExtended, OCR A Extended" }}>Home</p>
          </Link>
        </div>
        {projects.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </Container>
    </Layout>
  );
};
