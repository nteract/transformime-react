import React from 'react';

const defaultMimeTypes = ['image/png', 'image/jpeg', 'image/gif'];

class ImageDisplay extends React.Component {
  static displayName = 'ImageDisplay'

  static propTypes = {
    data: React.PropTypes.string,
    mimetype: React.PropTypes.oneOf(defaultMimeTypes).isRequired,
  }

  render() {
    const mimetype = this.props.mimetype;
    const data = this.props.data;
    return (
      <img src={'data:' + mimetype + ';base64,' + data} />
    );
  }
}

export class PNGDisplay extends ImageDisplay {
  static displayName = 'PNGDisplay'
  getDefaultProps() {
    return {
      mimetype: 'image/png',
    };
  }
}

export class JPEGDisplay extends ImageDisplay {
  static displayName = 'JPEGDisplay'
  getDefaultProps() {
    return {
      mimetype: 'image/jpeg',
    };
  }
}

export class GIFDisplay extends ImageDisplay {
  static displayName = 'GIFDisplay'
  getDefaultProps() {
    return {
      mimetype: 'image/gif',
    };
  }
}
