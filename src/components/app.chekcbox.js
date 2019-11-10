import React, {useState, useEffect, useCallback} from 'react';

const AppCheckbox = ({checked, label, change}) => {
  const nameObj = useState('A');
  useEffect(() => {
    console.log(nameObj);
  });
  console.log('AppCheckbox renders...', nameObj);
  
  let nameText = label.toLowerCase().replace(' ','_');
  return (<div> <input type="checkbox" name={nameText} checked={checked} onChange={change}/> {label} </div>)
};

export default AppCheckbox;