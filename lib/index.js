
class Draconarius {
  constructor(flags) {
    this.flags = flags;

    this.isEnabled = this.isEnabled.bind(this);
  }

  /**
   * isEnabled - To check if a flag is raised(enabled)
   * @param {string} flag The flag you want to check
   * @param {array} args optional arguments to pass to a flag function
   * @returns {boolean} A boolean indicating if flag is enabled
   * @memberof Draconarius
   */
  isEnabled(flag, args) {
    const currentFlag = this.flags[flag];

    if (typeof currentFlag === 'function') {
      return currentFlag(args);
    }

    return currentFlag || false;
  }
}

module.exports = {
  Draconarius,
};

