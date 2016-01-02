import React from 'react';

import {
  renderIntoDocument,
} from 'react-addons-test-utils';

import { Map } from 'immutable';
import { expect } from 'chai';

import { Transformime } from '../src/';

describe('transform', () => {
  it('creates a React element that can be rendered', () => {
    const mimeBundle = Map({
      'text/plain': 'Hello World',
    });

    const transformer = new Transformime();
    const Element = transformer.transform(mimeBundle);
    const component = renderIntoDocument(<Element />);
    expect(component).to.not.be.null;
  });
});
