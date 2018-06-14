const isObject = require('./isObject');

describe.only('isObject', () => {
  it('should return false for null', () => expect(isObject(null)).toBe(false));
  it('should return false for arrays', () => expect(isObject([])).toBe(false));
  it('should return false for undefined', () => expect(isObject()).toBe(false));
  it('should return false for a string', () => expect(isObject('')).toBe(false));
  it('should return false for a number', () => expect(isObject(42)).toBe(false));

  it('should return true for a object', () => expect(isObject({})).toBe(true));
});
