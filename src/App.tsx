import React from "react";
import "./App.scss";
import firebase from "firebase/app";
import { Home, AllProjects } from "./Pages";
import { firebaseConfig } from "./Config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
firebase.initializeApp(firebaseConfig);
export const App: React.FC = () => {
  return (
    <Router forceRefresh={false}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AllProjects" component={AllProjects} />
      </Switch>
    </Router>
  );
};

export default App;
