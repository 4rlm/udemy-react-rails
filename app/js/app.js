import React from 'react';
import ReactDom from 'react-dom';

import Layout from './components/Layout';


class App extends React.Component {

  render() {
    return (
      <div>
        <Layout />
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
