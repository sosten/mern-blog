import React from 'react';
import '../styles/about.css';

const AboutPage = () => {
  return (
    <div>
      <div className="about_header">
        <h1>Tiponyepoyatu is the news platform for various people with different expertise with similer or different profession.</h1>
        <p>You have it, you write it.</p>
      </div>
      <div className="about_content">
        <div className="about_t">
          <h2>About Tiponyepoyatu<sup>&#xae;</sup></h2>
        </div>
        <div className='about_t_cont'>
          <h2>We are simply the best when it comes to news</h2>
          <p>Motto® is a global strategic branding agency that works with innovative companies to turn brands into Ideas Worth Rallying Around™. We work with founders, CEOs, and executive teams to realize their most significant opportunities. Triggers like leadership changes, shifting business models, market expansions, and product innovations are perfect challenges for us. We'll make your vision visible.</p>
        </div>
      </div>
      <h2 className="founder_header">Meet the founders</h2>
      <div className="about_content">
        <div className="about_t">
          <h2>How it all started</h2>
        </div>
        <div className='about_t_cont'>
          <h2>A gutsy story that began with $250 and a daring vision.</h2>
          <p>In 2005, Sunny Bonnell and Ashleigh Hansberger were college dropouts bursting with big ideas. They made the crazy decision to start Motto® against a sea of doubt. People said they were too young, too female, too inexperienced, and too broke to succeed in a world where admen made the rules. But they had a little something called vision. Seventeen years later, the entrepreneurial fire still burns bright.</p>
        </div>
      </div>
      <div className="about_founders">
        <div className="founder_card">
          <div className="founder_cover">
            <img src="../asset/sp2.png" alt="founder" />
          </div>
          <div className="founder_details">
            <h2>Sunny Bonnell</h2>
            <h2>Co-founder & Chief Visionary Officer</h2>
          </div>
        </div>
        <div className="founder_card">
          <div className="founder_cover">
            <img src="../asset/sp3.png" alt="founder" />
          </div>
          <div className="founder_details">
            <h2>Sunny Bonnell</h2>
            <h2>Co-founder & Chief Visionary Officer</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
