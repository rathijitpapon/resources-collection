import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Home from "../views/Home";

const MainLayout = () => {
  return (
    <div>
        <Switch>       
          <Route exact path="/" component={Home} />
          <Redirect path="*" to="/" component={Home} />
        </Switch>
    </div>
  );
};

export default MainLayout;
