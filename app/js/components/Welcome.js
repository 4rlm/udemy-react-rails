import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
      <h2>The top level component pass this message along: {this.props.originalPhrase}</h2>
        <h4>Welcome to my site, {this.props.firstName}!</h4>
        <h4>Content: {this.props.lastName}</h4>
      </div>
    )
  }
}
