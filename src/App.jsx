import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  const appRef = useRef();
  const [appScrollYPos, setAppScrollYPos] = useState(0);
  const [windowX, setWindowX] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowX(appRef.current.offsetWidth);
    }

    window.addEventListener('resize', handleResize);
  }, [windowX]);

  const handleAppScroll = (e) => {
    setAppScrollYPos(appRef.current.scrollTop);
  };

  return (
    <>
      <Header
        windowX={windowX}
        appScrollY={appScrollYPos}
        appRef={appRef.current}
      />
      <div className='app' ref={appRef} onScroll={handleAppScroll}>
        <div className='app-main'>
          <div className='app-main-content'>
            <div className='left-banner screen-banner'>
              <HomeScreen />
              <ContactScreen />
              <div className='screen-footer'>
                <div className='screen-footer-content'>
                  <div className='footer-content-left'>
                    Designed By: Samuel Chau
                  </div>
                  <div className='footer-content-right'>
                    Github Facebook LinkedIn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
