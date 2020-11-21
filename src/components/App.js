import React, { Component, useState } from "react";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import WPath from "./NoPath";
import UsePathname from "./LocationDisplay";

import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div id="main">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          <h1 data-testid="location-display">
            <UsePathname />
          </h1>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route component={WPath}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;