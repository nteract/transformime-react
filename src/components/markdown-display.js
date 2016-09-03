import React from 'react';

const CommonMark = require('commonmark');
const MarkdownRenderer = require('commonmark-react-renderer');

const parser = new CommonMark.Parser();
const renderer = new MarkdownRenderer();

const mdRender = (input) => renderer.render(parser.parse(input));

export class MarkdownDisplay extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div>{mdRender(this.props.data)}</div>;
  }
}

MarkdownDisplay.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default MarkdownDisplay;
