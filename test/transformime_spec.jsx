import React from 'react';

import {
  createRenderer,
} from 'react-addons-test-utils';

import { Map } from 'immutable';
import { expect } from 'chai';

import {
  richestMimetype,
  transforms,
} from '../src/';

describe('richestMimetype', () => {
  it('picks the richest of the mimetypes from a bundle with defaults', () => {
    const mimeBundle = new Map({
      'text/plain': 'Hello World',
    });

    expect(richestMimetype(mimeBundle)).to.equal('text/plain');

    expect(richestMimetype(new Map({
      'text/plain': 'Hello World',
      'image/png': 'imageData',
    }))).to.equal('image/png');
  });
  it('falls back to a simpler mimetype if a transform is not available', () => {
    const mimeBundle = new Map({
      'text/plain': 'Hello World',
      'text/html': '<b>NIY</b>',
    });

    expect(richestMimetype(mimeBundle)).to.equal('text/plain');

  });
});

describe('transforms', () => {
  it('is a collection of default transforms that provide React components', () => {
    const shallowRenderer = createRenderer();

    const mimeBundle = new Map({
      'text/plain': 'Hello World',
      'text/html': '<b>NIY</b>',
    });

    const mimetype = richestMimetype(mimeBundle);
    const Element = transforms.get(mimetype);

    shallowRenderer.render(<Element data={mimeBundle.get(mimetype)} />);
    const result = shallowRenderer.getRenderOutput();
    expect(result.type).to.equal('pre');
    expect(result.props.children).to.equal('Hello World');
  });
});
