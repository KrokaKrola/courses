import React from 'react';

export default function Search(props) {
  console.log(props);
  const {onSearchChange, searchTerm, children} = props;
  return (
    <form>
      {children}
      <input type="text" onChange={onSearchChange} value={searchTerm} />
    </form>
  );
}
