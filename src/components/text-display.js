import React from 'react';

const Ansi = require('ansi-to-react');

export default class TextDisplay extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Ansi>{this.props.data}</Ansi>;
  }
}

TextDisplay.propTypes = {
  data: React.PropTypes.string,
};
