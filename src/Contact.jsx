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
                  href="https://github.com/smills-theorem"
                  target="_blank"
                >
                  <Icon name="code-fork" size="2x" className="icon link" />
                </a>
              </div>

              <hr className="bar" />
            </div>
            <iframe
              className="sf-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25227.535543069003!2d-122.40941778357157!3d37.77968145603852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1589764453925!5m2!1sen!2sus"
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;