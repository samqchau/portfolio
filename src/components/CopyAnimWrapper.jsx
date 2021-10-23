import React, { useState, useEffect, useRef } from 'react';
import CopyAnimation from './CopyAnimation';
import '../styles/copyAnimWrapper.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CopyAnimWrapper = ({
  HtmlBlockElement,
  color,
  scale,
  start,
  end,
  triggerRef,
  animScale,
  extraStyles,
}) => {
  const wrapperRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    gsap.to(wrapperRef.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: start,
        toggleActions: 'play none reverse reverse',
      },
      duration: 0.2,
      transform: scale,
      color,
    });
  }, [start, end, scale, color, triggerRef]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <div
      className='copyAnimWrapper'
      ref={wrapperRef}
      style={{
        transform: `scale(${animScale ? animScale : 1})`,
        ...extraStyles,
      }}
      onClick={() => {
        //Play Animation
        setCopied(true);
        //Copy HTML Block Element inner text to clipboard
      }}
    >
      <HtmlBlockElement />
      <div className='copyAnimationContainer'>
        <CopyAnimation copied={copied} />
      </div>
    </div>
  );
};

export default CopyAnimWrapper;
