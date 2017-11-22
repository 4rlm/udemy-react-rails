import React from 'react';
import ReactDom from 'react-dom';

import Layout from './components/Layout';

import names from '../../mock-data';


class App extends React.Component {

  render() {
    return (
      <div>
        <Layout names={names} />
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
