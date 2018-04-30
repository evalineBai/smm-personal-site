import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/nav.css';

const Nav = () => (
  <div className="nav-component">
    <ul className="nav-bar">
      <li className="nav-element">
        <NavLink
          exact={true}
          to="/"
          className="link"
          activeClassName="selected"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-element">
        <NavLink
          exact={true}
          to="/research"
          className="link"
          activeClassName="selected"
        >
          Research
        </NavLink>
      </li>
      <li className="nav-element">
        <NavLink
          exact={true}
          to="/activities"
          className="link"
          activeClassName="selected"
        >
          Activities
        </NavLink>
      </li>
      <li className="nav-element">
        <NavLink
          exact={true}
          to="/cv"
          className="link"
          activeClassName="selected"
        >
          CV / Resume
        </NavLink>
      </li>
      <li className="nav-element">
        <NavLink
          exact={true}
          to="/contact"
          className="link"
          activeClassName="selected"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;