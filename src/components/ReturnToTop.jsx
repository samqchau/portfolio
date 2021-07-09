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
      style={{ opacity: `${appRef && appRef.scrollTop === 0 ? '0%' : '100%'}` }}
    >
      <i className='fas fa-angle-up'></i>
    </div>
  ) : null;
};

export default ReturnToTop;
