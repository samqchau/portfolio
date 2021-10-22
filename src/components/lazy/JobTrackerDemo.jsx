import React from 'react';

const JobTrackerDemo = () => {
  return (
    <video
      style={demoStyle}
      height='300'
      autoPlay
      loop
      muted
      controls
      src='mp4/jobtracker-demo-final.mp4'
      poster='pngs/jt-poster.png'
    ></video>
  );
};

export const demoStyle = {
  marginBottom: '25px',
  WebkitMaskImage:
    'linear-gradient(90deg, transparent, 10%, rgb(0, 0, 0), 90%, transparent)',
};

export default JobTrackerDemo;
