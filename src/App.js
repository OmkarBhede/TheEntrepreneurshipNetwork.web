import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantLandingPage from "demos/RestaurantLandingPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <RestaurantLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
