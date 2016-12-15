/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Components
import App from './components/App';
import Dashboard from './components/dashboard/Dashboard';

// Todo Components
import Todo from './components/todo/Todo';
import TodoList from './components/todo/TodoList';
import TodoForm from './components/todo/TodoForm';

import NotFound from './components/404NotFound/NotFound';

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="/todos" component={Todo}>
        <IndexRoute component={TodoList}/>
        <Route path="add" component={TodoForm}/>
        <Route path=":todoId/update" component={TodoForm}/>
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default routes;