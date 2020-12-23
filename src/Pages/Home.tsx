import React from "react";
import { Hero, Projects } from "../Components/sections";
import { Layout } from "../Components/ui/Layout";
export const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Projects />
      </Layout>
    </>
  );
};
