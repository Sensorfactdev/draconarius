# Draconarius
[![Build Status](https://travis-ci.org/Sensorfactdev/draconarius.svg?branch=master)](https://travis-ci.org/Sensorfactdev/draconarius)

Manage (feature)flags like a Roman soldier

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
  hasOpenPayments: (args) => pathOr(false, [0, 'metaData', 'hasOpenPayments'], args),
};

const draconarius = new Draconarius(flags);

const user = {
  metaData: { hasOpenPayments: false },
};

const navigation = draconarius.isEnabled('hasOpenPayments', [user])
  ? browserHistory.replace('/new-payment/832763877832');
  : browserHistory.replace('/open-payment/98766789023')
```
