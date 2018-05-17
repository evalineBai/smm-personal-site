import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
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
    <Container>
      <Row>
        <Col>
          <div className="press-cards">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://c1.staticflickr.com/1/956/40004310070_900e4c64ce.jpg"
                alt="Astronomers Find a System of Planets"
                className="card-img"
              />
              <CardBody className="card-body">
                <a
                  href="http://www.astronomy.com/news/2016/05/astronomers-find-a-system-of-planets-that-keep-each-other-in-the-tightest-formation-seen"
                  target="_blank"
                >
                  <CardTitle className="card-title">
                    Astronomers find a system of planets that keep each other in
                    the tightest formation seen
                  </CardTitle>
                </a>
                <CardSubtitle>Astronomy Magazine</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div className="press-cards">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://c1.staticflickr.com/1/944/41811542251_16ae16a533_o.png"
                alt="Giant Planet and Wonky Orbits"
                className="card-img"
              />
              <CardBody className="card-body">
                <a
                  href="http://www.skyandtelescope.com/astronomy-news/giant-planets-and-wonky-orbits/"
                  target="_blank"
                >
                  <CardTitle className="card-title">
                    Giant Planets and Wonky Orbits
                  </CardTitle>
                </a>
                <CardSubtitle>Sky & Telescope</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div className="press-cards">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://c1.staticflickr.com/1/963/40913006065_dc6da8d55c.jpg"
                alt="4 Alien Worlds Locked in Dance"
                className="card-img"
              />
              <CardBody className="card-body">
                <a
                  href="https://www.space.com/32860-four-alien-planets-resonance-kepler-223.html"
                  target="_blank"
                >
                  <CardTitle className="card-title">
                    Surprise! 4 Alien Worlds Locked in Fragile Dance for 6 Billion
                    Years
                  </CardTitle>
                </a>
                <CardSubtitle>Space.com</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://c1.staticflickr.com/1/960/41095028114_dd9100938a_z.jpg"
                alt="4-Planet System with Cool Orbital Arrangement"
                className="card-img"
              />
              <CardBody className="card-body">
                <a
                  href="https://gizmodo.com/this-four-planet-system-features-one-of-the-coolest-orb-1776231945"
                  target="_blank"
                >
                  <CardTitle>
                    This Four-Planet System Features One of the Coolest Orbital
                    Arrangements We've Ever Seen
                  </CardTitle>
                </a>
                <CardSubtitle>Gizmodo</CardSubtitle>
              </CardBody>
            </Card>
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
  </div>
);

export default Activity;
