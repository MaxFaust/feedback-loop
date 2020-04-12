import React, { Component } from 'react';
import { connect } from 'react-redux';


class Supported extends Component {
    state = {
        supported: '',
    };

    handleChange = (event) => {
        this.setState({
            supported: event.target.value,
        });
        console.log('Supported input:', event.target.value);
    };

    handleSubmit = (event) => {
        if (this.state.supported === '') {
            alert('Please select a value')
        } else {
            event.preventDefault();
            console.log('Dispatching Supported payload:', this.state.supported);

            // Send Supported input to redux store
            this.props.dispatch({ type: 'SUPPORTED', payload: this.state.supported });
            this.props.history.push('/Comments');
        }
    };

    render() {
        return (
            <div >
                How supported do you feel today? <br />
                <select name='Select Supported' onChange={this.handleChange}>
                    <option value=''>Select</option>
                    <option value='5'>5- Very well supported!</option>
                    <option value='4'>4</option>
                    <option value='3'>3- Meh</option>
                    <option value='2'>2</option>
                    <option value='1'>1- I'm all alone...</option>
                </select>
                <button onClick={this.handleSubmit}>Next</button>
            </div>
        );
    }
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Supported);