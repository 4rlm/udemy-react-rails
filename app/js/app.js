import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Timer from './components/Timer';
import FilterableNameList from './components/FilterableNameList';


ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} >
      <Route path="timer" component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
