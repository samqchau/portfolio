import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/header.scss';

const Header = ({ htmlRef }) => {
  const headerRef = useRef(null);
  const homeHandler = (e) => {
    e.stopPropagation();
    htmlRef.current.scrollTop = 0;
    window.history.replaceState({}, '', window.location.pathname);
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
                src='pngs/linked_in_64.png'
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
              <img className='gh-icon' src='pngs/gh_64.png' alt='Github' />
            </div>
          </a>
          <a
            href='https://codepen.io/samqchau'
            target='_blank'
            rel='noreferrer'
          >
            <div className='icon-container' title='Codepen' alt='Codepen'>
              <img className='icon' src='pngs/codepen.png' alt='Codepen' />
            </div>
          </a>
        </div>
        <div className={`header-nav-items`}>
          <div className={`header-nav-item`} onClick={homeHandler}>
            Home
          </div>
          <a href='#projects'>
            <div className={`header-nav-item`}>Projects</div>
          </a>
          <a href='#contact'>
            <div className={`header-nav-item`}>Contact</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
