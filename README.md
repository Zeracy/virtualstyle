# virtualstyle

## About
A virtual stylesheet wrapper to simplify the addition and removal of
 temporary styles.

## Install
At the moment this isn't published so it can only be installed through the git url
```bash
yarn add https://github.com/Zeracy/virtualstyle
```

## Usage

```js
import { createRule } from 'virtualstyle';

const myRule = createRule('a { color: white; }');
```
### Functions

#### change
Changes the rule entry to a new one.

```js
myEntry.change('a { color: red; }');
```

#### reset
Changes the rule to a blank one.

```js
myRule.reset();
```

### Caveats
Rules are not deleted in order to preserve the style index, in order to remove a style use the reset function instead.
