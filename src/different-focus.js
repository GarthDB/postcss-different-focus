const keyRegEx = /:keyboardfocus/g;
const mouseRegEx = /:mousefocus/g;

export default class TopcoatNaming {
  /**
   *  Public: adds classes to differentiate between mouse and keyboard focii.
   *
   *  * `css` {Root} PostCSS Root Node
   *  * `opts` {Object} options, used for future, but not currently used.
   *
   *  ## Examples
   *
   *  ```js
   *  export default postcss.plugin('postcss-different-focus',
   *    (opts = {}) =>
   *      (css) => {
   *        return new DifferentFocus(css, opts)
   *      }
   *    );
   *  ```
   *
   *  Returns {Root} PostCSS Root Node
   */
  constructor(css, opts) {
    this.opts = opts;
    css.walkRules(keyRegEx ,rule => {
      rule.selector = `${rule.selector.replace(keyRegEx, '.is-keyboardfocused')}, ${rule.selector.replace(keyRegEx, ':focus')}`;
    });
    css.walkRules(mouseRegEx ,rule => {
      rule.selector = `${rule.selector.replace(mouseRegEx, '.is-mousefocused')}, ${rule.selector.replace(mouseRegEx, ':focus')}`;
    });
  }
}
