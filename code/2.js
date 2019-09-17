'use strict';

const getData = require('./API');

let data = getData();
data = typeof data === 'string' ? JSON.parse(data) : data;

console.log('Input ::=> ');
console.log(JSON.stringify(data, null, 4));

let attrsToPick = ['key1', 'key2'];
let finalData = attrsToPick.reduce((acc, key) => {
  acc[key] = data[key];
  return acc;
}, {});

console.log('Output ::=> ');
console.log(JSON.stringify(finalData, null, 4));

/*
  - this code is slightly better then 1.js because we don't have to depend on external variable finalData to store the result as we go through the loop
*/
