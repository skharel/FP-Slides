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

function toJson(d) {
  return JSON.parse(d);
}

/* solution 1 */
Promise.resolve()
  .then(getData)
  .then(ifElse((d) => typeof d === 'string', toJson, identity))
  .then(tap(log('Input')))
  .then(pickAttributes(['key1', 'key2']))
  .then(tap(log('Output')));

/* solution 2 */

/*

getData()
  .then(ifElse((d) => typeof d === 'string', toJson, identity))
  .then(tap(log('Input')))
  .then(pickAttributes(['key1', 'key2']))
  .then(tap(log('Output')));
*/

/* solution 3 */

/*
getData().then(
  pipe(
    ifElse((d) => typeof d === 'string', toJson, identity),
    tap(log('Input')),
    pickAttributes(['key1', 'key2']),
    tap(log('Output'))
  )
);
*/
