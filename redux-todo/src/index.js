/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

require('../assets/css/font-awesome.min.css');
require('../assets/css/style.css');
require('../node_modules/toastr/build/toastr.css');

import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {routes}  
  </Provider>, document.querySelector('#app-container'));
