import React from 'react';

import Button from './Button';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Chris',
      lastName: 'Smith'
    }
  }

  changeName() {
    this.setState({
      firstName: 'Jane'
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to my site!</h1>
        <h3>Happy to have you here.</h3>
        <h1>{this.state.firstName}</h1>
        <Button firstName={this.state.firstName} changeName={this.changeName.bind(this)}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur temporibus distinctio deleniti officia labore ut quod eum rem aperiam sequi, possimus fuga tempore, unde recusandae fugit. Voluptatibus illum ad aperiam!</p>
      </div>
    )
  }
}
