import React from "react";
import { Header } from "../sections/Header";
export const Layout: React.FC = (props: any) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
