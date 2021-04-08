import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./games";
import Others from "./other";
import CongratulationScreen from "./shared/CongratulationScreen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/others" component={Others} />
        <Route exact path="/congratulations" component={CongratulationScreen} />
        <Route path="/" component={Games} />
      </Switch>
    </Router>
  );
};

export default Routes;
