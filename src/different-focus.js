import parser from 'postcss-selector-parser';

export default class TopcoatNaming {
  constructor(css, result, opts) {
    this.opts = opts;
    css.walkRules(/:keyboardfocus/g ,rule => {
      const transform = selectors => {
        selectors.walkPseudos(pseudo => {
          const newPseudo = pseudo.clone();
          newPseudo.value = ':focus';
          return pseudo.replaceWith(newPseudo);
          // const match = /(\.?[A-z]+):keyboardfocus/g.exec(String(selector));
          // if(match) {
          //   if(match[1]) {
          //     console.log(match[1]);
          //   }
          // }
        });
      };
      const processor = parser(transform);
      rule.selector = processor.processSync(rule.selector);
    });
  }
}
