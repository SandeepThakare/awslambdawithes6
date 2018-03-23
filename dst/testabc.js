'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloagain = helloagain;
function hello(event, context, callback) {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!'
    })
  };
  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}