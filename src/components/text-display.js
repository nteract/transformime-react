import React from 'react';

export default function TextDisplay(props) {
  return (
    <pre>{props.data}</pre>
  );
}

TextDisplay.propTypes = {
  data: React.PropTypes.string,
};
