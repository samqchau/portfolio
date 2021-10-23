import React, { useRef, useEffect } from 'react';

const JobTrackerDemo = () => {
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
      src='mp4/jobtracker-demo-final.mp4'
      poster='pngs/jt-poster.jpg'
    ></video>
  );
};

export const demoStyle = {
  marginBottom: '25px',
  WebkitMaskImage:
    'linear-gradient(90deg, transparent, 10%, rgb(0, 0, 0), 90%, transparent)',
  width: '100%',
  maxWidth: '600px',
};

export default JobTrackerDemo;
