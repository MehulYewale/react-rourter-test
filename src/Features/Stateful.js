import React, { Component } from "react";
import AppCheckbox from './../components/app.chekcbox';

class Statful extends Component {
  state = {
    selection : true
  };

  handleClick = (e) => {
    console.log("value", e.target.checked);
    this.setState({ selection: e.target.checked});
    console.log("handleClick", this.state.selection);

    setTimeout(() => console.log("After Timeout 500 ms:", this.state.selection), 500);
  }

  render() {
    return <div><div>Stateful Comp</div>
    <AppCheckbox label="Select checkbox" checked={this.state.selection} change={(event) => this.handleClick(event)}></AppCheckbox> </div>
  }
}

export default Statful;