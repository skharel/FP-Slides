'use strict';

const getData = require('./API');

let data = getData();
data = typeof data === 'string' ? JSON.parse(data) : data;

console.log('Input ::=> ');
console.log(JSON.stringify(data, null, 4));

let attrsToPick = ['key1', 'key2'];

let finalData = {};

attrsToPick.forEach((key) => {
  finalData[key] = data[key];
});

console.log('Output ::=> ');
console.log(JSON.stringify(finalData, null, 4));
