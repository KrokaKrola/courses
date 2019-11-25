import React from 'react';
import Button from './Button';

function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

export default function Table(props) {
  const { list, onDismiss, searchTerm } = props;
  return (
    <div>
      {list.filter(isSearched(searchTerm)).map(item => (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> {item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <Button onDismiss={onDismiss} objectID={item.objectID}>
              Dismiss
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
}
