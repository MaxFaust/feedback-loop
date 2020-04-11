import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {

onClick =(event) => {
    console.log('Home- onClick');
};

  render() {
    return (
      <>
          <br/>
          <button onClick={this.onClick}>Leave Feedback</button>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Home);