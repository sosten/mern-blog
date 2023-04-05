import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

const RegisterPage = () => {
  return (
    <div className='form_container'>
      <div className="form_header">
        <h1>Register</h1>
      </div>
      <form>
        <input type="text" placeholder='Full Name'/>
        <input type="password" placeholder='Email Address'/>
        <input type="password" placeholder='Create Password'/>
        <input type="password" placeholder='Confirm Password'/>
        <input type="button" value="Register" />
        <p>Already have an account? <Link to={'/login'} className="form_link">Login</Link></p>
      </form>
    </div>
  )
}

export default RegisterPage
