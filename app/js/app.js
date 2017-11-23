import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Timer from './components/Timer';
import FilterableNameList from './components/FilterableNameList';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import NameProfile from './components/NameList/NameProfile';


ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} >
    <IndexRoute component={Home} />
    <Route path="timer" component={Timer} />
    <Route path="names">
      <IndexRoute component={FilterableNameList} />
      <Route path=":id" component={NameProfile} />
    </Route>
    <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('app')
);
