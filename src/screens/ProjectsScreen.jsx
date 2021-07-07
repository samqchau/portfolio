import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/projects.scss';

const ProjectsScreen = () => {
  return (
    <div className='projects'>
      <h3>Projects</h3>

      <Row className='project-display'>
        <Col xs={12} sm={12} md={12} lg={6} className='project-display-left'>
          <h1 className='project-display-title'>JobTrackr</h1>
          <div className='project-display-link-container'>
            <div className='homeScreen-banner-resume-button'>GitHub Repo</div>
            <div className='homeScreen-banner-resume-button'>Live Demo</div>
          </div>
          <div className='project-display-demo'>Video Goes Here</div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className='project-display-right'>
          <h6 className='project-display-content-header'>Description</h6>
          <p className='project-display-content'>
            JobTrackr is a free, secure, and easily accessible web app that
            helps users track and organize applications during the job hunt.
            Visualize the state of your job search in a single board. See how
            many applications, interviews and offers you’ve received in one
            view.
          </p>
          <h6 className='project-display-content-header'>Technologies</h6>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsScreen;
