import postcss from 'postcss';
import test from 'ava';
import DifferentFocus from '../src/index';

function runDifferentFocus(input, opts) {
  return postcss([
    DifferentFocus(opts),
  ]).process(input);
}
test('Collapse state', (t) => {
  const input =
  `.dood:keyboardfocus {
    content: 'nope';
  }
  .dood:mousefocus {
    content: 'yerp';
  }
`;
  const expected =
  `.dood.is-keyboardfocused, .dood:focus {
    content: 'nope';
  }
  .dood.is-mousefocused, .dood:focus {
    content: 'yerp';
  }
`;
  return runDifferentFocus(input)
    .then((result) => {
      t.deepEqual(result.css.trim(), expected);
    });
});
