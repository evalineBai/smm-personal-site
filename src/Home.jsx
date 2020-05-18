import React from 'react';
import './style/home.css';

const Home = () => (
  <div className="about-border">
    <img
      src="https://s3-us-west-2.amazonaws.com/www.seanmills.website/smm-media/sean-mills.jpg"
      alt="Sean in Nature"
      className="image-home"
    />
    <div className="about">
      Hello, I'm Sean. My goal is to apply scientific rigor to financial ML models.
      <br />
      <br />
      Prior to becoming a machine learning researcher in credit-modeling, I was a post-doctoral scholar 
      at The California Institute of Technology in Pasadena, CA. I did my PhD in Astrophysics
      at The University of Chicago, advised by Professor Dan Fabrycky, and Bachelor's in
      Physics and English from Caltech.
      <br />
      <br />
      Outside of work, you may find me playing ultimate frisbee, traveling,
      or exploring restaurants in San Francisco with my fiancée.
    </div>
  </div>
);

export default Home;
