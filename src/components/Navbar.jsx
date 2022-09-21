import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from "../firebase";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>ChatApp</span>
        <div className='user'>
            <img src='https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80' alt='' />
            <span>John</span>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}
