import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contact_header">
        <h1>Contact Information</h1>
        <p>Always good to see you. Drop us a note about a
          project, speaking event, or press inquiry.</p>
      </div>
      <div className="contact_container">
        <h2 className='contact_us'>Contact us</h2>
        <div className="contact_items">
          <div className="contact_content">
            <h3>Address:</h3>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div className="contact_content">
            <h3>Email:</h3>
            <p>sostennyirenda@gmail.com</p>
          </div>
          <div className="contact_content">
            <h3>Phone:</h3>
            <p>+260 7777 30003</p>
          </div>
        </div>
        <div className="contact_form">
          <h2>Have a question or query, please write to us</h2>
          <form>
            <div className="name_email_container">
              <div className='flex_name'>
                <label htmlFor="name">Full Name*</label>
                <input type="text" id='name' placeholder='Your full name' />
              </div>
              <div className='flex_email'>
                <label htmlFor="email">Email Address*</label>
                <input type="email" placeholder='example@domain.com' />
              </div>
            </div>
            <label htmlFor="subject">Subject</label> 
            <input type="text" placeholder='What you would like to talk about' />
            <label htmlFor="message">Write your message here</label>
            <textarea rows="6" id='message'></textarea>
            <input type="button" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
