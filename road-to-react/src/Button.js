import React from 'react';

export default function Button({ onClick, children, className }) {
  return (
    <button
      className={className}
      onClick={() => onClick()}
      type="button"
    >
      {children}
    </button>
  );
}
