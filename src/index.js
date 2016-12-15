/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/16/16.
 */

import express from 'express';

import controllers from './controllers';

import bodyParser from 'body-parser';
import * as handler from './middlewares/errorHandler';
import handlebars from 'express-handlebars';
const app = express();
import path from 'path';

// Configuration
app.set('port', process.env.PORT || '4444');
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', `${__dirname}/views`);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(controllers);

// Error handler
app.use(handler.errorHandler);

// 404 Not Found
app.use(handler.notFoundHandler);

app.listen(app.get('port'), () => {
  console.log('Server started at http://localhost:' + app.get('port'));
});