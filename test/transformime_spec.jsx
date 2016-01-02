import {
  createRenderer,
} from 'react-addons-test-utils';

import { Map } from 'immutable';
import { expect } from 'chai';

import { Transformime } from '../src/';

describe('transform', () => {
  it('creates a React element that can be rendered', () => {
    const mimeBundle = new Map({
      'text/plain': 'Hello World',
    });

    const shallowRenderer = createRenderer();

    const transformer = new Transformime();
    const element = transformer.transform(mimeBundle);
    shallowRenderer.render(element);

    const result = shallowRenderer.getRenderOutput();
    expect(result.type).to.equal('pre');
    expect(result.props.children).to.equal('Hello World');
  });
});
