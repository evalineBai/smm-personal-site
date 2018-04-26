// Links: Email, LinkedIn, Github, Work Information
// Photo: Mount Rushmore

import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/contact.css';

const Contact = () => (
  <div className="contact">
    <hr className="bar"/>
    <img
      className="col-2-3"
      src="https://c1.staticflickr.com/1/966/26843802667_6736961f93_b.jpg"
    />
    <span className="col-1-3">
      <h2>Contact Me</h2>
    </span>
  </div>
);

export default Contact;