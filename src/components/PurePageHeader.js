import React, { PureComponent } from "react";
class PurePageHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    console.log("PurePageHeader renders..");
    return (
      <>
       <h4> Pure - { this.props.headerName }</h4> 
      <button
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
      </>
    );
  }
}

export default PurePageHeader;
