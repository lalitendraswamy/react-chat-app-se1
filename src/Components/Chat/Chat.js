import React, { Component } from 'react'

export default class Chat extends Component {
  render() {
    return (
      <div className='chat'>

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

        <div className='chat-content'>
            
            <input className='mb-3' type='text' placeholder='Enter your message here'/>
        </div>



      </div>
    )
  }
}
