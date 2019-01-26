import React, { Component } from "react";
import BaseRouters from "./BaseRouters";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app container">
        <BaseRouters />
      </div>
    );
  }
}

export default App;
