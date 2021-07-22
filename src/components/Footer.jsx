import React, { useEffect, useRef } from 'react';
import '../styles/footer.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    gsap.to(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
      duration: 0.3,
      opacity: '100%',
      ease: 'none',
      top: '0px',
    });
  }, []);

  return (
    <div className='screen-footer' ref={footerRef}>
      <div className='screen-footer-content'>
        <div className='footer-content-left'>Designed By: Samuel Chau</div>
        <div className='footer-content-right'>
          <a
            href='https://instagram.com/chau_now/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='footer-social-icon fab fa-instagram'></i>
          </a>
          <a
            href='https://facebook.com/samuel.chau1'
            target='_blank'
            rel='noreferrer'
          >
            <i className='footer-social-icon fab fa-facebook-square'></i>
          </a>
          <a
            href='https://twitter.com/samqchau'
            target='_blank'
            rel='noreferrer'
          >
            <i className='footer-social-icon fab fa-twitter'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
