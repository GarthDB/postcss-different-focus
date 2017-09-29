import postcss from 'postcss';
import DifferentFocus from './different-focus';

export default postcss.plugin('postcss-different-focus',
  (opts = {}) =>
    (css) => {
      return new DifferentFocus(css, opts)
    }
);
