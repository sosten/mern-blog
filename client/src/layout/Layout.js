import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../layout/layout.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='layout'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
