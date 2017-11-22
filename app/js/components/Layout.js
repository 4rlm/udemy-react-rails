import React from 'react';

import Button from './Button';
import Timer from './Timer';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Chris',
      lastName: 'Smith',
      isTimerMounted: true
    }
  }

  changeName() {
    this.setState({
      firstName: 'Jane'
    })
  }

  toggleTimers() {
    this.setState(prevState => ({
      isTimerMounted: !prevState.isTimerMounted
    }));
  }

  render() {
    return (
      <div>
        <h1>Welcome to my site!</h1>
        <h3>Happy to have you here.</h3>
        <h1>{this.state.firstName}</h1>
        <Button firstName={this.state.firstName} changeName={this.changeName.bind(this)}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur temporibus distinctio deleniti.</p>

        {this.state.isTimerMounted ?
          <div>
            <Timer />
            <Timer />
            <Timer />
          </div>
          : null
        }

        <button onClick={this.toggleTimers.bind(this)}>Toggle Timers</button>

      </div>
    )
  }
}
