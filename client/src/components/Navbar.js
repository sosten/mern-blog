import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className='navbar_header'>
      <Link to="/" className='logo'>Tiponyepo<span>yatu</span>.</Link>
      <ul className='center_links'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
      <ul className='right_links'>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
      </ul>
    </header>
  )
}

export default Navbar
