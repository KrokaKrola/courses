import React from 'react';
import './Item.css';
import { Item } from './Item';

const ItemPage = ({ items, onAddToCart }) => {
  return (
    <div className='ItemPage'>
      <h2>Items for Sale</h2>
      {items.map(item => (
        <Item key={item.id} item={item}>
          <button
            className='Item-addToCart'
            onClick={() => {
              onAddToCart(item);
            }}>
            Add to cart
          </button>
        </Item>
      ))}
    </div>
  );
};

export default ItemPage;
