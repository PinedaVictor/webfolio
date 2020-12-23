import React from "react";
import { Layout } from "../Components/ui/Layout";
import { Hero, Projects, Dexterity } from "../Components/sections";
import { Temp } from "../Components/sections/ProjTemp";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      {/* <Projects /> */}
      <Temp />
      <Dexterity />
    </Layout>
  );
};
