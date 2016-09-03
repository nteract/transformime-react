import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

global.window.document.createRange = function createRange() {
  return {
    setEnd: () => {},
    setStart: () => {},
    getBoundingClientRect: () => {
      return { right: 0 };
    },
    getClientRects: () => {
      return []
    },
    createContextualFragment: (html) => {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.children[0]; // so hokey it's not even funny
    },
  }
};
