import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import '../styles/home.css'

const HomePage = () => {
  return (
    <div>
    <div className="header_container">
      <div className="home_header">
        <p>You have it. You share it</p>
        <h1>Share your story on this platform</h1>
        <Link to={'/'}>Read more</Link>
      </div>
    </div>
    <br />
      <p>Top Stories</p>
    <br />
      <Post />
      <Post />
      <h1>Pay Advert</h1>
    </div>
  )
}

export default HomePage
