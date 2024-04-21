import React, { Component } from 'react'
import '../style.css'

export default class Leftbar extends Component {
  render() {
    return (
      <div className='leftbar'>
        <div className='d-flex p-3 align-items-center'>
            <div className='left-logo'>LS</div>
            <div >
                <h1>Lalitendra Swamy</h1>
                <p>Full stack Developer</p>
            </div>
    
        </div>
        <div>
            <div className='conversations p-3'>
                <h2>Conversations <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></h2>
                
            </div>
            <div className='p-4 conv'>
                <div>#</div>
                <h3>Poland Office</h3>         

            </div>
            <div className='p-4 conv selected-conv' >
                <div className='bg-primary'>#</div>
                <h3>Introductions</h3>         

            </div>
            <div className='p-4 conv'>
                <div>#</div>
                <h3>India Office</h3>         

            </div>
        </div>
      </div>
    )
  }
}
