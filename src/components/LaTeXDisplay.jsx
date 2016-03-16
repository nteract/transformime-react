import React from 'react';
import katex from 'katex';

export default class LaTeXDisplay extends React.Component {
  static propTypes = {
    data: React.PropTypes.string,
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: katex.renderToString(this.props.data),
        }}
      />
    );
  }
}
