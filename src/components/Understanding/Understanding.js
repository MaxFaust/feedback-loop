import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {
    state = {
        understanding: '',
    };

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
        });
        console.log('Understanding input:', event.target.value);
    };

    handleSubmit = (event) => {
        if (this.state.understanding === '') {
            alert('Please let us know how well you understood today\'s material')
        } else {
            event.preventDefault();
            console.log('Dispatching understanding payload:', this.state.understanding);

            // Send understanding input to redux store
            this.props.dispatch({ type: 'UNDERSTANDING', payload: this.state.understanding });
            this.props.history.push('/Supported');
        }
    };

    render() {
        return (
            <div >
                How well did you understand today's material? <br />
                <select name='Select understanding' onChange={this.handleChange}>
                    <option value=''>Select</option>
                    <option value='5'>5- I could teach it!</option>
                    <option value='4'>4</option>
                    <option value='3'>3- I get it</option>
                    <option value='2'>2</option>
                    <option value='1'>1- What?</option>
                </select>
                <button onClick={this.handleSubmit}>Next</button>
            </div>
        );
    }
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Understanding);