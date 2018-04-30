import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import CV from './CV';
import Research from './Research';
import Contact from './Contact';
import './style/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="app-style">
        <div className="header">
          <h1 className="name">SEAN MARTIN MILLS</h1>
          <h4>Exoplanet Astrophysicist</h4>
        </div>
        <Nav />
        <Route
          exact
          path='/'
          render={() => (
            <Home />
          )}
        />
        <Route
          path='/cv'
          render={() => (
            <CV />
          )}
        />
        <Route
          path='/research'
          render={() => (
            <Research />
          )}
        />
        <Route
          path='/contact'
          render={() => (
            <Contact />
          )}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;
