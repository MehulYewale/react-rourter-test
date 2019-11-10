import React from 'react';

const AppInput = (props) => {
    let nameText = props.label ? props.label.toLowerCase() : '';
    console.log('AppInput renders');
    return ( 
    <div>
        <label htmlFor={nameText}>{props.label}</label> : &nbsp;
        <input type="text" name={nameText} onChange={props.change} value={props.inputValue}/>
    </div> );
}
 
export default AppInput;