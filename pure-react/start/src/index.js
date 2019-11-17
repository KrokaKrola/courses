import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReply,
  faRetweet,
  faHeart,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar src={tweet.src} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

const ReplyButton = () => {
  return <FontAwesomeIcon icon={faReply} />;
};

function showCount(count) {
  return count > 0 ? count : "";
}

const RetweetButton = ({ count }) => {
  return (
    <span className="like-button">
      <FontAwesomeIcon icon={faRetweet} />
      <span className="retweet-count">{showCount(count)}</span>
    </span>
  );
};

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <FontAwesomeIcon icon={faHeart} />
      <span className="like-count">{showCount(count)}</span>
    </span>
  );
};

const MoreOptionsButton = () => {
  return <FontAwesomeIcon icon={faEllipsisH} />;
};

function Author({ author }) {
  return (
    <span className="author">
      <span className="name">{author.name}</span>
      <span className="handle">@{author.handle}</span>
    </span>
  );
}

function Time({ time }) {
  return <span className="time">{moment(time).fromNow()}</span>;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Avatar({ src }) {
  return <img alt="avatar" className="avatar" src={src} />;
}

const data = {
  message: "Lorem ipsum dolor sit amet.",
  src: "https://www.gravatar.com/avatar/nothing",
  author: {
    handle: "dceddia",
    name: "Dave Ceddia"
  },
  likes: 17,
  retweets: 0,
  timestamp: "2019-07-10 21:24:37"
};

ReactDOM.render(<Tweet tweet={data} />, document.querySelector("#root"));
