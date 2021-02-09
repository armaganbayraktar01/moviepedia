import { combineReducers } from 'redux';

/** Reducers */
import { alert } from './alertReducer';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import moviesReducer from './moviesReducer';
import personsReducer from './personsReducer';
import addMovieReducer from './addMovieReducer';
import addPersonReducer from './addPersonReducer';


/** Body */
export default combineReducers({
    alert,
    authReducer,
    registerReducer,
    moviesReducer,
    personsReducer,
    addMovieReducer,
    addPersonReducer
});