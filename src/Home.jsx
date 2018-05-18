import React from 'react';
import './style/home.css';
import Sean from './media/sean-mills.jpg';

const Home = () => (
  <div className="about-border">
    <img
      src={Sean}
      alt="Sean in Nature"
      className="image-home"
    />
    <div className="about">
      Hello, I'm Sean. My goal is understanding exoplanet dynamics and evolution through
      computational modeling.
      <br />
      <br />
      I'm a post-doctoral researcher at The California Institute of
      Technology in Pasadena, CA. I did my PhD in Astrophysics at The
      University of Chicago, advised by Professor Dan Fabrycky, and
      Bachelor's in Physics and English from Caltech.
      <br />
      <br />
      Outside of work, you may find me playing ultimate frisbee, traveling,
      or exploring restaurants in Los Angeles with my girlfriend.
    </div>
  </div>
);

export default Home;
