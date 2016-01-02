import React from 'react';

const defaultMimeTypes = ['image/png', 'image/jpeg', 'image/gif'];

export default class ImageTransform extends React.Component {
  static displayName = 'ImageTransform'

  static propTypes = {
    data: React.PropTypes.string,
    mimetype: React.PropTypes.oneOf(defaultMimeTypes).isRequired,
  }

  static mimetype = defaultMimeTypes

  render() {
    const mimetype = this.props.mimetype;
    const data = this.props.data;
    return (
      <img src={'data:' + mimetype + ';base64,' + data} />
    );
  }
}
