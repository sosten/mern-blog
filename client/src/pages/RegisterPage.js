import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/register.css';
import { Store } from '../Store';

const RegisterPage = () => {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {userInfo} = state; 

  const handleRegister = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      console.log("Password did not match");
      return;
    }

    try {
      const {data} = await axios.post('/api/user', {
        fullName,
        email,
        password
      });

      console.log(data)
      ctxDispatch({type: 'USER_REGISTER', payload: data});
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
  }, [userInfo, navigate])

  return (
    <div className='form_container'>
      <div className="form_header">
        <h1>Register</h1>
      </div>
      <form onSubmit={handleRegister}>
        <input 
          type="text"
          placeholder='Full Name'
          onChange={(e)=>setFullName(e.target.value)}
          required
        />
        <input 
          type="email" 
          placeholder='Email Address'
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder='Create Password'
          onChange={(e)=> setPassword(e.target.value)}
          required
        />
        <input
          type="password" 
          placeholder='Confirm Password'
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Register" />
        <p>Already have an account? <Link to={`/login`} className="form_link">Login</Link></p>
      </form>
    </div>
  )
}

export default RegisterPage
