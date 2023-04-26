import React, { useContext, useState } from 'react';
import axios from 'axios';
import '../styles/user_profile.css';
import { Store } from '../Store';

const UserProfilePage = () => {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const { userInfo } = state; 

  const [fullName, setFullName] = useState(userInfo.fullName);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  

  const handleUserProfile = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      console.log("Password did not match");
      return;
    }
    try {
        const { data } = await axios.put('/api/user_profile', {
            fullName,
            email,
            password
        },{ headers: {Authorization: `Bearer${userInfo.token}`} });
        console.log(data)
        ctxDispatch({type: "USER_REGISTER", payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='profile_form_container'>
      <div className="form_header">
        <h1>Profile</h1>
      </div>
      <form onSubmit={handleUserProfile}>
        <input 
          type="text"
          value={fullName}
          placeholder='Full Name'
          onChange={(e)=>setFullName(e.target.value)}
          required
        />
        <input 
          type="email"
          value={email} 
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
      </form>
    </div>
  )
}

export default UserProfilePage
