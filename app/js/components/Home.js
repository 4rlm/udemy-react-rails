import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Sample Home Page</h2>
        <ul>
          <li>Sample Item One</li>
          <li>Sample Item One</li>
          <li>Sample Item One</li>
        </ul>
        <p>This is a sample paragraph on home page.</p>
      </div>
    )
  }
}
