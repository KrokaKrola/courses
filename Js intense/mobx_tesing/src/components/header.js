import React, { Component } from 'react';
import Type from './header/type';
import TotalCost from './header/totalCost';
import TotalAmount from './header/totalAmount';

export default class extends Component {
  render() {
    return (
      <div className='header'>
        <Type></Type>
        <TotalAmount></TotalAmount>
        <TotalCost></TotalCost>
      </div>
    );
  }
}
