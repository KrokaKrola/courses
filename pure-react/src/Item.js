import React from 'react';
import './Item.css';

export const Item = ({ item, children }) => {
  return (
    <li className='Item'>
      <span className='Item-title'>{item.name}</span>
      <span className='Item-price'>${item.price}</span>
      {children}
    </li>
  );
};
