import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <div className='screen-footer'>
      <div className='screen-footer-content'>
        <div className='footer-content-left'>Designed By: Samuel Chau</div>
        <div className='footer-content-right'>
          <i className='footer-social-icon fab fa-instagram'></i>
          <i className='footer-social-icon fab fa-facebook-square'></i>
          <i className='footer-social-icon fab fa-twitter'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
