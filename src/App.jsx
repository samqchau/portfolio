import { useRef, useEffect } from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import Footer from './components/Footer.jsx';
import ReturnToTop from './components/ReturnToTop.jsx';
import ScrollDownIndicator from './components/ScrollDownIndicator';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const bannerRef = useRef(null);
  const htmlRef = useRef(null);

  useEffect(() => {
    htmlRef.current = document.getElementsByTagName('html')[0];
  }, []);

  return (
    <>
      <Header htmlRef={htmlRef} />
      <ScrollDownIndicator />
      <div className='background'></div>
      <div className='app'>
        <div className='app-main'>
          <div className='app-main-content'>
            <ReturnToTop htmlRef={htmlRef} />
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
