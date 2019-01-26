import React, { Component } from 'react';
class AppCountries extends Component {
    state = { selected : 'India' };

    // The best practice is to ensure that your states are assigned in the constructor(). The reason React allows the setState() within 
    // this lifecycle method is for special cases like tooltips, 
    // modals, and similar concepts when you would need to measure a DOM node before rendering something that depends on its position. 
    constructor() {
        super();
        console.log("AppSelect constructor");  // first execution method of component class
    }

    componentWillMount() {
        console.log("AppSelect componentWillMount"); // only once before render
    }

    componentDidMount(prevProps) {
        console.log("AppSelect componentDidMount", prevProps); // only once after render
        // This is a good place to initiate API calls, if you need to load data from a remote endpoint. we can access setState here
    }

    componentWillUpdate(prevProps) {
        console.log("AppSelect componentWillUpdate ",prevProps); // call when state get set(updated), before render
    }

    componentDidUpdate(prevProps) {
        console.log("AppSelect componentDidUpdate",prevProps); // call when state get updated, after render 
    }

    componentWillReceiveProps(props) {
        console.log("AppSelect componentWillReceiveProps", props); // call if component recieve updated props then triggers shouldCompUpdate
    }

    shouldComponentUpdate(props) {
        console.log("AppSelect shouldComponentUpdate", props); // on state change, before componentWillUpdate
        return true;    // if false then it stops the execution of cycle
    }

    componentDidCatch() {
        console.log("AppSelect componentDidCatch");  // if it catches any error 
    }

    componentWillUnmount() {  //when getting removed from DOM
        console.log("AppSelect componentWillUnmount");
    }

    render() { 
        console.log("AppSelect render"); //  render call everytime when prop or state get updated
        const countries = ['India', 'US', 'UK'];   //best practice to keep it outside of render
        // You cannot modify the component state within the render().

        // const items = countries.map((element, index) => {
        //     return <option key={element} value={element}> {element} </option>
        // });

        return (<div>
            { this.props.label } : &nbsp; &nbsp;
            <select name={this.props.label.toLowerCase()} onChange={this.props.change} defaultValue={this.props.selectValue}>
                <option value="">Select</option>
                {
                    countries.map((element, index) => 
                        <option key={element} value={element}> {element} </option>
                    )
                }
            </select>
        </div> );
    }
}
 
export default AppCountries;