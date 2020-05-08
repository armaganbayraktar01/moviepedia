// moviesReducer

import { FETCH_MOVIE_PENDING, FETCH_MOVIE_FULFILLED, FETCH_MOVIE_REJECTED } from '../actions/moviesReducerAction';

const initialState = {
    fetching: false,
    moviesReducerList: [],
    error: {}
}


export default (state = initialState, action) => 
{
    switch (action.type)
    {
        case FETCH_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            };

        case FETCH_MOVIE_FULFILLED:
            return {
                ...state,
                moviesReducerList: action.payload,
                fetching: false
            };

        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false
            };

        default:
            return state;
        }
    }
