import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Dialog from './dialog/dialog';

export default class extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
        <Dialog></Dialog>
      </div>
    );
  }
}
