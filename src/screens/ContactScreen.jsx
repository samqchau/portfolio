import React, { useEffect, useRef } from 'react';
import '../styles/contactScreen.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CopyAnimWrapper from '../components/CopyAnimWrapper';

gsap.registerPlugin(ScrollTrigger);

const MailComponenet = () => {
  const mailRef = useRef(null);
  return (
    <p className='mail' ref={mailRef}>
      samqchau@gmail.com
    </p>
  );
};

const PhoneComponent = () => {
  const phoneRef = useRef(null);
  return (
    <p className='phone' ref={phoneRef}>
      +1 (626) 696 5465
    </p>
  );
};

const ContactScreen = () => {
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const locationRef = useRef(null);

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
  }, []);

  return (
    <>
      <div className='contactScreen' id='contact' ref={contactRef}>
        <h3 ref={headerRef}>Stay Connected</h3>
        <p ref={locationRef} className='location'>
          Orange County, California
        </p>
        <CopyAnimWrapper
          HtmlBlockElement={MailComponenet}
          color={'#ffc272'}
          scale={'scale(1.08)'}
          start={'top 60%'}
          triggerRef={locationRef.current}
          clipboardText={'samqchau@gmail.com'}
        />
        <CopyAnimWrapper
          HtmlBlockElement={PhoneComponent}
          color={'white'}
          scale={'scale(1)'}
          start={'top 58%'}
          triggerRef={locationRef.current}
          animScale={0.8}
          clipboardText={'626 696 5465'}
        />
      </div>
    </>
  );
};

export default ContactScreen;
