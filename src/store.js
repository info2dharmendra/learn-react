import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import mainReducer from './reducer';

const configureStore = () =>{
    return createStore(
        mainReducer, 
        {books : [], test : 1}, 
        applyMiddleware(reduxPromise));
};

export default configureStore;