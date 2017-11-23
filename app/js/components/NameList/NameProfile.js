import React from 'react';
import names from '../../../../mock-data';

export default class NameProfile extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    let {id} = this.props.params;
    this.result = names.find((name) =>
      name.id === +id
    )
    console.log(this.result);
  }


  render() {
    return (

      <div>
        <h2>User Profile Details</h2>
        <h3>Name: {this.result.first_name} {this.result.last_name}</h3>
        <h4>Phrase: {this.result.catch_phrase}</h4>


      </div>
    );
  }

}
