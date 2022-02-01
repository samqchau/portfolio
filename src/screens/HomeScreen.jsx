import React, { useEffect, useRef } from 'react';
import '../styles/homeScreen.scss';
import { gsap } from 'gsap';

const HomeScreen = () => {
  const pictureRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let timeline = gsap.timeline({
      ease: 'none',
      duration: 0.3,
    });

    timeline.to(pictureRef.current, { opacity: '100%', top: '0px' });

    timeline.to(contentRef.current, { opacity: '100%', left: '0px' }, '<.2');
  }, []);

  return (
    <div className='homeScreen'>
      <img
        alt='Sam profile'
        className='homeScreen-profile-picture'
        ref={pictureRef}
        src="pngs/portrait.jpg"
      />
      <div className='homeScreen-banner-right' ref={contentRef}>
        <h1 className='homeScreen-banner-title'>Hi, I'm Sam Chau</h1>
        <p className='homeScreen-banner-content'>
          a full-stack developer who specializes in using Javascript frameworks
          like React to build responsive and stateful websites.
        </p>
        <a href='files/sam-chau-resume.pdf' download='sam_chau_resume' onClick={() => {
          window.gtag('Download Resume', 'Clicked download resume button', {
            'event_category': 'downloaded',
            'event_label': 'downloaded resume',
          });
        }}>
          <div className='homeScreen-banner-resume-button'>Download Resume</div>
        </a>
      </div>
    </div>
  );
};

export default HomeScreen;
