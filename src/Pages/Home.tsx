import React from "react";
import { Layout } from "../Components/ui/Layout";
import { Hero, FeaturedProjects, Dexterity } from "../Components/sections";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <Dexterity />
    </Layout>
  );
};
