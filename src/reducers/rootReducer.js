import { combineReducers } from 'redux';

/** Reducers */
import moviesReducer from './moviesReducer';
import addMovieReducer from './addMovieReducer';
import personsReducer from './personsReducer';

/** Body */
export default combineReducers({
    moviesReducer,
    addMovieReducer,
    personsReducer
});