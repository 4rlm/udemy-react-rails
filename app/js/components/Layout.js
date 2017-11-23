import React from 'react';
import { Link } from 'react-router';


export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <header>
        <h1>Welcome to my site!</h1>
        <h3>I'm in the header.</h3>
        <Link to="/timer">Timer</Link>
      </header>

      {this.props.children}



      <footer>
        <h3>in footer</h3>
      </footer>


      </div>
    )
  }
}
