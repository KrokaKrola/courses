import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Counter extends React.Component {
  state = {
    wrap: {
      counter: 0,
      lit: false
    }
  };

  increment() {
    this.setState(
      (previousState, props) => {
        return {
          wrap: {
            ...previousState.wrap,
            counter: previousState.wrap.counter + 1
          }
        };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  decrement() {
    this.setState(
      (previousState, props) => {
        return {
          wrap: {
            ...previousState.wrap,
            counter: previousState.wrap.counter - 1
          }
        };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  toggle = () => {
    this.setState(previousState => ({ 
      wrap: {
      ...previousState.wrap,
      lit: !previousState.wrap.lit
    } 
  }));
  };

  render() {
    const { lit, counter } = this.state.wrap;
    return (
      <div className={`counter ${lit ? '' : 'dark'}`}>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement.bind(this)}>-</button>
          <span className='count'>{counter}</span>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
        <button onClick={this.toggle}>Light/Dark</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter step={5} />, document.querySelector('#root'));
