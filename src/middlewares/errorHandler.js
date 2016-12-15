/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/6/16.
 */

export function errorHandler(err, req, res, next) {
  console.log(err);
  let statusCode = (err.details && 400) || err.statusCode || 500;
  res.status(statusCode).json({
    statusCode: statusCode,
    message: err.message || 'Internal Server Error',
    errors: err.details
  });
}

export function notFoundHandler(req, res, next) {
  res.status(404).json({
    statusCode: 404,
    error: '404 - Not Found'
  });
}