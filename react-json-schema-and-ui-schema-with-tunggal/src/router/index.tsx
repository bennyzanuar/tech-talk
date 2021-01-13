import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sample1 from "screens/sample-1";
import Sample2 from "screens/sample-2";
import Sample3 from "screens/sample-3";
import HomeScreen from "screens/home";

export default function BasicExample() {
  return (
    <Router>
      <div className="header">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sample-1">Sample 1</Link>
          </li>
          <li>
            <Link to="/sample-2">Sample 2</Link>
          </li>

          <li>
            <Link to="/sample-3">Sample 3</Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/sample-1">
            <Sample1 />
          </Route>
          <Route path="/sample-2">
            <Sample2 />
          </Route>
          <Route path="/sample-3">
            <Sample3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
