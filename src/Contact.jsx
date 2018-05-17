import React from 'react';
import { Icon } from 'react-fa';
import './style/contact.css';

const Contact = () => (
  <div className="contact">
    <hr className="bar" />
    <img
      className="col-2-3"
      src="https://c1.staticflickr.com/1/966/26843802667_6736961f93_b.jpg"
    />
    <span className="col-1-3">
      <h2>Contact Me</h2>
      <div>
        <div className="contact-box">
          <a
            href="mailto:sean.martin.mills@gmail.com"
            className="icon"
          >
            <Icon name="envelope" size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/seanmmills/"
            target="_blank"
            className="icon"
          >
            <Icon name="linkedin" size="2x" />
          </a>
          <a
            href="https://github.com/smmills"
            target="_blank"
            className="icon"
          >
            <Icon name="github" size="2x" />
          </a>
        </div>
        <div className="contact-box">
          <h2>CV / Resume</h2>

        </div>
      </div>
    </span>
  </div>
);

export default Contact;