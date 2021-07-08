import React from 'react';
import '../styles/homeScreen.scss';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <div alt='Sam profile' className='homeScreen-profile-picture' />
      <div className='homeScreen-banner-right'>
        <h1 className='homeScreen-banner-title'>Hi, I'm Sam Chau</h1>
        <p className='homeScreen-banner-content'>
          a full-stack developer who specializes in using Javascript Libraries
          like React to build responsive websites and designs.
        </p>
        <div className='homeScreen-banner-resume-button'>Download Resume</div>
      </div>
    </div>
  );
};

export default HomeScreen;
