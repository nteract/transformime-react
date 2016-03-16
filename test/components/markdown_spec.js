import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

import {
  renderIntoDocument,
} from 'react-addons-test-utils';

import MarkdownDisplay from '../../src/components/markdown-display';

describe('MarkdownDisplay', () => {
  it('renders some markdown', () => {
    const component = renderIntoDocument(
      <MarkdownDisplay data={'# Heading\nWoo.'} />
    );

    const el = ReactDOM.findDOMNode(component);
    expect(el).to.not.be.null;
    expect(el.firstChild.localName).to.equal('h1');
    expect(el.firstChild.textContent).to.equal('Heading');
    expect(el.lastChild.localName).to.equal('p');
    expect(el.lastChild.textContent).to.equal('Woo.');
  });
});
