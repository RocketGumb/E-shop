import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.sass";

import Header from "../Header";
import Hero from "../Hero";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="content">
        <Hero />
      </main>
    </Fragment>
    // <Router>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/users">Users</Link>
    //     </li>
    //   </ul>

    //   <Switch>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/users">
    //       <Users />
    //     </Route>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
  );
};

export default App;
