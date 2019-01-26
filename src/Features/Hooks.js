import React, { Component } from "react";
import AppCountries from "./../components/app.countries";

class Hooks extends Component {

  state = { value: 'India'};

  constructor() {
    super();
    console.log("Hooks Constructor");
  }

  changeHandler(e){
    this.setState({value: e.target.value});
    console.log("Hooks changeHandler : ", this.state.value);
  }

  componentWillMount() {
    console.log("Hooks componentWillMount");
  }

  componentDidMount(prevProps) {
    console.log("Hooks componentDidMount", prevProps);
  }

  componentWillUpdate() {
    console.log("Hooks componentWillUpdate");
  }

  componentDidUpdate(prevProps) {
    console.log("Hooks componentDidUpdate", prevProps);
  }

  componentWillReceiveProps(props) {
    console.log("Hooks componentWillReceiveProps", props);
  }

  shouldComponentUpdate(props) {
    console.log("Hooks shouldComponentUpdate", props);
    return true;
  }

  componentDidCatch() {
    console.log("Hooks componentDidCatch");
  }

  componentWillUnmount() {
    console.log("Hooks componentWillUnmount");
  }

  render() {
    console.log("Hooks render");
    return <div>
    <h2>Hooks</h2>
    <AppCountries label="Contries" selectValue={this.state.value} change={this.changeHandler.bind(this)}></AppCountries>
    </div>;
  }
}

export default Hooks;
