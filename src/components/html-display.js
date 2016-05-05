import React from 'react';
import ReactDOM from 'react-dom';

export default class HTMLDisplay extends React.Component {
  static propTypes = {
    data: React.PropTypes.string,
  }

  componentDidMount() {
    if (this.refs.here) {
      const range = document.createRange();
      const fragment = range.createContextualFragment(this.props.data);
      ReactDOM.findDOMNode(this.refs.here).appendChild(fragment);
    }
  }

  render() {
    return (
      <div ref="here" />
    );
  }
}
