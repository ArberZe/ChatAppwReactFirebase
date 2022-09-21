import React from 'react'

export const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder="dërgo mesazh" />
        <div className='send'>
          <i className="fa-solid fa-paperclip fa-lg"></i>
          <input type="file" style={{display:"none"}} id="sendFile" />
          <label htmlFor='sendFile'>
            <i className="fa-regular fa-image fa-lg"></i>
          </label>
          <button>Dërgo</button>
        </div>
    </div>
  )
}
