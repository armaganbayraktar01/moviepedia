import { combineReducers } from 'redux';

/** Reducers */
//import authReducer from './authReducer';
import moviesReducer from './moviesReducer';
import addMovieReducer from './addMovieReducer';
import personsReducer from './personsReducer';
import addPersonReducer from './addPersonReducer';


/** Body */
export default combineReducers({
    //authReducer,
    moviesReducer,
    addMovieReducer,
    personsReducer,
    addPersonReducer
});