import React from 'react'

export default function Message() {
  return (
    <div className='message owner'>
        <div className='messageInfo'>
            <img src='https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80' alt='' />
            <span>Just Now</span>
        </div>
        <div className='messageContent'>
            <p>Hello</p>
             <img src='https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80' alt='' />
        </div>
    </div>
  )
}
