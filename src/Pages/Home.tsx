import React, { useEffect, useState } from "react";
import { Layout } from "../Components/ui/Layout";
import { Hero, FeaturedProjects, Dexterity } from "../Components/sections";

export const Home: React.FC = () => {
  const [yOffset, setYOffset] = useState(0);
  const handleScroll = () => setYOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log("Y Offset:::", yOffset);
  return (
    <Layout>
      <Hero yOffset={yOffset} />
      <FeaturedProjects />
      <Dexterity />
    </Layout>
  );
};
