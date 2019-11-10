// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
// if you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
// All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.

import React, { Component } from "react";
import AppInput from './../components/app.input';

const NameContext = React.createContext();
  
class ContextComp extends Component {

  state = {
    inputValue: 'Raj'
  };

  constructor(props) {
    super(props);
    console.log('ContextComp render');
  }
  inputChangeHandler = (e) => {
    console.log('inputChangeHandler: ', e.target.value);
    this.setState({inputValue: e.target.value});
  }

  render() {
    const name = {
      inputLabel: 'Enter Name',
      inputValue: this.state.inputValue,
      inputChange: this.inputChangeHandler
    };
    return <>
    <h4>ContextComp</h4>
    <h5>Updated Context Name : {this.state.inputValue} </h5>
    {/* Using multiple value passing */}
    {/* <NameInput inputLabel="Enter Name" inputChange={this.inputChangeHandler} inputValue={this.state.inputValue}></NameInput> */}
  
    {/* Using Context */}

    <NameContext.Provider value={name}>
      <Content> </Content>
    </NameContext.Provider>
  </>
  }
}

function Content() {
  console.log('Content renders');
  return (
    <>
    <div>Content Here</div>
      <NameInput />
      <h5>Name Input class : </h5>
      <NameInputClass></NameInputClass>
    </>
  );
}

class NameInputClass extends Component {
  static contextType = NameContext;
  constructor(props){
    super(props);
    console.log('NameInputClass constructor', this.context);
  }
  render() {
    console.log('NameInputClass renders', this.context);
    // <AppInput {...this.context}></AppInput> -- this does not work because we don't have same property name (label, inputLabel)
    return <AppInput label={this.context.inputLabel} change={this.context.inputChange} inputValue={this.context.inputValue}></AppInput>;
  }
}

const NameInput = props => {
  console.log('NameInput renders');
  return props.inputLabel ?
    <AppInput label={props.inputLabel} change={props.inputChange} inputValue={props.inputValue}></AppInput> :
     <NameContext.Consumer>
      {({inputLabel, inputChange, inputValue}) => (
        <AppInput label={inputLabel} change={inputChange} inputValue={inputValue}></AppInput>
      )}
    </NameContext.Consumer>;
};

export default ContextComp;