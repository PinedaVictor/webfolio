import React from "react";
import "./App.css";
import firebase from "firebase/app";
import { Home } from "./Pages/Home";
import { firebaseConfig } from "./Config";

firebase.initializeApp(firebaseConfig);
export const App: React.FC = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
