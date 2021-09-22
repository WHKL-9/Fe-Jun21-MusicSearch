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
import SearchResults from "./components/SearchResults";

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
        />{" "}
      </Switch>
      <SearchResults title ="Avicii"/>
      <SearchResults title ="The Weekend"/>
      <SearchResults title ="Empire of The Sun"/>
    </Router>
  );
}

export default App;
