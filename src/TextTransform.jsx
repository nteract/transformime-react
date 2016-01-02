import React from 'react';

export default class TextTransform extends React.Component {
  static displayName = 'TextTransform'

  static propTypes = {
    data: React.PropTypes.string,
  }

  static mimetype = 'text/plain'

  render() {
    return (
      <pre>{this.props.data}</pre>
    );
  }
}
