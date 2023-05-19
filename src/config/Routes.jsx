import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Singin from "../components/login/Signin";
import Singup from "../components/login/Signup";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/signup" component={Singup} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Singin} />
    </Switch>
  );
};

export default Routes;
