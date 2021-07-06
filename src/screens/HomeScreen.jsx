import React from 'react';
import '../styles/homeScreen.scss';

const HomeScreen = () => {
  return (
    <div className='homeScreen screen'>
      <div className='screen-main homeScreen-main'>
        <div className='screen-banner'>
          <div className='homeScreen-banner-content'>
            <div className='homeScreen-main-title'>
              Typing animation goes here
            </div>
            <div className='homeScreen-main-content'>
              Hi, I'm Sam Chau, a full-stack developer who specializes in using
              Javascript Libraries like React to build responsive websites and
              designs.
            </div>
            <div className='homeScreen-main-resume-button'>Download Resume</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
