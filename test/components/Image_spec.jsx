import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

const imageData = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

import {
  renderIntoDocument,
} from 'react-addons-test-utils';

import {
  PNGDisplay,
  GIFDisplay,
  JPEGDisplay,
} from '../../src/components/ImageDisplay';

describe('PNGDisplay', () => {
  it('renders a single image base64 inline', () => {
    const component = renderIntoDocument(
      <PNGDisplay data={imageData} />
    );

    const el = ReactDOM.findDOMNode(component);
    expect(el).to.not.be.null;
    expect(el.localName).to.equal('img');
    expect(el.src).to.equal('data:image/png;base64,' + imageData);
  });
});

describe('JPEGDisplay', () => {
  it('renders a single image base64 inline', () => {
    const component = renderIntoDocument(
      <JPEGDisplay data={imageData} />
    );

    const el = ReactDOM.findDOMNode(component);
    expect(el).to.not.be.null;
    expect(el.localName).to.equal('img');
    expect(el.src).to.equal('data:image/jpeg;base64,' + imageData);
  });
});

describe('GIFDisplay', () => {
  it('renders a single image base64 inline', () => {
    const component = renderIntoDocument(
      <GIFDisplay data={imageData} />
    );

    const el = ReactDOM.findDOMNode(component);
    expect(el).to.not.be.null;
    expect(el.localName).to.equal('img');
    expect(el.src).to.equal('data:image/gif;base64,' + imageData);
  });
});
