import React from 'react';

export default function HTMLDisplay(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: props.data,
      }}
    />
  );
}

HTMLDisplay.propTypes = {
  data: React.PropTypes.string.isRequired,
};
