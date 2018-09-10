const { Draconarius } = require('../src');

describe('Draconarius', () => {
  it('should be able to get the version of Draconarius', () => {
    expect(Draconarius.version()).not.toBeUndefined();
  });

  it('should be able to create a new instance of Draconarius', () => {
    const instance = new Draconarius({ foo: true, bar: false });
    expect(instance).toBeInstanceOf(Draconarius);
  });

  it('should throw a TypeError when wrong type of flags are provided', () => {
    expect((() => new Draconarius(null))).toThrow(new TypeError('Draconarius constructor expects flags to be an object or an array of strings, but received `null`'));
    expect((() => new Draconarius('pizza'))).toThrow(new TypeError('Draconarius constructor expects flags to be an object or an array of strings, but received `"pizza"`'));
  });

  it('should be able to parse arrays of strings into flag objects', () => {
    const instance = new Draconarius(['foo', 'bar']);
    expect(instance.flags).toEqual({ foo: true, bar: true });
  });

  describe('Setting and getting flags', () => {
    it('should be able to check flags to be true', () => {
      const instance = new Draconarius({ foo: true, bar: false });
      expect(instance.isEnabled('foo')).toBe(true);
    });
    it('should be able to check flags to be true when provided as an array of string', () => {
      const instance = new Draconarius(['foo', 'bar']);
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
    it('should be able to check flags as false when provided with none', () => {
      const instance = new Draconarius(undefined);
      expect(instance.isEnabled('kitty')).toBe(false);
    });
    it('should be able to check flags as false when provided with an empty array', () => {
      const instance = new Draconarius([]);
      expect(instance.isEnabled('kitty')).toBe(false);
    });
    it('should be able to check flags as functions', () => {
      const instance = new Draconarius({ func: (...args) => args.length > 0, bar: false });
      expect(instance.isEnabled('func')).toBe(false);
      expect(instance.isEnabled('func', ['first', 'second'])).toBe(true);
    });

    it('should be able to check multiple flags', () => {
      const flags = {
        func: () => false,
        bar: false,
      };
      const instance = new Draconarius(flags);
      expect(instance.isEnabled(['func', 'bar'])).toBe(false);
    });

    it('should be able to update a flag', () => {
      const initFlags = { foo: true };

      const instance = new Draconarius(initFlags);
      expect(instance.isEnabled('foo')).toBe(true);

      instance.updateFlag('foo', x => !x);
      expect(instance.isEnabled('foo', true)).toBe(false);
    });

    it('should be able to update multiple flags', () => {
      const initFlags = { foo: true };
      const updateFlags = { foo: false, bar: true };

      const instance = new Draconarius(initFlags);
      expect(instance.isEnabled('foo')).toBe(true);

      instance.updateFlag(updateFlags);
      expect(instance.isEnabled('foo')).toBe(false);
      expect(instance.isEnabled('bar')).toBe(true);
    });

    it('should throw an error on invalid flag input on update', () => {
      const failFlags = {
        [undefined]: null,
      };

      const instance = new Draconarius({});

      expect((() => instance.updateFlag(failFlags))).toThrow(new TypeError('_setFlag expects `value` to be a boolean or function but received `null`'));
    });

    it('should be able to get all flags', () => {
      const flags = { foo: true, bar: false, fizz: f => !f };

      const instance = new Draconarius(flags);
      expect(instance.getAllFlags()).toEqual(flags);
    });
  });

  describe('Internals', () => {
    it('_setFlag should throw a TypeError when invalid flag name is provided', () => {
      const instance = new Draconarius({});

      expect((() => instance._setFlag(null, false))).toThrow(new TypeError('_setFlag expects `flag` to be a string but received `null`'));
    });
  });
});
