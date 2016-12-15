/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/5/16.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import _ from 'lodash';
import Immutable from 'immutable';

// Middlewares 
import ReduxThunk from 'redux-thunk';

let preloadedState = window.__PRELOADED_STATE__;

function convertToImmutableMap(state) {
  let convertedState = _.cloneDeep(state);
  for (let key of Object.keys(state)) {
    convertedState[key] = Immutable.Map(convertedState[key]);
  }

  return convertedState;
}
export default function configureStore() {
  return createStore(
    rootReducer,
    convertToImmutableMap(preloadedState),
    compose(
      applyMiddleware(ReduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}