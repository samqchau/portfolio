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
      <div
        alt='Sam profile'
        className='homeScreen-profile-picture'
        ref={pictureRef}
      />
      <div className='homeScreen-banner-right' ref={contentRef}>
        <h1 className='homeScreen-banner-title'>Hi, I'm Sam Chau</h1>
        <p className='homeScreen-banner-content'>
          a full-stack developer who specializes in using Javascript frameworks
          like React to build responsive and stateful websites.
        </p>
        <a
          href='https://github.com/samqchau/portfolio-v1.0.0/blob/gh-pages/files/resume_sam_chau.pdf?raw=true'
          download='sam_chau_resume'
        >
          <div className='homeScreen-banner-resume-button'>Download Resume</div>
        </a>
      </div>
    </div>
  );
};

export default HomeScreen;
