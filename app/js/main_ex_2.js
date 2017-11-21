import React from 'react';
import ReactDom from 'react-dom';

// VERSION 10 - REACT CLASSES (V1-9 IN 'MAIN_EXAMPLE_1.JS')
// VERY SIMPLE VERSION OF CLASS WITH ES6
const Welcome = ((props) => {
  return (
    <div>
      <h4>Welcome to my site, {props.firstName}!</h4>
      <h4>Content: {props.lastName}</h4>
    </div>
  )
})

// CREATING CLASS VIA ES6

class App extends React.Component {
  nameMapper(nameArray) {
    return nameArray.map((name, i) =>
      <li key={i}>{name}</li>
    )
  }

  render() {
    const nameArray = ["Chris", "Jane", "BillyBob", "JoeyJoeJoe", "Mary"];
    return (
      <div>
        <Welcome firstName="Chris" lastName="Smith"/>
        <ul>
          {this.nameMapper(nameArray)}
        </ul>
        <Welcome firstName="Jane" lastName="Doe"/>
      </div>
    )
  }
}


ReactDom.render(
  <App />,
  document.getElementById('app')
);
