# Draconarius
[![Build Status](https://travis-ci.org/Sensorfactdev/draconarius.svg?branch=master)](https://travis-ci.org/Sensorfactdev/draconarius)
[![Coverage Status](https://coveralls.io/repos/github/Sensorfactdev/draconarius/badge.svg?branch=master)](https://coveralls.io/github/Sensorfactdev/draconarius?branch=master)

Manage (feature)flags like a Roman soldier

<img src="https://i.imgur.com/zbPPBek.png" />

## Install

```bash
yarn add @sensorfactdev/draconarius
```

## Basic usage

```javascript
const { Draconarius } = require('@sensorfactdev/draconarius');

const flags = {
  foo: true,
};

const draconarius = new Draconarius(flags);

const goodOldFn = () => console.log('old');
const newAmazingFn = () => console.log('new');

const operation = draconarius.isEnabled('foo')
  ? newAmazingFn
  : goodOldFn;

operation(); // => new
```

### Flags as functions

```javascript
const { pathOr } = require('ramda');
const { Draconarius } = require('@sensorfactdev/draconarius');

const flags = {
  hasOpenPayments: user => pathOr(false, ['metaData', 'hasOpenPayments'], user),
};

const draconarius = new Draconarius(flags);

const user = {
  metaData: { hasOpenPayments: false },
};

const navigation = draconarius.isEnabled('hasOpenPayments', user)
  ? browserHistory.replace('/new-payment/832763877832');
  : browserHistory.replace('/open-payment/98766789023')
```

### Updating flags

```javascript
const { Draconarius } = require('@sensorfactdev/draconarius');

const flags = {
  foo: true,
  bar: false
};

const draconarius = new Draconarius(flags);

// Update a signle flag
draconarius.updateFlag('foo', false);

// Update multiple flags and add one
draconarius.updateFlag({ foo: true, bar: true, fizz: f => !f });
```

### Getting all flags

```javascript
const { Draconarius } = require('@sensorfactdev/draconarius');
const { equals } = require('ramda');

const flags = { foo: true, bar: false };
const draconarius = new Draconarius(flags);

console.log(equals(draconarius.getAllFlags(), flags)) // true;
```

## Other resources

- [API Reference](API.md)
- [LICENSE](LICENSE)
- [Sensorfact](https://sensorfact.nl)
