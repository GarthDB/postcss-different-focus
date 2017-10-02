# postcss-different-focus

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
