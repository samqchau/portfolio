import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/header.scss';
import { useLocation } from 'react-router';

const Header = ({ htmlRef }) => {
  const headerRef = useRef(null);
  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.slice(1);

  const homeHandler = (e) => {
    e.stopPropagation();
    htmlRef.current.scrollTop = 0;
    window.history.replaceState({}, '', window.location.origin);
  };

  useEffect(() => {
    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'bottom 36px',
        toggleActions: 'play none reverse none',
      },
      duration: 0.15,
      backgroundColor: 'rgba(0,0,0,.64)',
      paddingTop: '6px',
      height: '56px',
      ease: 'slow',
    });
  }, []);

  return (
    <div className='header' ref={headerRef}>
      <div className='header-nav'>
        <div className='header-nav-socials'>
          <a
            href='https://www.linkedin.com/in/samqchau/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='icon-container' title='LinkedIn' alt='LinkedIn'>
              <img
                className='icon'
                src='https://github.com/samqchau/portfolio-v1.0.0/blob/gh-pages/pngs/linked_in_64.png?raw=true'
                alt='LinkedIn'
              />
            </div>
          </a>
          <a
            href='https://github.com/samqchau'
            target='_blank'
            rel='noreferrer'
          >
            <div className='icon-container' title='Github' alt='Github'>
              <img
                className='gh-icon'
                src='https://github.com/samqchau/portfolio-v1.0.0/blob/gh-pages/pngs/gh_64.png?raw=true'
                alt='Github'
              />
            </div>
          </a>
          <a
            href='https://codepen.io/samqchau'
            target='_blank'
            rel='noreferrer'
          >
            <div className='icon-container' title='Codepen' alt='Codepen'>
              <img
                className='icon'
                src='https://github.com/samqchau/portfolio-v1.0.0/blob/gh-pages/pngs/codepen.png?raw=true'
                alt='Codepen'
              />
            </div>
          </a>
        </div>
        <div className={`header-nav-items`}>
          <div
            className={`header-nav-item ${
              pathname === '' ? 'header-nav-item-active' : ''
            }`}
            onClick={homeHandler}
          >
            Home
          </div>
          <a href='#projects'>
            <div
              className={`header-nav-item ${
                pathname === 'projects' ? 'header-nav-item-active' : ''
              }`}
            >
              Projects
            </div>
          </a>
          <a href='#contact'>
            <div
              className={`header-nav-item ${
                pathname === 'contact' ? 'header-nav-item-active' : ''
              }`}
            >
              Contact
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
