import React from 'react';

const mathjaxHelper = require('mathjax-electron');

export default class LaTeXDisplay extends React.Component {
  componentDidMount() {
    this.el.innerHTML = this.props.data;
    mathjaxHelper.loadAndTypeset(document, this.el);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div ref={(el) => { this.el = el; }} />
    );
  }
}

LaTeXDisplay.propTypes = {
  data: React.PropTypes.string,
};
