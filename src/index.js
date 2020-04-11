import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Import redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feedbackInputs = (state={comment: ''}, action) => {

    if (action.type === 'FEELS') {
        console.log('Feels:', action.payload);
        return {...state, feeling: action.payload};
    };
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feedbackInputs,
    }),    
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
