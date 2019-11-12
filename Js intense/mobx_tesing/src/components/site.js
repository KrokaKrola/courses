import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default class extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    )
  }
}