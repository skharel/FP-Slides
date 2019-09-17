'use strict';

const getData = require('./API');

function log(prefix, value) {
  console.log(`${prefix} ::=> `);
  console.log(JSON.stringify(value, null, 2));
}

function pickAttributes(input, attrs) {
  return attrs.reduce((acc, key) => {
    acc[key] = input[key];
    return acc;
  }, {});
}

function toJson(data) {
  return typeof data === 'string' ? JSON.parse(data) : data;
}

// ======= code =========

/*
by moving some of the code into function, this code looks lot better then 2.js. Additionally, here we can move the function around and it will not break the code below which was not the case until 2.js

*/

let data = toJson(getData());
log('Input', data);

let attrsToPick = ['key1', 'key2'];
let finalData = pickAttributes(data, attrsToPick);

log('Output', finalData);
