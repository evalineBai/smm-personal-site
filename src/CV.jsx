import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style/cv.css';

const CV = () => (
  <div className="cv-container">
    <Container>
      <Row>
        <Col>
          <div className="grid-item">
            <a
              href="https://drive.google.com/file/d/1MdPt-iGaBTDwLrcTGQKS3m0zS2hS78N9/view"
              target="_blank"
            >
              <h1 className="document link">CV</h1>
            </a>
          </div>
        </Col>
        <Col>
          <div className="grid-item">
            <a
              href="https://drive.google.com/file/d/18pn0EUPqCRQMetICriN_OdWx6Lhh-8bb/view"
              target="_blank"
            >
              <h1 className="document link">RESUME</h1>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CV;
