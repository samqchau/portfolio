import React, { useRef, useEffect } from 'react';

const ProShopDemo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 1.5;
  }, []);

  return (
    <video
      ref={videoRef}
      style={demoStyle}
      autoPlay
      loop
      muted
      onLoad={() => {
        videoRef.current.playbackRate = 1.8;
      }}
      controlsList='nodownload disablepictureinpicture'
      src='mp4/proshop-demo.mp4'
      poster='pngs/proshop-poster.png'
    ></video>
  );
};

export const demoStyle = {
  marginBottom: '25px',
  WebkitMaskImage:
    'linear-gradient(90deg, transparent, 2%, rgb(0, 0, 0), 98%, transparent)',
  width: '100%',
  maxWidth: '600px',
};

export default ProShopDemo;
