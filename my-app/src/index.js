import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { memeReducer } from './reducers/memeReducer';

const store = createStore(memeReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


