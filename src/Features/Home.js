import React, { Component } from "react";
class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Home Comp</h3>
        <h4>
          Welcome &nbsp;
          {this.props.match.params.name
            ? this.props.match.params.name.toUpperCase()
            : "Guest"}
        </h4>

      </div>
    );
  }
}

export default Home;
