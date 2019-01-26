import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect, Link } from "react-router-dom";
import Home from "./Features/Home";
import Jsx from "./Features/JSX";
import Css from "./Features/Css";
import Forms from "./Features/Form";
import ControlComp from "./Features/ControlledComp";
import UnControlComp from "./Features/UncontrolledComp";
import Statful from "./Features/Stateful";
import Stateless from "./Features/Stateless";
import Hooks from "./Features/Hooks";
import HttpRequester from "./Features/HttpRequester";
import NavigationHeader from "./NavigationHeader";
import Error from "./Features/Error";
import RouterConfigHOC from "./RouterConfigHOC";

class BaseRouters extends Component {
  render() {
    const home = {
      path: "/home", // only '/' will not work for Redirect route, if '/' the route become always active
      component: Home
    };

    //we can use this in indepedent component. like in Jsx comp
    const CustomLink = ({ children, to, exact }) => (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <div className={match ? "active" : ""}>
            {match ? "> " : ""}
            <Link to={to}>{children}</Link>
          </div>
        )}
      />
    );

    return (
      <BrowserRouter>
        <React.Fragment>
          <NavigationHeader />
          {/* <RouterConfigHOC> */}
          {/* RouterConfigHOC one require if we want to watch on route change */}
          <Switch>
            <Route {...home} exact />
            <Route path="/home/:name" component={Home} />
            <Route path="/jsx" component={Jsx} />
            <Route path="/css" component={Css} />
            <Route path="/forms" component={Forms} />
            <Route path="/control-comp" component={ControlComp} />
            <Route path="/uncontrol-comp" component={UnControlComp} />
            <Route path="/stateful" component={Statful} />
            <Route path="/stateless" component={Stateless} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/http-requester" component={HttpRequester} />

            <Redirect to="/jsx" />
            {/* Redirect works for wrong path as well so following Route will not work */}
            <Route
              children={match => {
                return (
                  <div>
                    <Error info={match} />
                    {console.log(match)}
                  </div>
                );
              }}
            />
            {/* no path needs switch else it will always render, only one(first) no path element will be active*/}
            {/* <Route component={Error} /> */}
          </Switch>
          {/* </RouterConfigHOC> */}

          <CustomLink to="/jsx">JSX</CustomLink>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default BaseRouters;
