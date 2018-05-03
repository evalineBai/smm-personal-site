import React from 'react';
import './style/musings.css';

const Musings = () => (
  <div className="musings">
    <div>
      <h3>Community Astronomy Projects</h3>
    </div>
    <hr className="bar" />
    <div className="blog-entry">
      <p>
        Want to get involved in cool astronomy projects without the headache of
        grad school? You're in luck! There are many publicly accessible citizen
        science projects which anyone with spare time and a computer can work
        on. One of my favorites is <a href="https://www.planethunters.org/">Planet Hunters</a>. Awesome groups of amateur scientists have even discovered planets missed by the Kepler Science Team and generated <a href="https://arxiv.org/abs/1512.02559">scientific papers</a>. Check out <a href="https://www.zooniverse.org/">Zooniverse</a> for a full list of cool community science projects.
      </p>
    </div>
    <div>
      <h3>Nasa's Budget</h3>
    </div>
    <hr className="bar" />
    <div className="blog-entry">
      <p>
        Although NASA is widely supported by the US public, a major concern for
        Americans is the cost that NASA has on taxpayers. Dispelling myths on
        its cost is vital to its long term success and the funding of space
        science including Astronomy.
      </p>
      <p>
        Only about 1/200th of the US Federal Budget goes towards funding NASA.
        That is half of one percent. Surveys dating from the 1990s to 2010s
        suggest the average American believes that roughly 1/4 of the US Federal
        Budget goes towards NASA. This is an overestimation by a factor of about
        50. In terms of wages, a more readily accessible number to most people,
        it is similar to assuming that you will make over $100,000 per year,
        while your true annual salary is actually only $2,000 a year. In
        comparison to other federal programs, the entire (inflation-adjusted)
        NASA budget over its whole history since inception (more than 50
        years!), is considerably less than the US federal government spent on
        social programs in year 2015 alone. This year (2016), the military's
        budget will exceed NASA's budget by more than half a trillion dollars
        (five times more than the estimated cost to get humans to Mars).
      </p>
    </div>
  </div>
);

export default Musings;
