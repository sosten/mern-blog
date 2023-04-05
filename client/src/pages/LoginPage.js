import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <div className='login_form_container'>
      <div className="form_header">
        <AiOutlineUser className='form_user_icon' />
        <h1>Login</h1>
      </div>
      <form>
        <input type="email" placeholder='Enter your email address'/>
        <input type="password" placeholder='Enter your password'/>
        <input type="button" value="Login" />
        <p>Do not have an account? <Link to={'/register'} className="form_link">Register</Link></p>
      </form>
    </div>
  )
}

export default LoginPage;
