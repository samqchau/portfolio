import JobTrackerDemo from '../components/lazy/JobTrackerDemo';
import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/projects.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ProjectsScreen = () => {
  const sectionHeader = useRef(null);
  const project1Demo = useRef(null);
  const project2Demo = useRef(null);
  const project1Desc = useRef(null);
  const project2Desc = useRef(null);
  const projectsRef = useRef(null);
  /*
  Project title should change to this when the text enters the center of the screen  
  font-size: 42px;
    text-align: center;
    color: rgb(255 176 176);
  */

  useEffect(() => {
    let width = window.innerWidth;
    gsap.to(sectionHeader.current, {
      scrollTrigger: {
        trigger: sectionHeader.current,
        start: `top ${width > 800 ? '60%' : '82%'}`,
        toggleActions: 'play none none reverse',
      },
      duration: 0.3,
      opacity: '100%',
      ease: 'none',
    });

    gsap.to(projectsRef.current, {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
        end: 'top',
      },
      duration: 0.2,
      fontSize: '42px',
      textAlign: 'center',
      color: 'white',
    });

    gsap.to(project1Demo.current, {
      scrollTrigger: {
        trigger: project1Demo.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.3,
      opacity: '100%',
      ease: 'none',
      top: '0px',
    });

    gsap.to(project1Desc.current, {
      scrollTrigger: {
        trigger: project1Desc.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.3,
      opacity: '100%',
      ease: 'none',
      top: '0px',
    });

    gsap.to(project2Demo.current, {
      scrollTrigger: {
        trigger: project2Demo.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.3,
      opacity: '100%',
      ease: 'none',
      top: '0px',
    });

    gsap.to(project2Desc.current, {
      scrollTrigger: {
        trigger: project2Desc.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.3,
      opacity: '100%',
      ease: 'none',
      top: '0px',
    });
  }, []);

  return (
    <div className='projects' id='projects'>
      <Row className='project-display'>
        <div className='section-title-container' ref={sectionHeader}>
          <div className='section-title-hr'></div>
          <h3 className='section-title' ref={projectsRef}>
            Projects
          </h3>
          <div className='section-title-hr'></div>
        </div>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className='project-display-left'
          ref={project1Demo}
        >
          <h1 className='project-display-title'>JobTrackr</h1>
          <JobTrackerDemo />
          <div className='project-display-link-container'>
            <a
              href='https://github.com/samqchau/job-tracker'
              target='_blank'
              rel='noreferrer'
              className='project-display-link'
            >
              Code
            </a>
            <div className='project-display-link'>Demo</div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className='project-display-right'
          ref={project1Desc}
        >
          <h6 className='project-display-content-header'>Description</h6>
          <p className='project-display-content'>
            JobTrackr is a free, secure, and easily accessible web app that
            helps users track and organize applications during the job hunt.
            Visualize the state of your job search in a single board. See how
            many applications, interviews and offers you’ve received in one
            view.
          </p>
          <Row className='container'>
            <Col className='container' xs={12} sm={6}>
              <h6 className='project-display-list-title'>Technologies</h6>
              <div className='project-display-content-list'>
                <li>React</li>
                <li>Redux</li>
                <li>Node & Express</li>
                <li>PostgreSQL</li>
              </div>
            </Col>
            <Col className='container' xs={12} sm={6}>
              <h6 className='project-display-list-title'>Key Features</h6>
              <div className='project-display-content-list'>
                <li>Drag & Drop</li>
                <li>Data Persistence</li>
                <li>Firebase Authentication</li>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className='project-display'>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className='project-display-left'
          ref={project2Demo}
        >
          <h1 className='project-display-title'>ProShop</h1>
          <div className='project-display-demo'></div>
          <div className='project-display-link-container'>
            <div className='project-display-link'>Code</div>
            <div className='project-display-link'>Demo</div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className='project-display-right'
          ref={project2Desc}
        >
          <h6 className='project-display-content-header'>Description</h6>
          <p className='project-display-content'>
            ProShop is a faux e-commerce site streamlined to give users the best
            shopping experience. Stripe and PayPal integration allows users and
            guests to make purchases. Admins have full control of all purchases
            and orders through protected views.
          </p>
          <Row className='container'>
            <Col className='container' xs={12} sm={6}>
              <h6 className='project-display-list-title'>Technologies</h6>
              <div className='project-display-content-list'>
                <li>React</li>
                <li>Redux</li>
                <li>Node & Express</li>
                <li>Mongoose / MongoDB</li>
              </div>
            </Col>
            <Col className='container' xs={12} sm={6}>
              <h6 className='project-display-list-title'>Key Features</h6>
              <div className='project-display-content-list'>
                <li>Stripe & PayPal</li>
                <li>Custom Cart System</li>
                <li>User / Admin Roles</li>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsScreen;
