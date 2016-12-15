/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/5/16.
 */


import {combineReducers} from 'redux';

// Reducers
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todoReducer
});

export default rootReducer;