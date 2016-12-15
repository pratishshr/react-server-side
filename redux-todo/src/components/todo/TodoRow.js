/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';

// Util
import { httpUtil } from '../../utils';

class TodoRow extends Component {
  constructor() {
    super();
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo() {
    if (confirm('Are you sure?')) {
      httpUtil.destroy('todos', this.props.todo.id).then(() => {
        this.props.fetchTodos();
        toastr.success(`Deleted '${this.props.todo.title}'`);
      }).catch((err) => {
        toastr.error(err.message);
      });
    }
  }

  render() {
    let props = this.props;
    return (
      <li className="list-group-item">
        <Link to={`/todos/${props.todo.id}/update`}>
          {(props.todo.isComplete) ?
            <s>{props.todo.title}</s>
            : props.todo.title
          }
        </Link>
        <span onClick={this.deleteTodo} className="glyphicon glyphicon-remove pull-right cursor-pointer"></span>
      </li>
    )
  }
}

export default TodoRow;