import React from 'react';

export default function Button({ onDismiss, objectID, children, className }) {
  return (
    <button
      className={className}
      onClick={() => onDismiss(objectID)}
      type="button"
    >
      {children}
    </button>
  );
}
