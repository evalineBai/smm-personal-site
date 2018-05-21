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
              href="https://drive.google.com/file/d/0B1hwEpLvdn6tZC04VGFMTGl0ZTg/view"
              target="_blank"
            >
              <h1 className="document link">CV</h1>
            </a>
          </div>
        </Col>
        <Col>
          <div className="grid-item">
            <a
              href="https://drive.google.com/file/d/1rxPSCv1Imw87KPFAHULVTDdsUT6iBABu/view"
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
