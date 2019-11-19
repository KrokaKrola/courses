import React from 'react';
import PropTypes from 'prop-types';

export function Author({ author }) {
  return (
    <span className='author'>
      <span className='name'>{author.name}</span>
      <span className='handle'>@{author.handle}</span>
    </span>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
}