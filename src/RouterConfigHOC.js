import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class RouterConfigHOC extends Component {
  componentWillMount() {
    console.log("Inside RouterConfigHOC ", this.props);
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change", location); // if we manually change url (page refresh will not execute)
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(RouterConfigHOC);
