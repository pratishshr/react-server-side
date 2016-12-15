/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/17/16.
 */

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from '../../redux-todo/src/routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../../redux-todo/src/reducers';

let router = express.Router();
let ReactRouter = require('react-router');

router.get('*', (req, res) => {
  let store = createStore(reducer);

  ReactRouter.match({
    routes: routes,
    location: req.url
  }, (err, redirectLocation, renderProps) => {
    if (renderProps) {
      getComponentApiCall(renderProps, store).then(() => {
        let renderedHtml = ReactDOMServer.renderToString(
          <Provider store={store}>
            <ReactRouter.RouterContext {...renderProps} />
          </Provider>
        );

        res.send(renderFullPage(renderedHtml, store.getState()));
      });

    }
  });
});

function getComponentApiCall(renderProps, store) {
  let component = renderProps.components[renderProps.components.length - 1].WrappedComponent;
  return component.fetch(store);
}

function renderFullPage(renderedHtml, preloadedState) {
  return `
   <!DOCTYPE html>
      <html lang="en">
      <head>
          <base href="/">
          <meta charset="UTF-8">
          <title>React Starter</title>
          <!-- Bootstrap -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      
          <!-- Custom css -->
          <link rel="stylesheet" type="text/css" href="public/bundle.css">
      
          <!-- jquery -->
          <script src="https://code.jquery.com/jquery-3.1.0.min.js"
                  integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
      
          <!-- Bootstrap JavaScript -->
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                  integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
                  crossorigin="anonymous"></script>
      </head>
      <body>
      <div id="app-container">${renderedHtml}</div>
      <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}</script>
      <script src="public/bundle.js"></script>
      </body>
      </html>`
}

export default router;
