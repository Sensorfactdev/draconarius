const { Draconarius } = require('./index');

describe('Draconarius primary interactions', () => {
  describe('Setting and getting flags', () => {
    it('should be able to create a new instance of Draconarius', () => {
      const instance = new Draconarius({ foo: true, bar: false });
      expect(instance).toBeInstanceOf(Draconarius);
    });
    it('should be able to check flags to be true', () => {
      const instance = new Draconarius({ foo: true, bar: false });
      expect(instance.isEnabled('foo')).toBe(true);
    });
    it('should be able to check flags to be false', () => {
      const instance = new Draconarius({ foo: true, bar: false });
      expect(instance.isEnabled('bar')).toBe(false);
    });
    it('should be able to check unknown flags as false', () => {
      const instance = new Draconarius({ foo: true, bar: false });
      expect(instance.isEnabled('kitty')).toBe(false);
    });
    it('should be able to check flags as functions', () => {
      const instance = new Draconarius({ func: args => args.length > 0, bar: false });
      expect(instance.isEnabled('func', [])).toBe(false);
      expect(instance.isEnabled('func', ['first', 'second'])).toBe(true);
    });
  });
});
