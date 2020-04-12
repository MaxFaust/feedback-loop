import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {

handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'RESET'});
    this.props.history.push('/');
};

  render() {
    return (
      <div >
          <div>
          <h1>Thank you for your feedback.</h1>
          <button onClick={this.handleSubmit}>Leave more feedback.</button>
          </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Success);