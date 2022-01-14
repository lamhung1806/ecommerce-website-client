import React from "react";
import Main from "../component/pruduct/Main";
import Slider from "../component/sider/slider";
import { Switch, Route } from "react-router-dom";
import { Router } from "./Config";

function Routerr() {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Slider></Slider>
        <Main></Main>
      </Route>
      <Switch>
        {Router.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
}

export default Routerr;
