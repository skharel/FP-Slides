'use strict';

const getData = require('./API');

function iPromise() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(getData());
    }, 300);
  });
}

module.exports = iPromise;
