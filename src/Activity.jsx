import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
  Container,
  Row,
  Col
} from 'reactstrap';
import './style/activity.css';

const Activity = () => (
  <div className="activity">
    <div>
      <h3>Select Press</h3>
    </div>
    <hr className="bar" />
    <Container className="press">
      <Row>
        <Col xs="12" md="6">
          <div className="card-container">
            <img
              src="https://s3-us-west-2.amazonaws.com/www.seanmills.website/smm-media/astronomers-press.png"
              alt="Astronomers Find a System of Planets"
              className="press-image"
            />
            <div className="middle">
              <div>
                <a
                  href="http://www.astronomy.com/news/2016/05/astronomers-find-a-system-of-planets-that-keep-each-other-in-the-tightest-formation-seen"
                  target="_blank"
                  className="card-text"
                >
                  Astronomers find a system of planets that keep each other in
                  the tightest formation seen
                </a>
                <div>Astronomy Magazine</div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="card-container">
            <img
              src="https://s3-us-west-2.amazonaws.com/www.seanmills.website/smm-media/wonky-press.png"
              alt="Giant Planet and Wonky Orbits"
              className="press-image"
            />
            <div className="middle">
              <div>
                <a
                  href="http://www.skyandtelescope.com/astronomy-news/giant-planets-and-wonky-orbits/"
                  target="_blank"
                  className="card-text"
                >
                  Giant Planets and Wonky Orbits
                </a>
                <div>Sky & Telescope</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="6">
          <div className="card-container">
            <img
              src="https://s3-us-west-2.amazonaws.com/www.seanmills.website/smm-media/4worlds-press.jpg"
              alt="4 Alien Worlds Locked in Dance"
              className="press-image"
            />
            <div className="middle">
              <div>
                <a
                  href="https://www.space.com/32860-four-alien-planets-resonance-kepler-223.html"
                  target="_blank"
                  className="card-text"
                >
                  Surprise! 4 Alien Worlds Locked in Fragile Dance for 6 Billion
                  Years
                </a>
                <div>Space.com</div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="card-container">
            <img
              src="https://s3-us-west-2.amazonaws.com/www.seanmills.website/smm-media/gizmodo-press.png"
              alt="4-Planet System with Cool Orbital Arrangement"
              className="press-image"
            />
            <div className="middle">
              <div>
                <a
                  href="https://gizmodo.com/this-four-planet-system-features-one-of-the-coolest-orb-1776231945"
                  target="_blank"
                  className="card-text"
                >
                  This Four-Planet System Features One of the Coolest Orbital
                  Arrangements We've Ever Seen
                </a>
                <div>Gizmodo</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <div>
      <h3>Teaching and Outreach</h3>
    </div>
    <hr className="bar" />
    <div className="teaching">
      <div>
        <h5 className="entry-header">
          University of Chicago Teaching Assistant
        </h5>
        <p className="entry">
          ASTR 282/358 - Extrasolar Planets PHSC
          <br />
          PHSC 11900 - Stellar Astronomy and Astrophysics
          <br />
          PHSC 12000 - The Origin of the Universe and How We Know
          <br />
          NTSC 10200 - Evolution of the Natural World II: Evolution of the
          Universe
        </p>
      </div>
      <div>
        <h5 className="entry-header">Adler Planetarium</h5>
        <p className="entry">
          During my time as a graduate student at UChicago I gave monthy, public
          talks at Chicago's Adler Planetarium. These informal discussions in
          Adler's Space Visualization Laboratory covered wide range of topics
          that were tailored to audiences of all ages and backgrounds. Talks
          were accompanied by concept demos.
        </p>
      </div>
      <div>
        <h5 className="entry-header">Yerkes Institute</h5>
        <p className="entry">
          I had alot of fun designing labs and running science camps for High
          School students at Yerkes Observatory. These week-long overnight camps
          are offered bi-annually (Yerkes Summer and Winter Institutes) and
          allow kids from Chicago's inner city to experience the outdoors at
          UChicago's Yerkes Observatory while learning math and science.
        </p>
      </div>
    </div>
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
        <h3>NASA's Budget</h3>
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
          Only about 1/200th of the US Federal Budget goes towards funding NASA [<a href="https://www.congress.gov/bill/115th-congress/senate-bill/442">Source1</a>, <a href="http://spacenews.com/nasa-receives-20-7-billion-in-omnibus-appropriations-bill/">Source2</a>, <a href="https://www.lpi.usra.edu/exploration/multimedia/NASABudgetHistory.pdf">Source3</a>, <a href="https://en.wikipedia.org/wiki/Budget_of_NASA">Source4</a>].
          That is half of one percent. Surveys dating from the 1990s to 2010s
          suggest the average American believes that roughly 1/4 of the US Federal
          Budget goes towards NASA [<a href="http://www.thespacereview.com/article/898/1">Source5</a>, <a href="http://www.academia.edu/179045/_Public_Opinion_Polls_and_Perceptions_of_US_Human_Spaceflight_">Source6</a>, <a href="http://blogs.discovermagazine.com/badastronomy/2007/11/21/nasas-budget-as-far-as-americans-think/#.VqfUzBGAab0">Source7</a>]. This is an overestimation by a factor of about
          50. In terms of wages, a more readily accessible number to most people,
          it is similar to assuming that you will make over $100,000 per year,
          while your true annual salary is only $2,000 a year. In
          comparison to other federal programs, the entire (inflation-adjusted)
          NASA budget over its whole history since inception (more than 50
          years!), is considerably less than the US federal government spent on
          social programs in year 2017 alone [<a href="https://www.cbo.gov/publication/53624">Source8</a>]. This year (2018), the military's
          budget will exceed NASA's budget by more than half a trillion dollars
          (five times more than the <a href="https://news.nationalgeographic.com/news/2014/04/140422-mars-mission-manned-cost-science-space/">estimated cost to get humans to Mars</a>) [<a href="https://www.nytimes.com/interactive/2017/03/15/us/politics/trump-budget-proposal.html">Source9</a>].
        </p>
      </div>
    </div>
  </div>
);

export default Activity;
