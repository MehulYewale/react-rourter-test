// PureComponent implements it with a shallow prop and state comparison. If your React component’s render() function renders the same result given 
// the same props and state, you can use React.PureComponent for a performance boost in some cases.
// React.PureComponent’s shouldComponentUpdate() only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. 
// React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”.
// React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes.

import React, { Component, memo } from "react";
import PageHeader from './../components/PageHeader.';
import PurePageHeader from './../components/PurePageHeader';
import AppInput from './../components/app.input';

const MemoInput = memo(AppInput); // functional component will work as Pure comp. //even we can customize it call back method

class PureMemoComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerName1: "Page Header",
            headerName2: 'Pure Page Header'
          };
    }
  
  render() {
    console.log("PureMemoComp renders");
    return <div>
        <h3> Performance Optimizer </h3>
        <PageHeader headerName={this.state.headerName1}> </PageHeader>
        <input type="text" placeholder="Enter Page Header"
        onChange={(e) => this.setState({headerName1: e.target.value})}/>
        <PurePageHeader headerName={this.state.headerName2}></PurePageHeader>
        <input type="text" placeholder="Enter PurePage Header"
        onChange={(e) => this.setState({headerName2: e.target.value})}/>
        <h4> App Input </h4>
        <AppInput label="Type Name:"></AppInput>
        <h4> Memo Input </h4>
        <MemoInput label="Type Name:"></MemoInput>

    </div>
  }
}

export default PureMemoComp;