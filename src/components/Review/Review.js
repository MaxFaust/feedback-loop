import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from "react-router";


class Review extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    // POST feedback information
    axios.post(`/`, this.props.feedbackInputs)
      .then((response) => { console.log('DB response:', response) })
      .catch((error) => { console.log(error) });
  };

  render() {
    return (
      <div>
        <h3>Review feedback</h3>
          Feelings: {this.props.feedbackInputs.feels}              <br />
          Understanding: {this.props.feedbackInputs.understanding}       <br />
          Support: {this.props.feedbackInputs.supported}             <br />
          Comments: <br /> {this.props.feedbackInputs.comments} <br />
        <button onClick={this.handleSubmit}>Submit feedback</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(withRouter(Review));