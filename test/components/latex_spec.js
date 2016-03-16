import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

import {
  renderIntoDocument,
} from 'react-addons-test-utils';

import LaTeXDisplay from '../../src/components/latex-display';

describe('LaTeXDisplay', () => {
  it('processes basic LaTeX', () => {
    const component = renderIntoDocument(
      <LaTeXDisplay data={'x^2 + y = 3'} />
    );

    const el = ReactDOM.findDOMNode(component);
    expect(el).to.not.be.null;
    expect(el.innerHTML).to.include('math');
    expect(el.innerHTML).to.include('x^2 + y = 3');
    // Ok, it would have a bunch more, but I'm not testing KaTeX itself
  });
});
