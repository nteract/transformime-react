import React from 'react';

export default class HTMLDisplay extends React.Component {
  static propTypes = {
    data: React.PropTypes.string,
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: this.props.data,
        }}
      />
    );
  }
}
