# PostCSS Different Focus

[![Build Status](https://travis-ci.org/GarthDB/postcss-different-focus.svg?branch=master)](https://travis-ci.org/GarthDB/postcss-different-focus) [![codecov](https://codecov.io/gh/GarthDB/postcss-different-focus/branch/master/graph/badge.svg)](https://codecov.io/gh/GarthDB/postcss-different-focus) [![Dependency Status](https://david-dm.org/GarthDB/postcss-different-focus.svg)](https://david-dm.org/GarthDB/postcss-different-focus) [![Inline docs](http://inch-ci.org/github/GarthDB/postcss-different-focus.svg?branch=master)](http://inch-ci.org/github/GarthDB/postcss-different-focus) [![npm version](https://badge.fury.io/js/postcss-different-focus.svg)](https://badge.fury.io/js/postcss-different-focus)

A PostCSS plugin to create a syntax for different types of input focus.

## Usage

A simple plugin that allows the developer to define keyboard and mouse focii in postcss and it is converted to classes to differentiate in the output.

Example:

```css
.dood:keyboardfocus {
  content: 'nope';
}
.dood:mousefocus {
  content: 'yerp';
}
```

Output:

```css
.dood.is-keyboardfocused, .dood:focus {
  content: 'nope';
}
.dood.is-mousefocused, .dood:focus {
  content: 'yerp';
}
```
