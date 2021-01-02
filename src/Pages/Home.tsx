import React, { useEffect, useState } from "react";
import { Layout } from "../Components/ui/Layout";
import { Hero, FeaturedProjects, Dexterity } from "../Components/sections";

export const Home: React.FC = () => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [viewPort, setViewPort] = useState<{ width: number; height: number }>({
    width: window.visualViewport.width,
    height: window.visualViewport.height,
  });

  const handleScroll = () => setYOffset(window.pageYOffset);

  const handleViewPortResize = () => {
    setViewPort({
      width: window.visualViewport.width,
      height: window.visualViewport.height,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleViewPortResize);
    return () => window.removeEventListener("resize", handleViewPortResize);
  }, []);

  // console.log("The view:::", viewPortWidth);
  // console.log("Y set:::", yOffset);
  // console.log("The vieport height::::", window.visualViewport.height);

  console.log("The view port object::::", viewPort);
  return (
    <Layout>
      <Hero yOffset={yOffset} viewPort={viewPort} />
      <FeaturedProjects />
      <Dexterity />
    </Layout>
  );
};
