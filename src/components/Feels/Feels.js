import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feels extends Component {
    state = {
        feels: '',
    };

    handleChange = (event) => {
        this.setState({
            feels: event.target.value,
        });
        console.log('Feels input:', event.target.value);
    };

    handleSubmit = (event) => {
        if (this.state.feels === '') {
            alert('How are you really feeling?')
        } else {
            event.preventDefault();
            console.log('Dispatching feels payload:', this.state.feels);

            // Send feels input to redux store
            this.props.dispatch({ type: 'FEELS', payload: this.state.feels })
        }
    };

    render() {
        return (
            <div >
                How are you Feeling? <br />
                <select name='Select feelings' onChange={this.handleChange}>
                    <option value=''>Select</option>
                    <option value='5'>5- Great!</option>
                    <option value='4'>4</option>
                    <option value='3'>3- Average</option>
                    <option value='2'>2</option>
                    <option value='1'>1- Not good</option>
                </select>
                <button onClick={this.handleSubmit}>Next</button>
            </div>
        );
    }
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Feels);