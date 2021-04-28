import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./games";
import AudioScreen from "./games/audio";
import Others from "./other";
import LevelUpScreenComponent from "../components/shared/LevelUpScreenComponent";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/others" component={Others} />
        <Route path="/audio" component={AudioScreen} />
        <Route path="/select-word" component={Games} />
        <Route path="/level-up" component={LevelUpScreenComponent} />
        <Route path="/" component={AudioScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
