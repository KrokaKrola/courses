import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Tweet } from '.';

const data = {
  message: 'Lorem ipsum dolor sit amet.',
  src: 'https://www.gravatar.com/avatar/nothing',
  author: {
    handle: 'dceddia',
    name: 'Dave Ceddia'
  },
  likes: 17,
  retweets: 0,
  timestamp: '2019-07-10 21:24:37'
};

ReactDOM.render(<Tweet tweet={data} />, document.querySelector('#root'));
