import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import Footer from './components/Footer.jsx';
import ReturnToTop from './components/ReturnToTop.jsx';
import { useHistory } from 'react-router';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const history = useHistory();
  const appRef = useRef(null);
  const bannerRef = useRef(null);
  const htmlRef = useRef(null);

  const [appScrollYPos, setAppScrollYPos] = useState(0);
  const [windowX, setWindowX] = useState(window.innerWidth);
  const [childHeights, setChildHeights] = useState([]);

  let isScrolling = useRef(null);

  useEffect(() => {
    if (appScrollYPos < childHeights[0]) {
      history.replace('/');
    } else if (
      appScrollYPos > childHeights[0] &&
      appScrollYPos < childHeights[1]
    ) {
      history.replace('/projects');
    } else if (appScrollYPos > childHeights[1]) {
      history.replace('/contact');
    }
  }, [appScrollYPos, childHeights, history]);

  useEffect(() => {
    function handleResize() {
      setWindowX(htmlRef.current.offsetWidth);
      let children = bannerRef.current.children;
      let heights = [];
      children = [...children];
      children.forEach((child, i) => {
        if (i < 3) heights.push(child.clientHeight);
      });
      heights[1] = heights[1] + heights[0];
      heights[2] = heights[1] + heights[0] + heights[2];
      setChildHeights(heights);
    }

    window.addEventListener('resize', handleResize);
  }, [windowX]);

  useEffect(() => {
    const handleAppScroll = (e) => {
      clearTimeout(isScrolling.current);
      isScrolling.current = setTimeout(() => {
        setAppScrollYPos(htmlRef.current.scrollTop);
      }, 5);
    };

    let html = document.getElementsByTagName('html')[0];
    window.addEventListener('scroll', handleAppScroll);
    htmlRef.current = html;

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
        appRef={htmlRef.current}
      />
      <div className='background'></div>
      <div className='app' ref={appRef}>
        <div className='app-main'>
          <div className='app-main-content'>
            <ReturnToTop appRef={htmlRef.current} />
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
