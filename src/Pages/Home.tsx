import React, { useEffect, useState } from "react";
import { Layout } from "../Components/ui/Layout";
import { Hero, FeaturedProjects, Dexterity } from "../Components/sections";

export const Home: React.FC = () => {
  const [yOffset, setYOffset] = useState(0);
  const [viewPortWidth, setViewPortWidth] = useState(0);
  const handleScroll = () => setYOffset(window.pageYOffset);
  const view = window.visualViewport.width;
  const handleViewPortResize = () => {
    setViewPortWidth(window.visualViewport.width);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleViewPortResize);
    return () => window.removeEventListener("resize", handleViewPortResize);
  }, []);
  console.log("The view:::", view);
  return (
    <Layout>
      <Hero yOffset={yOffset} />
      <FeaturedProjects />
      <Dexterity />
    </Layout>
  );
};
