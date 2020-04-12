import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {

onClick =(event) => {
    event.preventDefault();
    console.log('Home- onClick');
    this.props.history.push('/Feels');
};

  render() {
    return (
      <>
          <button onClick={this.onClick}>Leave Feedback</button>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Home);