'use strict';

const getData = require('./API');
const { ifElse, identity, pipe, tap } = require('ramda');

function log(prefix) {
  return function logHelper(value) {
    console.log(`${prefix} ::=> `);
    console.log(JSON.stringify(value, null, 2));
  };
}

function pickAttributes(attrs) {
  return function pickAttributeshelper(input) {
    return attrs.reduce((acc, key) => {
      acc[key] = input[key];
      return acc;
    }, {});
  };
}

function toJson(data) {
  return typeof data === 'string' ? JSON.parse(data) : data;
}

// toJson | log input | pickAttributes key1 & key2 | logoutput

/*
 1. input to json
 2. log data
 3. pick attrs
 4. log
*/

pipe(
  toJson,
  tap(log('Input')),
  pickAttributes(['key1', 'key2']),
  tap(log('Output'))
)(getData());
