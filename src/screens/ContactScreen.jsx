import React, { useEffect, useRef } from 'react';
import '../styles/contactScreen.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactScreen = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.to(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 40%',
        toggleActions: 'play none none none',
      },
      duration: 0.3,
      opacity: '100%',
      ease: 'none',
      top: '0px',
    });
  }, []);

  return (
    <>
      <div className='contactScreen' id='contact' ref={contactRef}>
        <h3>Stay Connected</h3>
        <p className='call'>Orange County, California</p>
        <p className='mail'>samqchau@gmail.com</p>
        <p className='phone'>+1 (626) 696 5465</p>
      </div>
    </>
  );
};

export default ContactScreen;
