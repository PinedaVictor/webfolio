import React, { createContext, useState, useEffect } from "react";

type ParallaxType = {
  yOffset: number;
  viewPort: { width: number; height: number };
};

export const ParallaxContext = createContext<ParallaxType>({
  yOffset: 0,
  viewPort: { width: 0, height: 0 },
});

export const Parallax: React.FC = (props) => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [viewPort, setViewPort] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleScroll = () => setYOffset(window.pageYOffset);

  const handleViewPortResize = () => {
    setViewPort({
      width: window.innerWidth,
      height: window.innerHeight,
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
    <ParallaxContext.Provider value={{ yOffset, viewPort }}>
      {props.children}
    </ParallaxContext.Provider>
  );
};
