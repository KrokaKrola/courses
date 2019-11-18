import React from 'react';
import { Avatar } from './Avatar';
import { Time } from './Time';
import { Author } from './Author';
import { Message } from './Message';
import { ReplyButton, RetweetButton, LikeButton, MoreOptionsButton } from './Buttons';

export function Tweet({ tweet }) {
  return (<div className='tweet'>
    <Avatar src={tweet.src} />
    <div className='content'>
      <Author author={tweet.author} />
      <Time time={tweet.timestamp} />
      <Message text={tweet.message} />
      <div className='buttons'>
        <ReplyButton />
        <RetweetButton count={tweet.retweets} />
        <LikeButton count={tweet.likes} />
        <MoreOptionsButton />
      </div>
    </div>
  </div>);
}
