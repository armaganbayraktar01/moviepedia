// moviesReducer

import { 
    FETCH_MOVIE_PENDING, FETCH_MOVIE_FULFILLED, FETCH_MOVIE_REJECTED,
    FETCH_DETAIL_MOVIE_PENDING, FETCH_DETAIL_MOVIE_FULFILLED, FETCH_DETAIL_MOVIE_REJECTED,
 } from '../_actions/moviesAction';

const initialState = {
    fetching: false,
    movieList: [],
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
                movieList: action.payload,
                fetching: false
            };

        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        
        // FETCH_DETAIL_MOVIE
        case FETCH_DETAIL_MOVIE_PENDING:
            return {
                ...state,
                selectMovie: {
                    fetching: true,
                    //editButtonActive: true
                }
            };

        case FETCH_DETAIL_MOVIE_FULFILLED:
            return {
                ...state,
                //selectMovie: action.payload
                selectMovie: {
                    ...action.payload,
                    fetching: false,
                    //editButtonActive: true
                }
            };

        case FETCH_DETAIL_MOVIE_REJECTED:
            return {
                ...state,
                selectMovie: {
                    fetching: false
                } 

            };

        default:
            return state;
        }
    }
