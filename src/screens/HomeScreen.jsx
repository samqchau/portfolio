import React from 'react';
import '../styles/homeScreen.scss';

const HomeScreen = () => {
  return (
    <div className='screen'>
      <div className='screen-main'>
        <div className='left-banner screen-banner'>
          <div className='homeScreen-main-left'>
            <div alt='Sam profile' className='homeScreen-profile-picture' />
          </div>

          <div className='homeScreen-banner-right'>
            <h1 className='homeScreen-banner-title'>Hello, I'm Sam Chau</h1>
            <p className='homeScreen-banner-content'>
              a full-stack developer who specializes in using Javascript
              Libraries like React to build responsive websites and designs.
            </p>
            <div className='homeScreen-banner-resume-button'>
              Download Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
