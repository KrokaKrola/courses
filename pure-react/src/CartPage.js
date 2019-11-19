import React from 'react';
import { Item } from './Item';
import './CartPage.css';

const summarizer = (result, item) => {
  const existingItem = result.find(i => i.id === item.id);
  if (!existingItem) {
    result.push({
      ...item,
      count: 1
    });
  } else {
    existingItem.count++;
  }

  return result;
};

export const CartPage = ({ items, onPageChange }) => {
  const cart = items.reduce(summarizer, []);
  return (
    <div className='CartPage'>
      <ul className="CartPage-items">
        {cart.map(item => (
          <Item key={item.id} item={item}>
            x{item.count}
          </Item>
        ))}
      </ul>
      <div className='total'>
        Total: $
        {cart.reduce((total, item) => {
          return total + item.price * item.count;
        }, 0)}
      </div>
      <button onClick={() => {onPageChange('checkout')}}>
        Checkout now
      </button>
    </div>
  );
};
