import React from 'react';
import '../styles/header.scss';

const Header = ({ windowX, appScrollY }) => {
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
          <div className='icon-container' title='Dribble' alt='Dribble'>
            <img className='icon' src='/pngs/dribble_64.png' alt='Github' />
          </div>
          <div className='icon-container' title='LinkedIn' alt='LinkedIn'>
            <img className='icon' src='/pngs/linked_in_64.png' alt='LinkedIn' />
          </div>
          <div className='icon-container' title='Github' alt='Github'>
            <img className='gh-icon' src='/pngs/gh_64.png' alt='Github' />
          </div>
        </div>
        <div className='header-nav-items'>
          <div className='header-nav-item'>Home</div>
          <div className='header-nav-item'>About</div>
          <div className='header-nav-item'>Projects</div>
          <div className='header-nav-item'>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
