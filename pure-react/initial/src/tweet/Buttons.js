import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faRetweet, faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
function showCount(count) {
  return count > 0 ? count : '';
}

export const ReplyButton = () => {
  return <FontAwesomeIcon icon={faReply} />;
};

export const RetweetButton = ({ count }) => {
  return (
    <span className='like-button'>
      <FontAwesomeIcon icon={faRetweet} />
      <span className='retweet-count'>{showCount(count)}</span>
    </span>
  );
};

export const LikeButton = ({ count }) => {
  return (
    <span className='like-button'>
      <FontAwesomeIcon icon={faHeart} />
      <span className='like-count'>{showCount(count)}</span>
    </span>
  );
};

export const MoreOptionsButton = () => {
  return <FontAwesomeIcon icon={faEllipsisH} />;
};
