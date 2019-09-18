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
  return function pickAttributesHelper(input) {
    return attrs.reduce((acc, key) => {
      acc[key] = input[key];
      return acc;
    }, {});
  };
}

function isString(d) {
  return typeof d === 'string';
}

pipe(
  ifElse(isString, JSON.parse, identity),
  tap(log, 'Input'),
  pickAttributes(['key1', 'key2']),
  tap(log, 'Output')
)(getData());
