import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// Import redux, provider, and logger
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackInputs = (state = { comment: '' }, action) => {

    if (action.type === 'FEELS') {
        console.log('Feels payload recieved:', action.payload);
        return { ...state, feels: action.payload };
    };
    if (action.type === 'UNDERSTANDING') {
        console.log('Understanding payload recieved:', action.payload);
        return { ...state, understanding: action.payload };
    };
    if (action.type === 'SUPPORTED') {
        console.log('Supported payload recieved:', action.payload);
        return { ...state, supported: action.payload };
    };
    if (action.type === 'COMMENTS') {
        console.log('Supported payload recieved:', action.payload);
        return { ...state, comments: action.payload };
    };
    if(action.type === 'RESET') {
        console.log('Reset state')
        return state;
    }
    return state;
};



const storeInstance = createStore(
    combineReducers({
        feedbackInputs,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
