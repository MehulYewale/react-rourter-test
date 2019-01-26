import React from "react";

const GetUIs = (props) => <div>function can return elments and can be reusable: {props.value}</div>;

const Jsx = (props) => {
  console.log("Inside Jsx ", props);

  const getUI = (arg) => <div>function can return elments and can be reusable: {arg}</div>;

  const Expr = <React.Fragment>
  <div>{2 + 2 === 4 ? 4 : 0}</div>
  <div>{2+2 + ' Raj'}</div>
  </React.Fragment>;

  // here, React.Fragment is like
  // React {
  //   Fragment : <div>test</div>  .. dot notation for object children
  // }

  const Details = <React.Fragment> <div>can be used inside jsx as variable</div>
  {Expr}
  </React.Fragment>;

  // const JsxAsObject = ("img", { src: "./favorite.jpg" });  // not working for src

  const JsxAsObject2 = React.createElement(
    "button",
    {
      className: "btn btn-primary"
    },
    "jsxObjectButton"
  );
  
  /* React Create following objets  */
  // const JsxAsObject2 = {
  //   type: "button",
  //   props: {
  //     className: "btn btn-primary",
  //     children: "jsxObjectButton"
  //   }
  // };
 
  const getUIs = (m) => {
    // var uis = '';
    var uiArr = [];
    for(var i=0; i<m; i++){
      // uis += '<GetUIs key={i}></GetUIs>'; //will not work
      // uis = GetUIs({value:3}); work for only once
      uiArr.push(<GetUIs value={i} key={i}></GetUIs>);
    }
    return uiArr;
    //return uis;
  }
 
  return (
    <div>
      <h3>JSX</h3>
      { Details }
      {/* {Expr} */}

      { getUI(1) }
      { getUI(1) }
      { getUI(2) }

      <GetUIs value='10'/>

      {getUIs(3)}

      OR
      {Array.apply(0, Array(4)).map(function (x, i) {
        return <GetUIs value={i+1} key={i} />;
      })}

      <br/>

      {JsxAsObject2}
      
    </div>
  );
};

export default Jsx;
