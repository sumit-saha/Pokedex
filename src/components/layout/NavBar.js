import React, { Component } from "react";
import SearchDisplay from "../Search/SearchDisplay";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <Link
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-item-center"
            to="/"
          >
            Pokedex
          </Link>
          <Link
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-text-right"
            to="/SearchDisplay"
          >
            Search
            <i className="fa fa-search" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    );
  }
}
