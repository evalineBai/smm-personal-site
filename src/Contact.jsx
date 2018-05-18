import React from 'react';
import { Icon } from 'react-fa';
import './style/contact.css';
import Rushmore from './media/rushmore.jpg';

const Contact = () => (
  <div className="contact">
    <hr className="bar" />
    <img
      className="col-2-3"
      src={Rushmore}
      alt="Sean at Mt. Rushmore"
    />
    <span className="col-1-3">
      <h2>Contact Me</h2>
      <div className="contact-box">
        <a href="mailto:sean.martin.mills@gmail.com">
          <Icon name="envelope" size="2x" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/seanmmills/"
          target="_blank"
        >
          <Icon name="linkedin" size="2x" className="icon" />
        </a>
        <a
          href="https://github.com/smmills"
          target="_blank"
        >
          <Icon name="github" size="2x" className="icon" />
        </a>
      </div>
    </span>
  </div>
);

export default Contact;