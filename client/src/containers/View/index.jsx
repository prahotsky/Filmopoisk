import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "../../routes";

import "./style.css";

const View = () => {
  return (
    <main className="view">
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route}></Route>
        ))}
      </Switch>
    </main>
  );
};

export default View;
