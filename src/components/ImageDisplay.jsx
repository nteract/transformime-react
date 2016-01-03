import React from 'react';

class ImageDisplay extends React.Component {
  static displayName = 'ImageDisplay'

  static propTypes = {
    data: React.PropTypes.string,
  }

  render() {
    const data = this.props.data;
    return (
      <img src={'data:' + this.mimetype + ';base64,' + data} />
    );
  }
}

export class PNGDisplay extends ImageDisplay {
  static displayName = 'PNGDisplay'
  constructor(props) {
    super(props)
    this.mimetype = 'image/png';
  }
}

export class JPEGDisplay extends ImageDisplay {
  static displayName = 'JPEGDisplay'
  constructor(props) {
    super(props)
    this.mimetype = 'image/jpeg';
  }
}

export class GIFDisplay extends ImageDisplay {
  static displayName = 'GIFDisplay'
  constructor(props) {
    super(props)
    this.mimetype = 'image/gif';
  }
}
