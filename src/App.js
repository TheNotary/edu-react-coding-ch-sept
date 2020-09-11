import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./features/static/Header";
import HomePage from "./features/static/HomePage";
import SectionA from "./features/sectionA/SectionA";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/a" component={SectionA} />
      </Switch>
    </div>
  );
}

export default App;
