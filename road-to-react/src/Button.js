import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onClick, objectID, children, className }) {
  return (
    <button
      className={className}
      onClick={() => onClick(objectID)}
      type="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: ''
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  objectID: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}