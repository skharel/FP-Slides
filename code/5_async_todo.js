'use strict';
const getData = require('./APIAsync');
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

function parse(d) {
  return JSON.parse(d);
}

// ===== code using ASYNC API for getData
