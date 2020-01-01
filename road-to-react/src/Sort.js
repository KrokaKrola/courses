import React from 'react';
import Button from './Button';
import { PropTypes } from 'prop-types';

export default function Sort({ sortKey, onSort, children, activeSortKey }) {
  const sortClass = ['button-inline'];
  if(sortKey === activeSortKey) {
    sortClass.push('button-active');
  }
  return (
    <Button
      className={sortClass.join(' ')}
      onClick={() => {
        onSort(sortKey);
      }}
    >
      {children}
    </Button>
  );
}

Sort.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}