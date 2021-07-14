import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import Footer from './components/Footer.jsx';
import ReturnToTop from './components/ReturnToTop.jsx';
import { useHistory } from 'react-router';

function App() {
  const history = useHistory();
  const appRef = useRef();
  const bannerRef = useRef();
  const [appScrollYPos, setAppScrollYPos] = useState(0);
  const [windowX, setWindowX] = useState(window.innerWidth);
  const [childHeights, setChildHeights] = useState([]);

  let isScrolling;

  useEffect(() => {
    if (appScrollYPos < childHeights[0]) {
      history.replace('/');
    } else if (
      appScrollYPos > childHeights[0] &&
      appScrollYPos < childHeights[1] + childHeights[0]
    ) {
      history.replace('/projects');
    } else {
      history.replace('/contact');
    }
  }, [appScrollYPos, childHeights, history]);

  useEffect(() => {
    function handleResize() {
      setWindowX(appRef.current.offsetWidth);

      let children = bannerRef.current.children;
      let heights = [];
      children = [...children];
      children.forEach((child, i) => {
        if (i < 3) heights.push(child.clientHeight);
      });
      setChildHeights(heights);
    }

    window.addEventListener('resize', handleResize);
  }, [windowX]);

  const handleAppScroll = (e) => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      setAppScrollYPos(appRef.current.scrollTop);
    }, 5);
  };

  useEffect(() => {
    let children = bannerRef.current.children;
    let heights = [];
    children = [...children];
    children.forEach((child, i) => {
      if (i < 3) heights.push(child.clientHeight);
    });
    setChildHeights(heights);
  }, []);

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
            <ReturnToTop appRef={appRef.current} />
            <div className='left-banner screen-banner' ref={bannerRef}>
              <HomeScreen />
              <ProjectsScreen />
              <ContactScreen />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
