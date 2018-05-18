import React from 'react';
import './style/transit.css';
import TransitMovTable from './media/TransitMovTable_wm.gif';

const Transit = () => (
  <div className="transit">
    <h2>Exoplanet Transit Overview</h2>
    <hr className="bar" />
    <p>
      Exoplanets (planets around stars other than the sun) are so far away that
      we can only in very rare cases get a <a href="https://www.nature.com/articles/nature09684" target="_blank">direct photograph</a> of the planets
      themselves. Therefore, astronomers primarily detect planets by measuring
      their influence on the stars around which the planets orbit. This is
      because stars are much larger and brighter than planets and thus easier to
      carefully measure. The two most common such methods make use of radial
      velocities of the stars (about which I won't go into in detail) and
      photometry of the stars, my favorite method which I will explain below.
    </p>
    <h4>Exoplanet Transits</h4>
    <p>
      Planets orbit their stars on ellipses (the most common of which is a
      circle), due to the Newtonian gravitational pull of their stars. Depending
      on the orientation of a planet's orbit, it may pass between its host star
      and a far away observer on Earth as it orbits. When it does so, it will
      block some of the star's light, a phenomenon known as a planet "transit."
      The amount of light blocked tells you the size of the planet relative to
      the star. Below is a demonstration of a transit and (noiseless) lightcurve
      of a Jupiter-like planet on a 20 day orbit around a sun-like star with
      realistic limb-darkening.
    </p>
    <img src={TransitMovTable} alt="Transit" />
    <p>
      This will happen regularly as the planet continues its orbit around and around the star, where the transit light curve on the bottom is from the perspective of an observer whose line of sight is indicated by the gray arrow:
    </p>

  </div>
);

export default Transit;
