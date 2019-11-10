// Hooks are functions that let you “hook into” React state and lifecycle features from function components.
// React provides a few built-in Hooks like useState . You can also create your own Hooks to reuse stateful behavior between different components.
// We ca't access created hooks in other components, every file has it's own memory space for each component
// useReducer, which is more suited for managing state objects that contain multiple sub-values.or when the next state depends on the previous one
// function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.
// https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks

import React, { useState, useEffect, useReducer, useRef, useCallback, useMemo } from "react";
import AppCheckbox from "./../components/app.chekcbox";

function FunctionHooks() {
    const nameObj = useState('RAJ'); // constructor of class to initialize  state variable
    const [name, setName] = useState('JAY');
    const [tName, setTName] = useState('AJAY');
    const [emp, setEmp] = useState({name: 'VIJAY', salary:2000});
    const refFirstName = useRef(null);
    // const fName = useName('Sanjay');

    useEffect(() => {
        console.log(nameObj);
        return () => { console.log('clearing');}; 
    }, [nameObj[0]]);

    useEffect(() => {
        console.log(emp);
        return () => { console.log('clearing');}; 
    }, [emp]); 
    // [] empty array indicated as componentDidMount -- only run on after rendering component and above clearing return function like componentWillMount
    // [emp] array with value works as componentDidMount or componentDidUpdate if emp changes, return calls componentWillMount/componentWillUpdate,

    // useEffect gets call after DOM rendering
    useEffect(() => {
        console.log(name);
         return () => { console.log('clearing');}; 
    }, [name]);  

    // useCallBack and useMemo gets call without waiting for DOM rendering 
    // shouldComponentUpdate - SCU
    const a = useMemo(()=> {
        console.log(name);
        return 'a called';
    },[name]);

    // Similar to React.Memo
    const child = useMemo(()=>
        <AppCheckbox label="Focus on Second Name" checked={true} change={()=>{ refFirstName.current.focus();}}></AppCheckbox>
    ,[name]); // we can also use refFirstName

    // shouldComponentUpdate - SCU
    const b = useCallback(()=>{
        console.log(name);
        return 'b called';
    },[name]);

    console.log('component renders...', a);
    console.log('component renders- b...', b());

    return<div className="row">
        <div className="col-6">
            <b> First Name: { nameObj[0] } </b> <br/>
            <input type="text" defaultValue={nameObj[0]} onChange={(e) => nameObj[1](e.target.value)} ref={refFirstName}/> <br/>
        </div>
        <div className="col-6">
            <b> Second Name: { name } </b> <br/>
            <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-6">
            <b> Emp Name: { emp.name } </b> <br/>
            <input type="text" defaultValue={emp.name} onChange={(e) => setEmp({...emp, name: e.target.value})}/>
        </div>
        {/* <div className="col-6">
            <b> fouth Name: { fName } </b> <br/>
            <input type="text" defaultValue={fName} onChange={(e) => {fName = e.target.value}} />
        </div> */}
        <div className="col-6">
            { child }
            {/* render gets callrd on every setState(setName, setEmp, ...), so child component also renders on every state change
            So to avoid we use useMemo to render on second name change only*/}
        </div>
    </div>;
}

function nameReducer(state, action) {
    switch (action.type) {
        case 'first':
          return {...state, name: action.name};
        case 'emp':
          return {...state, emp: action.emp};
        default:
          throw new Error();
      }
}

function ReducertHooks() {
    const nameObj = useState('VIJAY');
    const [name, setName] = useState('JAY');
    const [state, dispatch] = useReducer(nameReducer, {name:'JAY', emp: {name:'VIJAY', salary:3000}});

    // CDM CWU
    useEffect(function() {
        console.log('useEffect',state);
    }, [state])

    // console.dir(nameObj);
    return<div className="row">
        <div className="col-6">
            <b> First Name: { state.name } </b> <br/>
            <input type="text" defaultValue={state.name} onChange={(e) => dispatch({type:'first', name: e.target.value})}/> <br/>
        </div>
        <div className="col-6">
            <b> Emp Name: { state.emp.name } </b> <br/>
            <input type="text" defaultValue={state.emp.name} onChange={(e) => dispatch({type:'emp', emp:{...state.emp, name: e.target.value}})}/>
        </div>
    </div>;
}

function useName(nameValue) {
    const [name, setName] = useState('JAY');

    // CDM CWU
    useEffect(function() {
        console.log('useEffect',name);
        setName(nameValue);
    }, [name]);

    return name;
}

export default FunctionHooks;
// export default ReducertHooks;
