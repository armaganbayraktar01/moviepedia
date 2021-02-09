// moviesReducer

import { 
    ADD_MOVIE_PENDING, ADD_MOVIE_FULFILLED, ADD_MOVIE_REJECTED, 
    UPDATE_MOVIE_PENDING, UPDATE_MOVIE_FULFILLED, UPDATE_MOVIE_REJECTED, 
    FETCH_EDIT_MOVIE_PENDING, FETCH_EDIT_MOVIE_FULFILLED, FETCH_EDIT_MOVIE_REJECTED
} from '../_actions/addMovieAction';


const initialState = {
    fetching: false,
    done: false,
    error: {},
    editButtonActive: false,
    selectMovie: {
        fetching : false,
        editButtonActive: false
    }
}

export default (state = initialState, action) => 
{
    switch (action.type)
    {
        // ADD_MOVIE
        case ADD_MOVIE_PENDING:
            return {
                ...state,
                fetching: true,

            };

        case ADD_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            };

        case ADD_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };

        // UPDATE_MOVIE
        case UPDATE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true,

            };

        case UPDATE_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            };

        case UPDATE_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        
        // FETCH_EDIT_MOVIE
        case FETCH_EDIT_MOVIE_PENDING:
            return {
                ...state,
                selectMovie: {
                    fetching: true,
                    //editButtonActive: false
                }
            };

        case FETCH_EDIT_MOVIE_FULFILLED:
            return {
                ...state,                
                selectMovie: {
                    ...action.payload,
                    fetching: false,
                    //editButtonActive: true
                }
            };

        case FETCH_EDIT_MOVIE_REJECTED:
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
 