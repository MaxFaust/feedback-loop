import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    // POST feedback information
    axios.post(`/`, this.props.feedbackInputs)
      .then((response) => { 
        console.log('DB response:', response) 
        this.props.history.push('/Success')})
      .catch((error) => { console.log(error) });
  };

  handleBack = (event) => {
    this.props.history.push('/Comments');
};

  render() {
    return (
      <div>
        <h3>Review feedback</h3>
          Feelings: {this.props.feedbackInputs.feels} <br />
          Understanding: {this.props.feedbackInputs.understanding}<br />
          Support: {this.props.feedbackInputs.supported}<br />
          Comments:{this.props.feedbackInputs.comments} <br />
        <button onClick={this.handleSubmit}>Submit feedback</button>
        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps) (Review);