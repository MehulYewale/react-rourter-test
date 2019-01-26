import React from "react";

import AppCheckbox from "./../components/app.chekcbox";

/* A stateless component has no state(obvious, isn’t it?), it means that you can’t reach `this.state` inside it. It also has no lifecycle 
 so you can’t use componentDidMount and other hooks. However, you may still specify .propTypes and .defaultProps by setting them 
 as properties on the function,  No need of this object */

 /* a functional component has no state, no lifecycle methods and it’s easy to write(plain function), a class component has state, 
 lifecycle methods and React creates an instance of a class component every time React renders it. */


const Stateless = props => {

  let selection = true;

  const handleClick = (e) => {
    console.log("target value ", e.target.checked);
    selection = e.target.checked;
    console.log("handleClick", selection); // but ui will not update, ui updation can be done with Statuful component and State
  }

  return <div>
    <div>Stateless Comp</div>
    <AppCheckbox label="Select checkbox" checked={selection} change={handleClick}></AppCheckbox>
  </div>;
};

export default Stateless;
