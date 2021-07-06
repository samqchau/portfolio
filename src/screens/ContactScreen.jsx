import React from 'react';
import '../styles/contactScreen.scss';

const ContactScreen = () => {
  return (
    <div className='screen contactScreen'>
      <div className='screen-main'></div>
      <div className='screen-footer'>
        <div className='screen-footer-content'>
          <div className='footer-content-left'>Designed By: Samuel Chau</div>
          <div className='footer-content-right'>Github Facebook LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
