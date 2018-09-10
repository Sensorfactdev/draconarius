"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pack = require('../package.json');

var isArrayOfStrings = require('./isArrayOfStrings');

var isObject = require('./isObject');

var isValidFlagValue = require('./isValidFlagValue');
/**
 * @class Draconarius
 */


var Draconarius =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Draconarius.
   * @param {object|array} flags
   * @memberof Draconarius
   */
  function Draconarius() {
    var flags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Draconarius);

    if (isArrayOfStrings(flags)) {
      this.flags = flags.reduce(function (acc, flag) {
        return Object.assign(acc, _defineProperty({}, flag, true));
      }, {});
    } else if (isObject(flags)) {
      this.flags = flags;
    } else {
      throw new TypeError("Draconarius constructor expects flags to be an object or an array of strings, but received `".concat(JSON.stringify(flags), "`"));
    }
  }
  /**
   * version - Checks the version in package.json
   * @static
   * @returns {string} Current version of Draconarius
   * @memberof Draconarius
   */


  _createClass(Draconarius, [{
    key: "_checkFlag",

    /**
     * _checkFlag - Checks if a flag is enabled
     * @private
     * @param {string} flag Flag which needs to be checked
     * @param {array} args Optional arguments to function flags
     * @returns {boolean}
     * @memberof Draconarius
     */
    value: function _checkFlag(flag, args) {
      var currentFlag = this.flags[flag];

      if (typeof currentFlag === 'function') {
        return currentFlag.apply(void 0, _toConsumableArray(args));
      }

      return currentFlag || false;
    }
    /**
     * _checkMultipleFlags - Reduces multiple flag checks down to one boolean
     * @private
     * @param {array} flags Flags that need to check
     * @param {array} args Optional arguments to function flags
     * @returns {boolean} Reduced enabled status of all provided flags
     * @memberof Draconarius
     */

  }, {
    key: "_checkMultipleFlags",
    value: function _checkMultipleFlags(flags, args) {
      var _this = this;

      return flags.reduce(function (acc, flag) {
        return _this._checkFlag(flag, args) || acc;
      }, false);
    }
    /**
     *
     * _setFlag
     * @private
     * @param {string} flag
     * @param {function|boolean} value
     * @memberof Draconarius
     */

  }, {
    key: "_setFlag",
    value: function _setFlag(flag, value) {
      if (!flag || typeof flag !== 'string') {
        throw new TypeError("_setFlag expects `flag` to be a string but received `".concat(JSON.stringify(flag), "`"));
      }

      if (!isValidFlagValue(value)) {
        throw new TypeError("_setFlag expects `value` to be a boolean or function but received `".concat(JSON.stringify(value), "`"));
      }

      this.flags[flag] = value;
    }
    /**
     * _setFlags - Update flags of an instance
     * @private
     * @param {object} flags
     * @memberof Draconarius
     */

  }, {
    key: "_setFlags",
    value: function _setFlags(newFlags) {
      var _this2 = this;

      Object.keys(newFlags).forEach(function (flag) {
        return _this2._setFlag(flag, newFlags[flag]);
      });
    }
    /**
     * isEnabled - To check if a flag is raised(enabled)
     * @param {string|array} flag The flag or flags you want to check
     * @param {array} args optional arguments to pass to a flag function
     * @returns {boolean} A boolean indicating if flag is enabled
     * @memberof Draconarius
     */

  }, {
    key: "isEnabled",
    value: function isEnabled(flag) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (Array.isArray(flag)) {
        return this._checkMultipleFlags(flag, args);
      }

      return this._checkFlag(flag, args);
    }
    /**
     * updateFlag - Update flag(s)
     * @param {string|array} flag The flag or flags you want to check
     * @param {function|boolean} value
     * @memberof Draconarius
     */

  }, {
    key: "updateFlag",
    value: function updateFlag(flag, value) {
      if (isObject(flag)) {
        return this._setFlags(flag);
      }

      return this._setFlag(flag, value);
    }
    /**
     * getAllFlags - Get all the flags currently set
     * @returns {object} All flags
     * @memberof Draconarius
     */

  }, {
    key: "getAllFlags",
    value: function getAllFlags() {
      return this.flags;
    }
  }], [{
    key: "version",
    value: function version() {
      return Pack.version;
    }
  }]);

  return Draconarius;
}();

module.exports = {
  Draconarius: Draconarius
};
