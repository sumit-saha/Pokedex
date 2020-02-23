import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import SearchBar from "./components/Search/SerachBar";
import SearchDisplay from "./components/Search/SearchDisplay";

import Pokemon from "./components/pokemon/Pokemon";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Route exact path="/SearchBar" component={SearchBar} />
            <Route exact path="/SearchDisplay" component={SearchDisplay} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
