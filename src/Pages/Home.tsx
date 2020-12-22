import React from "react";
import { Hero, Projects, Header } from "../Components/sections";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
    </>
  );
};
