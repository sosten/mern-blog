import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import '../styles/navbar.css';

const Navbar = () => {

  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {userInfo} = state;

  const handleLogout = () => {
    ctxDispatch({type: 'USER_LOGOUT'});
    localStorage.removeItem('userInfo');
    window.location.href='/login';
  }

  return (
    <header className='navbar_header'>
      <Link to="/" className='logo'>Tiponyepo<span>yatu</span>.</Link>
      <ul className='center_links'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
      { userInfo ? (
          <ul className='right_links'>
            <li><Link to={'/'}>{userInfo.fullName}</Link></li>
            <li><Link onClick={handleLogout}>Logout</Link></li>
          </ul>
      ) : (
          <ul className='right_links'>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/register'}>Register</Link></li>
          </ul>
      )
        
      }
      
    </header>
  )
}

export default Navbar
