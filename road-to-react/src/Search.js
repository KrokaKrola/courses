import React, { useEffect } from 'react';

export default ({ onSearchChange, searchTerm, onSearchSubmit, children }) => {
  const input = React.createRef();
  useEffect(() => {
    if(input) {
      input.current.focus();
    }
  }, [input]);

  return (
    <form onSubmit={onSearchSubmit}>
      {children}
      <input type="text" onChange={onSearchChange} value={searchTerm} ref={input} />
      <button type="submit">{children}</button>
    </form>
  );
};
