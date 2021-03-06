import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Research from './Research';
import Transit from './Transit';
import Activity from './Activity';
import CV from './CV';
import Contact from './Contact';
import './style/app.css';
class App extends React.Component {

  render() {
    return (
      <div className="app-style">
        <div className="header">
          <h1 className="name">SEAN MARTIN MILLS</h1>
          <h4>ML Researcher | Astrophysicist</h4>
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
          path='/research'
          render={() => (
            <Research />
          )}
        />
        <Route
          exact
          path='/transit'
          render={() => (
            <Transit />
          )}
        />
        <Route
          path='/activities'
          render={() => (
            <Activity />
          )}
        />
        <Route
          path='/cv'
          render={() => (
            <CV />
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
