import React, { useEffect, useState } from "react";
import "../Styles/main.scss";
import { Layout } from "../Components/ui/Layout";
import {
  Hero,
  FeaturedProjects,
  Dexterity,
  Contact,
} from "../Components/sections";
import { Parallax } from "../Components/Parallax";

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

  return (
    <Layout>
      <Parallax>
        <Hero yOffset={yOffset} viewPort={viewPort} />
        <FeaturedProjects />
        <Dexterity />
        <Contact />
      </Parallax>
    </Layout>
  );
};
