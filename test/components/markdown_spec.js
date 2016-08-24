import React from 'react';

import { expect } from 'chai';

import { shallow } from 'enzyme';

import MarkdownDisplay from '../../src/components/markdown-display';

describe('MarkdownDisplay', () => {
  it('renders some markdown', () => {
    const component = shallow(
      <MarkdownDisplay data={'# DO\nit.'} />
    );

    // Slightly "testing" the library underneath, but it's still a decent litmus test
    expect(component.node.props.children[0].props.children[0]).to.equal('DO')
    expect(component.node.props.children[1].props.children[0]).to.equal('it.')

  });
});
