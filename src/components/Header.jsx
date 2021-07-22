import React from 'react';
import '../styles/header.scss';
import { useLocation } from 'react-router';

const Header = ({ windowX, appScrollY, appRef }) => {
  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.slice(1);

  const homeHandler = (e) => {
    e.stopPropagation();
    appRef.scrollTop = 0;
  };

  return (
    <div
      className='header'
      style={{
        paddingTop: `${
          windowX > 800 && appScrollY < 40 ? `${36 - appScrollY}px` : '6px'
        }`,
        marginTop: `${appScrollY < 40 && windowX < 800 ? '6px' : '0px'}`,
        backgroundColor: `${
          appScrollY < 40 ? 'rgba(0,0,0,0)' : 'rgb(0, 0, 0, .64)'
        }`,
        height: `${appScrollY > 40 ? '56' : '62'}`,
      }}
    >
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
                src='/pngs/linked_in_64.png'
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
              <img className='gh-icon' src='/pngs/gh_64.png' alt='Github' />
            </div>
          </a>
          <a
            href='https://codepen.io/samqchau'
            target='_blank'
            rel='noreferrer'
          >
            <div className='icon-container' title='Codepen' alt='Codepen'>
              <img className='icon' src='/pngs/codepen.png' alt='Codepen' />
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
