import React from 'react';

import ReactMarkdown from 'react-markdown';

export default class MarkdownDisplay extends React.Component {
  static displayName = 'MarkdownDisplay'

  static propTypes = {
    data: React.PropTypes.string,
  }

  render() {
    return (
      <ReactMarkdown source={this.props.data}/>
    );
  }
}
