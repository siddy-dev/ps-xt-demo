import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import { Helmet } from "react-helmet";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Helmet
        title="PS-XT Coding Assignment"
        meta={[
          {
            name: "description",
            content:
              "Coding assignment by sapient(ps-xt), using react and  implmenting server side rendering",
          },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "PS-XT Coding Assignment" },
          {
            property: "og:description",
            content:
              "Coding assignment by sapient(ps-xt), using react and  implmenting server side rendering",
          },
        ]}
      />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
