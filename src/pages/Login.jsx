import React from 'react'
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>ChatApp</span>
            <span>Kyqu</span>
            <form>
                <input type='email' placeholder='E-mail' />
                <input type='password' placeholder='Password' />
                <button>Kyqu</button>
            </form>
            <p>Krijo llogarinë tënde <Link to='/register'>Këtu</Link></p>
        </div>
    </div>
  )
}
