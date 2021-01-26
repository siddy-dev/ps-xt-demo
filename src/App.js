import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" exact component={LandingPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
