import React from 'react';

const CommonMark = require('commonmark');
const MarkdownRenderer = require('commonmark-react-renderer');

const parser = new CommonMark.Parser();
const renderer = new MarkdownRenderer();

const mdRender = (input) => renderer.render(parser.parse(input));

const MarkdownDisplay = props => <div>{mdRender(props.data)}</div>;

MarkdownDisplay.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default MarkdownDisplay;
