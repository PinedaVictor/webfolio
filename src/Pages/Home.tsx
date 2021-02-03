import React from "react";
import "../Styles/HomePage.scss";
import { Layout } from "../Components/ui/Layout";
import {
  Hero,
  FeaturedProjects,
  Dexterity,
  Contact,
} from "../Components/sections";
import { Parallax } from "../Components/Parallax";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Parallax>
        <Hero />
        <FeaturedProjects />
        <Dexterity />
        <Contact />
      </Parallax>
    </Layout>
  );
};
