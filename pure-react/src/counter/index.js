import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

//1. Mount
//2. Render
//3. Commit
//4. Unmount

class OldValue extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.value === this.props.value) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  render() {
    console.log('[OldValue] rendered');
    return <div>{this.props.value}</div>;
  }
}

class Counter extends React.Component {
  state = {
    wrap: {
      counter: 0,
      lit: false,
      oldValues: []
    }
  };

  // componentDidMount() {
  //   console.log('[componentDidMount]', 'Mounted.');
  //   //fetch data, add event listeners, DOM nodes
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(prevProps, prevState, snapshot);
  //   //re-sync
  // }

  // // UNSAFE_componentWillMount() {
  // //   console.log('[componentWillMount]', 'Goodbye.');
  // //   //cleanup - timers, subsctiption
  // // }

  increment() {
    this.setState(
      (previousState, props) => {
        return {
          wrap: {
            ...previousState.wrap,
            counter: previousState.wrap.counter + 1,
            oldValues: [
              ...this.state.wrap.oldValues,
              previousState.wrap.counter + 1
            ]
          }
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  }

  decrement() {
    this.setState(
      (previousState, props) => {
        return {
          wrap: {
            ...previousState.wrap,
            counter: previousState.wrap.counter - 1,
            oldValues: [
              ...this.state.wrap.oldValues,
              previousState.wrap.counter - 1
            ]
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
      <>
        <div className={`counter ${lit ? '' : 'dark'}`}>
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement.bind(this)}>-</button>
            <span className='count'>{counter}</span>
            <button onClick={this.increment.bind(this)}>+</button>
          </div>
          <button onClick={this.toggle}>Light/Dark</button>
        </div>
        <ul>
          {this.state.wrap.oldValues.map((value, index) => (
            <li key={index}>
              <OldValue value={value} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ReactDOM.render(<Counter step={5} />, document.querySelector('#root'));
