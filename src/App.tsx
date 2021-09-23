import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          {<Redirect to="/home" />}
        </Route>
        <Route
          exact
          path="/home"
          render={(routerProps) => <Home {...routerProps} />}
        /><Route
        exact
        path="/details/:id"
        render={(routerProps) => <Details {...routerProps} />}
      />
      </Switch>
      
    </Router>
  );
}

export default App;
