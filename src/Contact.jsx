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
            className="contact-icon"
          >
            <Icon name="envelope" size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/seanmmills/"
            target="_blank"
            className="contact-icon"
          >
            <Icon name="linkedin" size="3x" />
          </a>
          <a
            href="https://github.com/smmills"
            target="_blank"
            className="contact-icon"
          >
            <Icon name="github" size="3x" />
          </a>
        </div>
        <div className="rushmore">
          Left: Enjoying the Mount Rushmore stop of a recent cross-country
          road trip, during which I visited five national parks
        </div>
      </div>
    </span>
  </div>
);

export default Contact;