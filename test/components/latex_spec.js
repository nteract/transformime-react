import React from 'react';
import { expect } from 'chai';

import { mount } from 'enzyme';

import LaTeXDisplay from '../../src/components/latex-display';

describe('LaTeXDisplay', () => {
  it('processes basic LaTeX', () => {
    const component = mount(
      <LaTeXDisplay data={'x^2 + y = 3'} />
    );

    const rendered = component.render();
    expect(rendered.html()).to.equal('<div>x^2 + y = 3</div>');
  });
});
