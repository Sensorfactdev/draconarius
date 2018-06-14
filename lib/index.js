const Pack = require('../package.json');
const isObject = require('./isObject');
const isValidFlagValue = require('./isValidFlagValue');

/**
 * @class Draconarius
 */
class Draconarius {
  /**
   * Creates an instance of Draconarius.
   * @param {object} flags
   * @memberof Draconarius
   */
  constructor(flags) {
    if (!flags || !(flags instanceof Object) || Array.isArray(flags)) {
      throw new TypeError(`Draconarius constructor expects flags to be an object but received \`${JSON.stringify(flags)}\``);
    }

    this.flags = flags;

    this.isEnabled = this.isEnabled.bind(this);
  }

  /**
   * version - Checks the version in package.json
   * @static
   * @returns {string} Current version of Draconarius
   * @memberof Draconarius
   */
  static version() {
    return Pack.version;
  }

  /**
   * _checkFlag - Checks if a flag is enabled
   * @private
   * @param {string} flags Flag that need to check
   * @param {array} args Optional arguments to function flags
   * @returns {boolean}
   * @memberof Draconarius
   */
  _checkFlag(flag, args) {
    const currentFlag = this.flags[flag];

    if (typeof currentFlag === 'function') {
      return currentFlag(...args);
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
  _checkMultipleFlags(flags, args) {
    return flags.reduce((acc, flag) => this._checkFlag(flag, args) || acc, false);
  }

  /**
   *
   * _setFlag
   * @private
   * @param {string} flag The flag or flags you want to check
   * @param {function|boolean} value
   * @memberof Draconarius
   */
  _setFlag(flag, value) {
    if (!flag || typeof flag !== 'string') {
      throw new TypeError(`_setFlag expects \`flag\` to be a string but received \`${JSON.stringify(flag)}\``);
    }

    if (!isValidFlagValue(value)) {
      throw new TypeError(`_setFlag expects \`value\` to be a boolean or function but received \`${JSON.stringify(value)}\``);
    }

    this.flags[flag] = value;
  }

  /**
   * _setFlags - Update flags of an instance
   * @private
   * @param {object} flags
   * @memberof Draconarius
   */
  _setFlags(newFlags) {
    Object.keys(newFlags).forEach(flag => this._setFlag(flag, newFlags[flag]));
  }

  /**
   * isEnabled - To check if a flag is raised(enabled)
   * @param {string|array} flag The flag or flags you want to check
   * @param {array} args optional arguments to pass to a flag function
   * @returns {boolean} A boolean indicating if flag is enabled
   * @memberof Draconarius
   */
  isEnabled(flag, ...args) {
    if (Array.isArray(flag)) {
      return this._checkMultipleFlags(flag, args);
    }

    return this._checkFlag(flag, args);
  }

  /**
   *
   * updateFlag
   * @param {string|array} flag The flag or flags you want to check
   * @param {function|boolean} value
   * @memberof Draconarius
   */
  updateFlag(flag, value) {
    if (isObject(flag)) {
      return this._setFlags(flag);
    }

    return this._setFlag(flag, value);
  }
}

module.exports = {
  Draconarius,
};

