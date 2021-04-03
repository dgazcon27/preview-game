import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./games";
import Others from "./other";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Others} />
        <Route exact path="/games" component={Games} />
      </Switch>
    </Router>
  );
};

export default Routes;
