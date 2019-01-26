import React from 'react';

const AppCheckbox = ({checked, label, change}) => {
  let nameText = label.toLowerCase().replace(' ','_');
  return (<div> <input type="checkbox" name={nameText} checked={checked} onChange={change}/> {label} </div>)
};

export default AppCheckbox;