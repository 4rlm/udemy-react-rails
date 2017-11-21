import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
      <h2>The top level component pass this message along: {this.props.originalPhrase}</h2>
        <h4>Welcome to my site, {this.props.firstName}!</h4>
        <h4>Content: {this.props.lastName}</h4>
        {this.props.element}
      </div>
    )
  }
}

// CUSTOM VALIDATOR
const lengthChecker = ((props, propName, component) => {
  if (props[propName]) {
    let val = props[propName]
    if (typeof val === 'string') {
      // return val.length <= 5 ? null : new Error(propName + 'in' + component + 'is too short'); // ES5
      return val.length <= 5 ? null : new Error(`${propName} in ${component} is too short`); // ES6 - Backtick Notation
    }
  }
  return null;
})

// VALIDATIONS (NOT WORKING)
Welcome.propTypes = {
  firstName: lengthChecker,
  // firstName: React.PropTypes.string, // bool, element, object, number, etc.
  // lastName: React.PropTypes.string,
  // originalPhrase: React.PropTypes.string.isRequired,
  // element: React.PropTypes.element
  // element: React.PropTypes.oneOfType([
  //   React.PropTypes.element,
  //   React.PropTypes.string
  // ])
}

// VALIDATIONS (WORKING)
Welcome.defaultProps = {
  originalPhrase: "I don't have any props."
}
