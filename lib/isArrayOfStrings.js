"use strict";

module.exports = function (x) {
  return Array.isArray(x) && (x.length === 0 ? true : !x.filter(function (el) {
    return typeof el !== 'string';
  }).length);
};