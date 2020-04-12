import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {
    state = {
        comments: '',
    };

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
        console.log('Comments input:', event.target.value);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dispatching comments payload:', this.state.comments);

        // Send Comments input to redux store
        this.props.dispatch({ type: 'COMMENTS', payload: this.state.comments });
        this.props.history.push('/Review');
    };


    handleBack = (event) => {
        this.props.history.push('/Supported');
    };

    render() {
        return (
            <div >
                Comments. <br />
                <textarea rows='4' columns='100' placeholder='Leave a comment...' onChange={this.handleChange}></textarea>
                <button onClick={this.handleSubmit}>Next</button>
                <button onClick={this.handleBack}>Back</button>
            </div>
        );
    }
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Comments);