import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function rollDice(sides) {
  return Math.floor(Math.random() * sides + 1);
}

class Dice extends Component {
  state = {
    dice: ['-', '-']
  };

  roll = () => {
    this.setState({
      dice: [rollDice(6), rollDice(6)]
    });
  };

  render() {
    const {dice} = this.state;
    return <div>
      {dice[0]} : {dice[1]}
    </div>;
  }
}

export default index;

ReactDOM.render(<Dice />, document.querySelector('#root'));
