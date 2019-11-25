import React from 'react';
import './App.css';
import Search from './Search.js';
import Table from './Table';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];


export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ''
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const newList = this.state.list.filter(isNotId);
    this.setState({ list: newList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { list, searchTerm } = this.state;
    return (
      <div className="App">
        <Search searchTerm={searchTerm} onSearchChange={this.onSearchChange}>Search</Search>
        <Table list={list} onDismiss={this.onDismiss} searchTerm={searchTerm} />
      </div>
    );
  }
}
