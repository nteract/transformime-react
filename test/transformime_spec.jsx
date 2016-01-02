import {
  renderIntoDocument,
  findRenderedComponentWithType,
} from 'react-addons-test-utils';

import { Map } from 'immutable';
import { expect } from 'chai';

import { Transformime } from '../src/';
import { TextTransform } from '../src/';

describe('transform', () => {
  it('creates a React element that can be rendered', () => {
    const mimeBundle = new Map({
      'text/plain': 'Hello World',
    });

    const transformer = new Transformime();
    const element = transformer.transform(mimeBundle);
    const component = renderIntoDocument(element);
    expect(component).to.not.be.null;

    const entry = findRenderedComponentWithType(component, TextTransform);
    expect(entry.textContent).to.equal('Hello World');

  });
});
