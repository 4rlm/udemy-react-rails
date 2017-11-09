// const app = document.getElementById('app');
// app.innerHTML = "Hello ES6!"

import React from 'react';
import ReactDom from 'react-dom';

// ReactDom.render(
//   <p>Hello React.</p>,
//   document.getElementById('app')
// );

const hello = <h3>I'm an H3!!!</h3>

ReactDom.render(
  hello, // pass const hello here, which renders in div id 'app' on index.html
  document.getElementById('app')
);
