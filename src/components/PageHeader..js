import React, { Component } from "react";
class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  // We can make it as a Pure customized component by doing follwing, even we can customize that 
  // shouldComponentUpdate(nextProps, nextState) { 
  //   return this.props.headerName !== nextProps.headerName; // nextState.count < 5 && 
  // }

  render() {
    console.log("PageHeader renders..(Non Pure)");
    return (
      <>
       <h4>{ this.props.headerName }</h4> 
      <button
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
      </>
    );
  }
}

export default PageHeader;
