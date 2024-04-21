import React, { Component } from 'react';

import { Picker } from 'emoji-mart';

import '../style.css'; 

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      inputMessage: '',
      showEmojiPicker:false
    };
  }

  handleSendMessage = (e) => {
    e.preventDefault(); 
    const { inputMessage } = this.state;
    if (inputMessage.trim()) {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: inputMessage,
        likes: 0,
      };
      this.setState((prevState) => ({
        messages: [...prevState.messages, newMessage],
        inputMessage: '',
      }));
    }
  };

  handleLike = (index) => {
    const updatedMessages = [...this.state.messages];
    updatedMessages[index].likes += 1;
    this.setState({ messages: updatedMessages });
  };

  handleEmojiSelect = (emoji) => {
    this.setState((prevState) => ({
      inputMessage: prevState.inputMessage + emoji.native,
      showEmojiPicker: false,
    }));
  };

  toggleEmojiPicker = () => {
    this.setState((prevState) => ({ showEmojiPicker: !prevState.showEmojiPicker }));
  };

  render() {
    const { messages, inputMessage,showEmojiPicker } = this.state;

    return (
      <div className="chat">
        <div className='chat-header'>

<div>
    <h3>Introductions</h3>
<p>This Channel is For Company Wide Chatter</p>
</div>

<div className='d-flex justify-content-center align-items-center'>
   <span className='m-3'>3 | 100</span>  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
</div>

</div>
        <div className="chat-content">
          {messages.map((message, index) => (
            <div key={index} className="message">
                <div className='d-flex align-items-center mb-1'>
                <div className='chat-logo'>{message.user[0]}</div>
              <h3 className="username">{message.user}:</h3>
              </div><br/>
                
              <h4 className="text">{message.text}</h4>
              <button onClick={() => this.handleLike(index)}>❤️ {message.likes}</button>
            </div>
          ))}
          <form onSubmit={this.handleSendMessage}>
            <input
              className="mb-3"
              type="text"
              placeholder="Enter your message here"
              value={inputMessage}
              onChange={(e) => this.setState({ inputMessage: e.target.value })}
            />

       
          {showEmojiPicker && <Picker onSelect={this.handleEmojiSelect} />}

          </form>
         
        </div>
      </div>
    );
  }
}

export default Chat;
