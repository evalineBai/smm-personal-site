import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/research.css';

const Research = () => (
  <div className="research">
    <div className="research-summary col-3-5">
      <h2>Overview</h2>
      <hr className="bar" />
      I am primarily a theorist interested in the formation, evolution, and
      diversity of exoplanets. My past work has centered around using data from
      NASA's Kepler space mission to understand the dynamical interactions of
      multiple planet systems.
      <br />
      <br />
      Since coming to Caltech, I have been working on combining the information
      gained about stellar systems from high-resolution spectroscopy and radial
      velocities of their host stars with transit timing data. For these tasks I
      employ custom photo-dynamical models and stability simulations using
      Bayesian methods.
      <br />
      <br />
      <NavLink to="/transit" className="link transit-link">
        Click here for a primer on Exoplanet Transit Dynamics
      </NavLink>
      <br />
      <br />
      Interesting systems I have worked on lately include Kepler-223, a resonant
      chain of planets that is a window to planet formation, and Kepler-453, 
      which is a misaligned circumbinary system that exhibits rapid
      precession resulting in transits disappearing and reappearing.
    </div>
    <div className="publications col-2-5">
      <div className="external-col">
        <h5>External Collections</h5>
        <a
          href="http://adsabs.harvard.edu/cgi-bin/nph-abs_connect?return_req=no_params&author=Mills,%20Sean%20M.&db_key=AST"
          target="_blank"
          className="link"
        >
          Astrophysics Data System
        </a>
        <br />
        <a
          href="https://arxiv.org/find/astro-ph/1/au:+Mills_S/0/1/0/all/0/1"
          target="_blank"
          className="link"
        >
          arXiv Cornell Catalogue
        </a>
      </div>
      <div className="select-pub">
        <h5>Select Publications</h5>
        <a
          href="https://www.nature.com/articles/nature17445"
          target="_blank"
          className="link"
        >
          A Resonant Chain of Four Transiting, sub-Neptune Planets, 2016, Nature
        </a>
        <br />
        <hr />
        <a
          href="http://iopscience.iop.org/article/10.3847/1538-3881/153/1/45/meta"
          target="_blank"
          className="link"
        >
          Kepler-108: A Mutually Inclined Giant Planet System, 2017,
          Astronomical Journal
        </a>
        <br />
        <hr />
        <a
          href="http://iopscience.iop.org/article/10.3847/2041-8213/aa6543/meta"
          target="_blank"
          className="link"
        >
          Mass, Density, and Formation Constraints in the Compact, Sub-Earth
          Kepler-444 System including Two Mars-mass Planets, 2017, Astronomical
          Journal
        </a>
        <br />
        <hr />
        <a
          href="http://iopscience.iop.org/article/10.1088/0004-637X/809/1/26/meta"
          target="_blank"
          className="link"
        >
          Kepler 453 b-THE 10th Kepler Transiting Circumbinary Planet, 2015,
          Astronomical Journal
        </a>
      </div>
    </div>
  </div>
);

export default Research;
