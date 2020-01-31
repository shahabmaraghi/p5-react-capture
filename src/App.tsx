import React from "react";
// import "./App.scss";
import Capture from "./component/capture";
// import Result from "./components/result";
// import Dashboard from "./components/dashboard";
// import test from "./components/test";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
// import 'idempotent-babel-polyfill';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Switch>
            <Route
              exact={true}
              path={"/"}
              component={Capture}
            />

        </Switch> */}
        <Switch>
          {/* <Route exact={true} path={"/"} component={Result} /> */}
          <Route exact={true} path={"/capture"} component={Capture} />
          {/* <Route exact={true} path={"/dashboard"} component={Dashboard} />*/}

        </Switch>
      </BrowserRouter>
    </div>
  );
}