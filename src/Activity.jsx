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
import GizmodoImage from './media/gizmodo-press.png';
import FourWorlds from './media/4worlds-press.jpg';
import Wonky from './media/wonky-press.png';
import Astronomers from './media/astronomers-press.png';

const Activity = () => (
  <div className="activity">
    <div>
      <h3>Select Press</h3>
    </div>
    <hr className="bar" />
    <Container className="press">
      <Row>
        <Col>
          <div className="card-container">
            <img
              src={Astronomers}
              alt="Astronomers Find a System of Planets"
              className="press-image"
            />
            <div className="middle">
              <div className="cardText">
                <a
                  href="http://www.astronomy.com/news/2016/05/astronomers-find-a-system-of-planets-that-keep-each-other-in-the-tightest-formation-seen"
                  target="_blank"
                >
                  Astronomers find a system of planets that keep each other in
                  the tightest formation seen
                </a>
                <div>Astronomy Magazine</div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card-container">
            <img
              src={Wonky}
              alt="Giant Planet and Wonky Orbits"
              className="press-image"
            />
            <div className="middle">
              <div className="cardText">
                <a
                  href="http://www.skyandtelescope.com/astronomy-news/giant-planets-and-wonky-orbits/"
                  target="_blank"
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
        <Col>
          <div className="card-container">
            <img
              src={FourWorlds}
              alt="4 Alien Worlds Locked in Dance"
              className="press-image"
            />
            <div className="middle">
              <div className="cardText">
                <a
                  href="https://www.space.com/32860-four-alien-planets-resonance-kepler-223.html"
                  target="_blank"
                >
                  Surprise! 4 Alien Worlds Locked in Fragile Dance for 6 Billion
                  Years
                </a>
                <div>Space.com</div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card-container">
            <img
              src={GizmodoImage}
              alt="4-Planet System with Cool Orbital Arrangement"
              className="press-image"
            />
            <div className="middle">
              <div className="cardText">
                <a
                  href="https://gizmodo.com/this-four-planet-system-features-one-of-the-coolest-orb-1776231945"
                  target="_blank"
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
  </div>
);

export default Activity;
