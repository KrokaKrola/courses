import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export function Time({ time }) {
  return <span className='time'>{moment(time).fromNow()}</span>;
}
Time.propTypes = {
  time: PropTypes.string.isRequired
};