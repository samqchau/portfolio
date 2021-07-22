import React, { useEffect } from 'react';
import '../styles/scrollDownIndicator.scss';

const ScrollDownIndicator = () => {
  useEffect(() => {
    function registerScroll() {
      let wrapper = document.getElementById('wrapper');
      wrapper.style.display = 'none';
      window.removeEventListener('scroll', registerScroll);
    }
    window.addEventListener('scroll', registerScroll);
  }, []);

  return (
    <div id='wrapper'>
      <div id='wrapper-inner'>
        <div id='scroll-down'>
          <span className='arrow-down'></span>
          <span id='scroll-title'>Scroll down</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
