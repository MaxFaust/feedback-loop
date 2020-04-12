import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Component imports
import Home from '../Home/Home';
import Feels from '../Feels/Feels';
import Understanding from '../Understanding/Understanding'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <Router>
          <div className="feedback-forms">
            <Route exact path='/' component={Home} />
            <Route path='/Feels' component={Feels} />
            <Route path='/Understanding' component={Understanding} />
          </div>
        </Router>

      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);