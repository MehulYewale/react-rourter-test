import React, { Component } from "react";
import AppCountries from "./../components/app.countries";
import AppCheckbox from "./../components/app.chekcbox";
import AppInput from "./../components/app.input";

// This flow kind of ‘pushes’ the value changes to the form component -- Recommended one
// its current value controlled through props and notifies changes through callbacks like onChange
class ControlComp extends Component {

  constructor() {
    super();
    this.state = {
      name : '',
      check_it: false,
      country: 'India',
      error_message: ''
    }
    this.isFormValid = false;
    this.changeHandler.bind(this);
    this.submit.bind(this);
    
  }

  changeHandler = (event) => {
    console.log("Change Handler", );
    const propName = event.target.name;
    const value = event.target.name === 'check_it'? event.target.checked : event.target.value;
    this.changeState(propName,value);
  }

  changeState = (propName, value) => {
    this.setState({
      [propName]: value 
    });
  }

  formValidation = (propName, value) => {
    let msg = '', isValid = true;
    if(this.state.country === '') {
      msg = 'Please select Country';
      isValid = false;
    } else if(this.state.name === '') {
      msg = "Please enter Name";
      isValid = false;
    } 
    this.changeState('error_message', msg);
    return isValid;
  }

  submit = () => {
    this.isFormValid = this.formValidation();
    console.log("submit", this.state);
  }

  render() {
    return <div>
    <h2>Control Component</h2>
    <div className="success">{this.isFormValid && 'Successfully Submitted!'}</div>
    <form>
        <AppCountries label="Country" change={this.changeHandler} selectValue={this.state.country}></AppCountries>
        <AppCheckbox label="Check it" checked={this.state.check_it} change={this.changeHandler}></AppCheckbox>
        <AppInput label="Name" change={this.changeHandler}></AppInput>
        <input type="button" value="Submit" onClick={this.submit}/> <label className="error"> {this.state.error_message} </label>
    </form>
    </div>;
  }
}

export default ControlComp;
