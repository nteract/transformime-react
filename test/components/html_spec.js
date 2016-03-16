import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

import {
  renderIntoDocument,
} from 'react-addons-test-utils';

import HTMLDisplay from '../../src/components/html-display';

describe('HTMLDisplay', () => {
  it('renders direct HTML', () => {
    const component = renderIntoDocument(
      <HTMLDisplay data={'<b>woo</b>'} />
    );

    const el = ReactDOM.findDOMNode(component);
    expect(el).to.not.be.null;
    expect(el.innerHTML).to.equal('<b>woo</b>');
  });
  it.skip('executes embedded <script> tags', () => {
    // Skipped because setting innerHTML definitely doesn't
    // run the inline script
    // We'll want to use a document fragment like in transformime
    const html = '<script>window.y=3;</script>';
    const component = renderIntoDocument(
      <HTMLDisplay data={html} />
    );
    const el = ReactDOM.findDOMNode(component);
    expect(el).to.not.be.null;
    expect(el.innerHTML).to.equal(html);
    expect(window.y).to.equal(3);
  });
});
