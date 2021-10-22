import React, { useEffect, useRef } from 'react';
import '../styles/scrollDownIndicator.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollDownIndicator = () => {
  const wrapperRef = useRef(null);
  const scrollDownRef = useRef(null);
  useEffect(() => {
    gsap.to(scrollDownRef.current, {
      scrollTrigger: {
        trigger: scrollDownRef.current,
        start: 'bottom 100%-=120px',
        toggleActions: 'play none none reverse',
      },
      opacity: '0%',
      duration: 0.1,
    });
  }, []);

  return (
    <div id='wrapper' ref={wrapperRef}>
      <div id='wrapper-inner'>
        <div id='scroll-down' ref={scrollDownRef}>
          <span className='arrow-down'></span>
          <span id='scroll-title'>Scroll down</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
