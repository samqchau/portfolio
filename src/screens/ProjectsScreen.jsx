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
          <div className='project-display-demo'>Video Goes Here</div>
          <div className='project-display-link-container'>
            <div className='project-display-link'>
              {`<`}Code{`/>`}
            </div>
            <div className='project-display-link'>Demo</div>
          </div>
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
    </div>
  );
};

export default ProjectsScreen;
