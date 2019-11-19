import React from 'react';
import ReactDOM from 'react-dom';

class DemoChangeHandle extends React.Component {
  state = {
    name: ''
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <label>
          Name <br />
          <input type='text' value={this.state.name} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

class DemoRef extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name <br />
            <input type='text' ref={this.inputRef} />
          </label>
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <DemoChangeHandle />
    <DemoRef />
  </>,
  document.querySelector('#root')
);
