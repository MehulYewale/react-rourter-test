import React from 'react';

const AppInput = (props) => {
    let nameText = props.label.toLowerCase();
    return ( 
    <div>
        <label htmlFor={nameText}>{props.label}</label> : &nbsp;
        <input type="text" name={nameText} onChange={props.change}/>
    </div> );
}
 
export default AppInput;