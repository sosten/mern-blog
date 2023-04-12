import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';
import { Store } from '../Store';

const LoginPage = () => {

  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {userInfo} = state;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
      e.preventDefault(e);

      try {
        const {data} = await axios.post('/api/login', {
          email, 
          password
        });
        console.log(data)

        ctxDispatch({type: "USER_LOGIN", payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');

      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    if(userInfo){
      navigate('/');
    }
  },[userInfo, navigate]);

  return (
    <div className='login_form_container'>
      <div className="form_header">
        <AiOutlineUser className='form_user_icon' />
        <h1>Login</h1>
      </div>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder='Enter your email address'
          onChange={(e)=> setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder='Enter your password'
          onChange={(e)=> setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login" />
        <p>Do not have an account? <Link to={'/register'} className="form_link">Register</Link></p>
      </form>
    </div>
  )
}

export default LoginPage;
