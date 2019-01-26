import React from "react";
import './component.style.css';   // component specific style

const Css = () => {

  // below variable most of the time coming from props so dynamically get changed on user action
  const isHidden = true;
  const classNames = " a b c "; 

  const styleObj = {
    color:'red',
    backgroundColor:'yellow'    // camelCase
  };

// https://www.npmjs.com/package/classnames#usage-with-reactjs  -- classname package 
// Simply import css file import './DottedBox.css' so you can have a separate css file for each component. (import './DottedBox.css';)
// Best practices : https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822

    return (<React.Fragment>
      <h2>Css Style</h2>
      {/* priority matter as we written hide after show css in app.css  */}
        <div className={!isHidden? 'hide': 'show'}> This is isHidden = false</div>
        <div className={isHidden ? 'hide': 'show'}> This is isHidden = true</div>
        <div className="hide show"> className with both class added 'hide show'</div>
        <div className={isHidden ? 'hide': 'hide'} className="show-t"> No duplicate property allowed, last one overrides</div>
        <div className={"show-t " + (isHidden? 'hide' : 'show') + ' show-t'}> show-t , condition, hide-t'</div>
        <div className={"wrapper searchDiv " + classNames}>Expr : wrapper searchDiv " + classNames</div>
        <div className={`wrapper searchDiv ${classNames}`}>Expr : `wrapper searchDiv ${classNames}`</div>
        <div style={{color:'red', backgroundColor:'yellow'}}> Inline Css : style with red color and yellow background </div> <br/>
        <div style={styleObj}> Inline Css : className= styleObj </div>
        <div className="blue-link"> Inline Css : className= styleObj </div>

      {/* <div style="color:green;font-weight:bold"> style attribute string value doesn't work -- error in console</div> */}

    </React.Fragment>);
}


export default Css;
