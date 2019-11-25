import React from 'react';

export default function Button(props) {
  const { onDismiss, objectID, children, className } = props;
  return (
    <button className={className} onClick={() => onDismiss(objectID)} type="button">
      {children}
    </button>
  );
}