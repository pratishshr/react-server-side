/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/5/16.
 */

// Constants
import actionTypeConstants from '../constants/actionTypeConstants';

// Util
import {httpUtil} from '../utils';

// Libraries
import Toastr from 'toastr';

export function requestTodo() {
  return {
    type: actionTypeConstants.REQUEST_TODO
  }
}

export function responseTodo() {
  return {
    type: actionTypeConstants.RESPONSE_TODO
  }
}

export function listTodos(todos) {
  return {
    type: actionTypeConstants.LIST_TODOS,
    data: todos
  }
}
