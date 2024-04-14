
import React from "react";
import ReactDOM from "react-dom"

//   const heading = React.createElement("h1",{id :"heading"},"this is create by the help of the React element")

const root = ReactDOM.createRoot(document.querySelector("#root"));

//  root.render(heading);
  

 // using the JSX Syntax

//   const heading1 = <h1>this is create by the help of JSX Syntax 🚀🚀🚀🚀 </h1>

//  root.render(heading1);

//  console.log(heading1);


//   lets make component composition

   const HeadingComponent = ()=>{
    return (
         <h1> this is the heading component and it is my first component  </h1>
    )
   }

   // second way to create component without using the component
   const HeadingComponent1 = ()=> (
    <>
          <HeadingComponent/>
         <h4> this is the heading component and it is my first component </h4>
    </>
         
    )

    root.render(<HeadingComponent1/>);
   