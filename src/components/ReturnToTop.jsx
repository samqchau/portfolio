import React from 'react';
import '../styles/returnToTop.scss';

const ReturnToTop = ({ appRef }) => {
  const handleClick = () => {
    appRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    appRef.scrollTop = 0;
  };
  return appRef ? (
    <div
      className='top-button'
      title='Return to top'
      onClick={handleClick}
      style={{
        display: `${appRef && appRef.scrollTop === 0 ? 'none' : 'flex'}`,
      }}
    >
      <i className='fas fa-angle-up'></i>
    </div>
  ) : null;
};

export default ReturnToTop;
