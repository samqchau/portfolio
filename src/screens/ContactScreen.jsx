import React, { useEffect, useRef } from 'react';
import '../styles/contactScreen.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import copyToClipboard from '../utils/copyToClipboard';

gsap.registerPlugin(ScrollTrigger);

const ContactScreen = () => {
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const locationRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    gsap.to(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 60%',
        toggleActions: 'play none reverse reverse',
      },
      duration: 0.3,
      opacity: '100%',
      ease: 'none',
      top: '0px',
    });

    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: locationRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.3,
      color: 'rgba(255,255,255,.5)',
    });

    gsap.to(locationRef.current, {
      scrollTrigger: {
        trigger: locationRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.2,
      transform: 'scale(1.1)',
      color: 'white',
    });

    gsap.to(mailRef.current, {
      scrollTrigger: {
        trigger: mailRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      color: '#ffc272',
      transform: 'scale(1.1)',
      duration: 0.2,
    });

    gsap.to(phoneRef.current, {
      scrollTrigger: {
        trigger: mailRef.current,
        start: 'top 58%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.2,
      transform: 'scale(1.2)',
      color: 'white',
    });
  }, []);

  return (
    <>
      <div className='contactScreen' id='contact' ref={contactRef}>
        <h3 ref={headerRef}>Stay Connected</h3>
        <p ref={locationRef} className='call'>
          Orange County, California
        </p>
        <p
          ref={mailRef}
          onClick={() => {
            copyToClipboard('samqchau@gmail.com');
          }}
          className='mail'
          title='Copy to Clipboard'
        >
          samqchau@gmail.com
        </p>
        <p
          ref={phoneRef}
          className='phone'
          onClick={() => {
            copyToClipboard('626 696 5465');
          }}
          title='Copy to Clipboard'
        >
          +1 (626) 696 5465
        </p>
      </div>
    </>
  );
};

export default ContactScreen;
