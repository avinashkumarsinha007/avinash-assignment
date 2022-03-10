import React from "react";
import { Switch, Route } from "react-router-dom";
import Open from "../Pages/Home/Open";
import { SingleProduct } from "../Pages/SingleProduct";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Open />
      </Route>
      <Route path="/:city/:car">
        <SingleProduct/>
      </Route>
      <Route>Error 404! you have reach the end of the web.</Route>
    </Switch>
  );
};
