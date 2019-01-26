import React, { Component } from "react";
import { Link, NavLink } from "react-router";

class Feature extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>
          <Link to="/" component="Home" />
        </li>
        <li>
          <NavLink to="/" component="Home" />
        </li>
      </ul>
    );
  }
}

export default Feature;
