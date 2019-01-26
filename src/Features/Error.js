import React from "react";
const Error = props => {
  console.log(props.info);
  return (
    <React.Fragment>
      <h4>Error</h4>
      <button onClick={() => props.info.history.push("/")}>Go Home </button>
    </React.Fragment>
  );
};
export default Error;
//we can use render method
//switch from router-dom
// without path route]]
