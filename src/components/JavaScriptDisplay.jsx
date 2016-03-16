import React from 'react';
import ReactDOM from 'react-dom';

export default class JavaScriptDisplay extends React.Component {
  static displayName = 'JavaScriptDisplay'

  static propTypes = {
    data: React.PropTypes.string,
  }

  componentDidMount() {
    if (!this.script) {
      this.script = document.createElement('script');
      ReactDOM.findDOMNode(this.refs.here).appendChild(this.script);
    }
    this.script.textContent = this.props.data;
  }

  render() {
    return (
      <div ref="here" />
    );
  }
}
