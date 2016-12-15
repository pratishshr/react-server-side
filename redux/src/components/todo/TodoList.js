/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import Toastr from 'toastr';

// Redux dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import TodoRow from './TodoRow';

//actions
import { todoActions } from '../../actions';

// Utils
import { httpUtil } from '../../utils';

class TodoList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // this.fetch().then((response) => {
    //   this.props.actions.listTodos(response.data.data);
    //   this.props.actions.responseTodo();
    // }).catch((err) => {
    //   Toastr.error(err.message);
    //   this.props.actions.responseTodo();
    // });
  }

  static fetch(store) {
    return httpUtil.get('todos').then((response) => {
      store.dispatch(todoActions.listTodos(response.data.data));
    });
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Todo List</h1>
        </div>
        <Link to="/todos/add" className="btn btn-primary pull-right">
          Add Item
        </Link>
        <div className="clearfix"></div>

        {/* Show a spinner until the request is complete then show the response */}
        <ul className="list-group">
          <li className="list-group-item list-group-item-warning">List of Todos</li>
          {this.props.todos.map((todo, index) => {
            return <TodoRow todo={todo} key={index} index={index} fetchTodos={this.fetchTodos}/>
          })}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.get('todos')
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, todoActions), dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);