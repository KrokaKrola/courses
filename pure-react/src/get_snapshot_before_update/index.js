import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Chat extends React.Component {
  state = {
    messages: []
  };

  constructor(props) {
    super(props);
    this.chatRef = React.createRef();
  }
  

  addMessage = () => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          id: Math.random(),
          text: 'A new awesome message'
        }
      ]
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(this.state.messages.length > prevState.messages.length) {
     const chat = this.chatRef.current;
     return chat.scrollHeight - chat.scrollTop;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(snapshot !== null) {
      const chat = this.chatRef.current;
      chat.scrollTop = chat.scrollHeight - snapshot;
    }
  }

  render() {
    const { messages } = this.state;

    console.log('[render]', `${messages.length} messages`);
    return (
      <div>
        <div className='chat' ref={this.chatRef}>
          {messages.map(message => (
            <div key={message.id}>{message.text}</div>
          ))}
        </div>
        <button onClick={this.addMessage}>Add message</button>
      </div>
    );
  }
}

ReactDOM.render(<Chat />, document.querySelector('#root'));
