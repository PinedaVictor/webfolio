import React, { useEffect, useState } from "react";
import { Layout } from "../Components/ui/Layout";
import { Hero, FeaturedProjects, Dexterity } from "../Components/sections";

export const Home: React.FC = () => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [viewPortWidth, setViewPortWidth] = useState(
    window.visualViewport.width
  );
  const handleScroll = () => setYOffset(window.pageYOffset);

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

  console.log("The view:::", viewPortWidth);
  console.log("Y set:::", yOffset);
  return (
    <Layout>
      <Hero yOffset={yOffset} viewPortWidth={viewPortWidth} />
      <FeaturedProjects />
      <Dexterity />
    </Layout>
  );
};
