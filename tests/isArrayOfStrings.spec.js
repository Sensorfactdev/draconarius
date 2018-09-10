const isArrayOfStrings = require('../src/isArrayOfStrings');

describe('isArrayOfStrings', () => {
  it('should return true for an array of strings', () => expect(isArrayOfStrings(['foo', 'bar'])).toBe(true));
  it('should return true for an empty array', () => expect(isArrayOfStrings([])).toBe(true));

  it('should return false for an array of objects', () => expect(isArrayOfStrings([{}, {}])).toBe(false));
  it('should return false for an array of numbers', () => expect(isArrayOfStrings([1])).toBe(false));
  it('should return false for an array of true', () => expect(isArrayOfStrings([true])).toBe(false));
  it('should return false for an array of false', () => expect(isArrayOfStrings([false])).toBe(false));
  it('should return false for an array of null', () => expect(isArrayOfStrings([null])).toBe(false));
  it('should return false for an array of undefined', () => expect(isArrayOfStrings([undefined])).toBe(false));

  it('should return false for an object', () => expect(isArrayOfStrings({})).toBe(false));
  it('should return false for a string', () => expect(isArrayOfStrings('foo')).toBe(false));
  it('should return false for a number', () => expect(isArrayOfStrings(1)).toBe(false));
  it('should return false for a boolean', () => expect(isArrayOfStrings(true)).toBe(false));
  it('should return false for null', () => expect(isArrayOfStrings(null)).toBe(false));
  it('should return false for undefined', () => expect(isArrayOfStrings(undefined)).toBe(false));
});
