"use strict";

module.exports = function (value) {
  return typeof value === 'boolean' || typeof value === 'function';
};