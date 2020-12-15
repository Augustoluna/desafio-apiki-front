import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../screens/HomePage/HomePage";
import DetailsPage from "../screens/DetailsPage/DetailsPage";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/details/:id"}>
          <DetailsPage />
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
