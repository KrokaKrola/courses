import React from 'react';

export default ({ onSearchChange, searchTerm, onSearchSubmit, children }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      {children}
      <input type="text" onChange={onSearchChange} value={searchTerm} />
      <button type="submit">{children}</button>
    </form>
  );
};
