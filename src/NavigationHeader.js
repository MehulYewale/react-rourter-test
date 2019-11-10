import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavigationHeader extends Component {
  render() {
    const activeCSS = {
      color: "gray",
      textDecoration: "underline",
      backgroundColor: "yellow"
    };
    return (
      <nav>
        <NavLink to="/home" activeClassName="home-active">
          &nbsp; Home &nbsp;
        </NavLink>
        |
        <NavLink to="/jsx" activeStyle={activeCSS}>
          &nbsp; JSX &nbsp;
        </NavLink>
        |<Link to="/css"> CSS </Link>
        {/* link will not allow active or dynamically property change effect */}
        |<NavLink to="/forms"> Forms</NavLink> |
        <NavLink to="/control-comp"> Control Component</NavLink> |
        <NavLink to="/uncontrol-comp"> Uncontrol Component</NavLink> |
        <NavLink to="/stateful"> Stateful Component </NavLink> |
        <NavLink to="/stateless"> Stateless Component</NavLink> |
        <NavLink to="/class-lifecycle-hooks"> Lifecycle Hooks </NavLink> |
        <NavLink to="/function-hooks"> Function Hooks </NavLink> |
        <NavLink to="/pure-memo-comp"> Pure/Memo Component </NavLink> |
        <NavLink to="/http-requester"> Http Requester </NavLink> |
        <NavLink to="/context"> Context Component </NavLink> |
        <NavLink to="/composition-vs-inheritance"> Composition-vs-Inheritance </NavLink>
      </nav>
    );
  }
}

export default NavigationHeader;
