import React from 'react';
import moment from 'moment';

export function Time({ time }) {
  return <span className='time'>{moment(time).fromNow()}</span>;
}
