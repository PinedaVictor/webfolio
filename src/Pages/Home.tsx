import React from "react";
import { Hero, Projects, Dexterity } from "../Components/sections";
import { Layout } from "../Components/ui/Layout";
export const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Projects />
        <Dexterity />
      </Layout>
    </>
  );
};
