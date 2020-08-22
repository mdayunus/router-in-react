import React from "react";
import Nav from "./comps/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./comps/User";
import Home from "./comps/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route path="/user" component={User} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;
