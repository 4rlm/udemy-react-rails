// BASIC EXAMPLES IN MAIN_EXAMPLE_1-2.JS
// THIS IS FIRST EXAMPLE OF USING A DEDICATED COMPONENTS DIRECTORY.
// RENAMED THIS FILE APP.JS FROM MAIN.JS
// NEED TO CHANGE FILE NAME IN WEBPACK.JS TOO

import React from 'react';
import ReactDom from 'react-dom';

import NameList from './components/NameList'; // If 'Default' in component {} not needed.

class App extends React.Component {
  render() {
    return (
      <div>
        <NameList phrase="I'm on the top." />
        <NameList phrase="I'm on the bottom." />
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
