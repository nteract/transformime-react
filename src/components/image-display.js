import React from 'react';

export default class ImageDisplay extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <img role="presentation" src={`data:${this.props.mimetype};base64,${this.props.data}`} />
    );
  }
}

ImageDisplay.propTypes = {
  data: React.PropTypes.string.isRequired,
  mimetype: React.PropTypes.string.isRequired,
};

export function PNGDisplay(props) {
  return (
    <ImageDisplay mimetype="image/png" {...props} />
  );
}

export function JPEGDisplay(props) {
  return (
    <ImageDisplay mimetype="image/jpeg" {...props} />
  );
}

export function GIFDisplay(props) {
  return (
    <ImageDisplay mimetype="image/gif" {...props} />
  );
}
