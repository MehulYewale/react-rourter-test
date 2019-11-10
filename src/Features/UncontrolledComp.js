import React, { Component } from "react";

// you have to ‘pull’ the value from the field when you need it.
// can be used where we have to handle changes while form submission
// stores its own state internally, and you query the DOM using a ref to find its current value when you need it. 
// ref works only for class component and DOM element, it's not working on functional comp.
class UnControlComp extends Component {

  name = '';

  showValue = () => console.log("Show ref Name", this.name.value);

  render() {  
    return <div>
      <h2>UnControl Component</h2>
      <div>
        REF : <input type="text" ref={input => this.name = input} defaultValue="abc"/>
              <button onClick={this.showValue}> Show Value </button>
      </div>
    </div>
  }
}

export default UnControlComp;
