import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NewsOuter from "./components/NewsOuter";
import ShortSayingsOuter from "./components/ShortSayingsOuter";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/books">
            <Articles />
          </Route>
          <Route exact path="/short-sayings">
            <ShortSayingsOuter />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/news-features">
            <NewsOuter />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
