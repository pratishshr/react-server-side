/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/5/16.
 */

// Constants
import actionTypeConstants from '../constants/actionTypeConstants';

// Libraries
import Immutable from 'immutable';

let initialState = Immutable.Map({
  isFetching: false,
  todos: []
});

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypeConstants.LIST_TODOS:
      return state.set('todos', action.data);

    default:
      return state;
  }
}