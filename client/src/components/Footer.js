import React from 'react';
import { Link } from 'react-router-dom';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="footer_items">
        <div className='footer_logo_container'>
            <Link to={'/'} className='footer_logo'>Tiponyepo<span>yatu</span>.</Link>
            <p>This is a mult contributor news blog of various people with smilar or differnt expertise.</p>
            <div className="social_links">
                <a href="http://www.twitter.com"><ImTwitter className='footer_social_icon' /></a>  
                <a href="http://www.facebook.com"><ImFacebook className='footer_social_icon' /></a>    
                <a href="http://www.instagram.com"><GrInstagram className='footer_social_icon' /></a>
            </div>
        </div>
        <div className='footer_news'>
            <h2>Latest News</h2>
            <div className='footer_card_container'>
                <div className="footer_cover">
                    <img src="../asset/casual.jpg" alt="news" />
                </div>
                <div className="footer_cover_content">
                    <Link to={'/'}>
                        <p>Even the all-powerful Pointing has no control about</p>
                        <small>Mar. 16, 2023 Admin 19</small>
                    </Link>
                </div>
            </div>
            <div className='footer_card_container'>
                <div className="footer_cover">
                    <img src="../asset/building.webp" alt="news" />
                </div>
                <div className="footer_cover_content">
                    <Link to={'/'}>
                        <p>Even the all-powerful Pointing has no control about</p>
                        <small>Mar. 16, 2023 Admin 19</small>
                    </Link>
                </div>
            </div>
        </div>
        <div className='footer_info'>
            <h2>Information</h2>
            <div className="footer_info_links">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </div>
        <div className='footer_contact_info'>
            <h2>Have a Questions?</h2>
            <p><MdLocationOn className='footer_location_icon' /> <span>203 Fake St. Mountain View, Zanimuone, Lusaka, Zambia</span></p>
            <a href="tel:+260777730003"> <BsFillTelephoneFill className='footer_tel_icon' /> <span>+260 7777 30003</span> </a>
            <a href="mailto:sostennyirenda@gmail.com"> <FaEnvelope className='footer_envl_icon' /> <span>sostennyirenda@gmail.com</span></a>
        </div>
      </div>
      <div className="footer_copy_right">
        <p>Copyright &#xa9;2023 Tiponyepoyatu | All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer
