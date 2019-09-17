'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getData() {
  let data = { key1: 'value1', key2: 'value2', key3: 'value3' };

  if (getRandomInt(100) % 2 === 0) {
    return JSON.stringify(data);
  }

  return data;
}

module.exports = getData;
