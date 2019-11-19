import React from 'react';
import "./Item.css";

const ItemPage = ({ items }) => {
  return (
    <div className='ItemPage'>
      <h2>Items for Sale</h2>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li className="Item">
      <span className="Item-title">{item.name}</span>
      <span className='Item-price'>${item.price}</span>
      <button className="Item-addToCart">Add to cart</button>
    </li>
  );
};

export default ItemPage;
