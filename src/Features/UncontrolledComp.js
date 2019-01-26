import React, { Component } from "react";

// you have to ‘pull’ the value from the field when you need it.
// can be used where we have to handle changes while form submission
// stores its own state internally, and you query the DOM using a ref to find its current value when you need it. 
class UnControlComp extends Component {
  render() {
    return <div>
      <h2>UnControl Component</h2>
    </div>;
    // <input type="text" ref={input => this._name = input} />
  }
}

export default UnControlComp;
