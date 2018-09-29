import React from 'react';
import { Icon } from 'react-fa';
import { Container, Row, Col } from 'reactstrap';
import './style/contact.css';

const Contact = () => (
  <div className="contact">
    <Container>
      <Row>
        <Col xs="12" md="6">
          <img
            src="https://s3-us-west-2.amazonaws.com/www.seanmills.website/smm-media/rushmore.jpg"
            alt="Sean at Mt. Rushmore"
            className="rushmore"
          />
        </Col>
        <Col xs="12" md="6">
          <div className="contact-box">
            <div>
              <span className="title">Contact Me</span>
              <div className="icon-box">
                <a href="mailto:sean.martin.mills@gmail.com">
                  <Icon name="envelope-o" size="2x" className="icon link" />
                </a>
                <a
                  href="https://www.linkedin.com/in/seanmmills/"
                  target="_blank"
                >
                  <Icon name="linkedin-square" size="2x" className="icon link" />
                </a>
                <a
                  href="https://github.com/smmills"
                  target="_blank"
                >
                  <Icon name="code-fork" size="2x" className="icon link" />
                </a>
              </div>

              <hr className="bar" />
            </div>
            <div className="address-box">
              <h5 className="address">Cahill Center for Astronomy and Astrophysics:</h5>
              <p>1216 E California Blvd, Pasadena, CA 91125</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;