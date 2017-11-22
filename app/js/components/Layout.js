import React from 'react';

import FilterableNameList from './FilterableNameList';
import Timer from './Timer';

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Welcome to my site!</h1>
        <h3>Happy to have you here.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur temporibus distinctio deleniti.</p>
        <Timer />
        <FilterableNameList names={this.props.names} />

      </div>
    )
  }
}
