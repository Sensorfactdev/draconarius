"use strict";

module.exports = function (subject) {
  return !!(subject && !Array.isArray(subject) && subject instanceof Object);
};