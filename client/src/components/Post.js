import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/post.css';

const Post = () => {
  return (
    <Link to={'#'} className='post_link'>
      <div className='post_card'>
        <div className="post_img">
          <img src="../asset/building.webp" alt="post" />
        </div>
        <div className="post_details">
          <h2 className='post_headline'>Hong Kong shows desire to be crypto hub with new regulation</h2>
          <p className='post_paragraph'>As the U.S. government continues to rein in the crypto industry with a spate of regulations, other places are emerging as new hubs for the ...</p>
          <h3 className="post_author">John Banda</h3>
          <p className="post_date">2:44 PM 21 February 21, 2023</p>
        </div>
      </div>
    </Link>
  )
}

export default Post
