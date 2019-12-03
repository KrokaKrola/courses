import React from 'react';

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
