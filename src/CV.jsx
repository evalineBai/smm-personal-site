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
              href="https://drive.google.com/file/d/1_3bbKx6-zrIiY9r5qS00myNeYlIEPBZO/view?usp=sharing"
              target="_blank"
            >
              <h1 className="document link">ACADEMIC CV</h1>
            </a>
          </div>
        </Col>
        <Col>
          <div className="grid-item">
            <a href="mailto:sean.martin.mills@gmail.com">
              <h1 className="document link">RESUME</h1>
            </a>
            <p className="document-note">(please email me directly for a recent resume)</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CV;
