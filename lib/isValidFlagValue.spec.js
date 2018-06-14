const isValidFlagValue = require('./isValidFlagValue');

describe.only('isValidFlagValue', () => {
  it('should return false for null', () => expect(isValidFlagValue(null)).toBe(false));
  it('should return false for arrays', () => expect(isValidFlagValue([])).toBe(false));
  it('should return false for undefined', () => expect(isValidFlagValue()).toBe(false));
  it('should return false for a string', () => expect(isValidFlagValue('')).toBe(false));
  it('should return false for a number', () => expect(isValidFlagValue(42)).toBe(false));
  it('should return false for a object', () => expect(isValidFlagValue({})).toBe(false));

  it('should return true for a boolean', () => {
    expect(isValidFlagValue(false)).toBe(true);
    expect(isValidFlagValue(true)).toBe(true);
  });

  it('should return true for a function', () => expect(isValidFlagValue(() => false)).toBe(true));
});
