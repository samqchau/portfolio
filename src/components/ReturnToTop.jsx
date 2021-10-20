import React, { useEffect, useRef } from 'react';
import '../styles/returnToTop.scss';
import { gsap } from 'gsap';

const ReturnToTop = ({ htmlRef }) => {
  const buttonRef = useRef(null);
  const handleClick = () => {
    htmlRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    htmlRef.current.scrollTop = 0;
  };

  useEffect(() => {
    gsap.to(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: 'top bottom-=60px',
        toggleActions: 'play none reverse none',
        end: 'center bottom',
      },
      display: 'flex',
    });
  }, []);

  return (
    <div
      className='top-button'
      title='Return to top'
      onClick={handleClick}
      ref={buttonRef}
    >
      <i className='fas fa-angle-up'></i>
    </div>
  );
};

export default ReturnToTop;
