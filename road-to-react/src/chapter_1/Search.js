import React from 'react';

export default ({ onSearchChange, searchTerm, children }) => {
  return (
    <form>
      {children}
      <input type="text" onChange={onSearchChange} value={searchTerm} />
    </form>
  );
}
