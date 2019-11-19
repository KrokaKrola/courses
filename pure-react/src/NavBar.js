import React from 'react';

const NavBar = ({ cartCount, onPageChange }) => {
  return (
    <nav className='App-nav'>
      <ul>
        <li>
          <a
            href='/'
            onClick={e => {
              e.preventDefault();
              onPageChange('store');
            }}>
            Store
          </a>
        </li>
        <li
          className='cart-count'
          onClick={() => {
            onPageChange('cart');
          }}>
          <a
            href='/'
            onClick={e => {
              e.preventDefault();
              onPageChange('cart');
            }}>
            <span role='img' aria-label='cart'>
              🛒
            </span>
            {cartCount === 0 ? 'Empty' : cartCount}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
