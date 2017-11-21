// const app = document.getElementById('app');
// app.innerHTML = "Hello ES6!"

import React from 'react';
import ReactDom from 'react-dom';

// VERSION 1 - BASIC
// ReactDom.render(
//   <p>Hello React.</p>,
//   document.getElementById('app')
// );



// VERSION 2 - CREATE CONST
// const hello = <h3>I'm an H3!!!</h3>
// ReactDom.render(
//   hello, // pass const hello here, which renders in div id 'app' on index.html
//   document.getElementById('app')
// );

// ReactDom.render(
//   hello, // pass ELEMENT FUNCTION COMPONENT HERE.
//   document.getElementById('app')
// );



// VERSION 3 - COMPONENT: WRAP FUNCTION
// function ELEMENT() {
//     return (
//       <div>
//       <h3>Hello there!</h3>
//       <h5>I'm also in here!</h5>
//       </div>
//     )
// }

// ReactDom.render(
//   <ELEMENT />, // pass ELEMENT FUNCTION COMPONENT HERE.
//   document.getElementById('app')
// );



// // VERSION 4 - Add css className and JS.
// function ELEMENT() {
//   // let name = "Chris" // name is string variable.
//   // name is js object literal.
//   let name = {
//     first: "Chris",
//     last: "Smith"
//   }
//
//     return (
//       <div>
//       <h3 className="bigRed">Hello there {name.first} {name.last}!</h3>
//       <h5>I'm also in here!</h5>
//       </div>
//     )
// }
//
// ReactDom.render(
//   <ELEMENT />, // pass ELEMENT FUNCTION COMPONENT HERE.
//   document.getElementById('app')
// );



// // VERSION 5 - ES6 WAY (V1-5 ARE ES5 WAY)
// const ELEMENT = (() => {
//   let name = {
//     first: "Chris",
//     last: "Smith"
//   }
//
//     return (
//       <div>
//       <h3 className="bigRed">Hello there {name.first} {name.last}!</h3>
//       <h5>I'm also in here!</h5>
//       </div>
//     )
// })
//
// ReactDom.render(
//   <ELEMENT />, // pass ELEMENT FUNCTION COMPONENT HERE.
//   document.getElementById('app')
// );


// VERSION 6 - REFACTORED
// // Welcome Component Defined Here, then passed into App.
// const Welcome = ((props) => {
//   return (
//     <div>
//       <h4>Welcome to my site, {props.firstName}!</h4>
//       <h4>Content: {props.lastName}</h4>
//     </div>
//   )
// })
//
// // App using Welcome Component twice by passing in props.
// const App = (() => {
//     return (
//       <div>
//         <Welcome firstName="Chris" lastName="Smith"/>
//         <Welcome firstName="Jane" lastName="Doe"/>
//       </div>
//     )
// })
//
// ReactDom.render(
//   <App />, // pass ELEMENT FUNCTION COMPONENT HERE.
//   document.getElementById('app')
// );



// // VERSION 7 - PASSING ARRAY AS PROPS
// const Welcome = ((props) => {
//   return (
//     <div>
//       <h4>Welcome to my site, {props.firstName}!</h4>
//       <h4>Content: {props.lastName}</h4>
//     </div>
//   )
// })
//
// const App = (() => {
//   const nameArray = ["Chris", "Jane", "BillyBob", "JoeyJoeJoe", "Mary"]
//     return (
//       <div>
//
//       <ul>
//         {nameArray.map((name, i) =>
//           <li key={i}>{name}</li>
//         )}
//       </ul>
//
//         <Welcome firstName="Chris" lastName="Smith"/>
//         <Welcome firstName="Jane" lastName="Doe"/>
//       </div>
//     )
// })
//
// ReactDom.render(
//   <App />, // pass ELEMENT FUNCTION COMPONENT HERE.
//   document.getElementById('app')
// );


// // VERSION 8 - MAPPING ARRAY WITH FUNCTION.
// const Welcome = ((props) => {
//   return (
//     <div>
//       <h4>Welcome to my site, {props.firstName}!</h4>
//       <h4>Content: {props.lastName}</h4>
//     </div>
//   )
// })
//
// const App = (() => {
//   const nameArray = ["Chris", "Jane", "BillyBob", "JoeyJoeJoe", "Mary"]
//   const nameMapper = (() =>
//     nameArray.map((name, i) =>
//       <li key={i}>{name}</li>
//     )
//   );
//
//     return (
//       <div>
//         <Welcome firstName="Chris" lastName="Smith"/>
//         <Welcome firstName="Jane" lastName="Doe"/>
//
//         <ul>
//           {nameMapper()}
//         </ul>
//
//       </div>
//     )
// })
//
// ReactDom.render(
//   <App />, // pass ELEMENT FUNCTION COMPONENT HERE.
//   document.getElementById('app')
// );


// VERSION 9 - INLINE STYLE ATTRIBUTES IN HTML ELEMENTS
const Welcome = ((props) => {
  return (
    <div>
      <h4>Welcome to my site, {props.firstName}!</h4>
      <h4>Content: {props.lastName}</h4>
    </div>
  )
})

const App = (() => {
  const nameArray = ["Chris", "Jane", "BillyBob", "JoeyJoeJoe", "Mary"]
  const nameMapper = (() =>
    nameArray.map((name, i) =>
      <li key={i}>{name}</li>
    )
  );

  const redBackground = {
    'backgroundColor': 'red',
    'fontSize': 20
  };

  const changeHandler = ((event) => {
    console.log(event.target.value)
  })

    return (
      <div style={redBackground}>
        <Welcome firstName="Chris" lastName="Smith"/>

        <ul>
          {nameMapper()}
        </ul>

        <Welcome firstName="Jane" lastName="Doe"/>
        <input onChange={changeHandler}/>

      </div>
    )
})


ReactDom.render(
  <App />, // pass ELEMENT FUNCTION COMPONENT HERE.
  document.getElementById('app')
);
