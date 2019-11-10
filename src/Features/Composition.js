// if you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
// Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. 
// Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
// we can check render props

import React, { Component } from "react";
import AppInput from './../components/app.input';

class Composition extends Component {
  state = {
    name : 'Aaj',
    nameList: []
  };

  handleClick = (e) => {
    console.log("value", e.target.value);
    this.setState({ name: e.target.value});
    setTimeout(() => console.log("After Timeout 500 ms:", this.state.value), 500);
  }

  resetHandler = () => {
    this.setState({ name: ''});
  }
  addHandler = () => {
    this.setState((state) => ({ nameList: state.nameList.concat([state.name])}));
  }

  render() {
  console.log('Composition renders');

  // const buttonGroup = <ButtonGroup addHandler={this.addHandler} resetHandler={this.resetHandler}></ButtonGroup>;

  // instead of puting these following as child component we can bind them here to avoid passing multiple properties
  const resetButton = <button key="reset" onClick={this.resetHandler}>Reset</button>; 
  const addButton = <button key="add" onClick={this.addHandler}>Add</button>;

    return <>
      <h4>Composition</h4>
      <h5>Name : {this.state.name} </h5>

      {/* <Content addButtons={buttonGroup} inputValue={this.state.name} inputLabel='Enter Name' handleClick={this.handleClick}
      nameList={this.state.nameList}> </Content> */}
      
      <Content addButtons={[resetButton, addButton]}>
          <AppInput label="Enter Name" change={this.handleClick} inputValue={this.state.name}></AppInput>
          <NameList list={this.state.nameList}></NameList>
      </Content>
    </>
  }
}
 
function Content(props) {
  console.log('Content renders');
  return (
    <>
       <h5>Content Here</h5>
       {/* <AppInput label={props.inputLabel} change={props.handleClick} inputValue={props.inputValue}></AppInput>
        <NameList list={props.nameList}></NameList> */}

        {props.children}
        {props.addButtons}
    </>
  );
}

const NameList = (props) => {
    return <ul>
      {
        props.list.map((item, index) => 
        <li key={item + index}>{item}</li>)
      }
    </ul>
}

// const ButtonGroup = (props) => {
//   return <>
//     <button onClick={props.resetHandler}>Reset</button>
//     <button onClick={props.addHandler}>Add</button>
//  </>
// }

export default Composition;