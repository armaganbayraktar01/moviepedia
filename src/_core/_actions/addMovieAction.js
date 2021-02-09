import axios from 'axios';
import { API_BASE } from '../../config/apiBase';

// ADD MOVIE
export const ADD_MOVIE_PENDING = "ADD_MOVIE_PENDING";
export const ADD_MOVIE_FULFILLED = "ADD_MOVIE_FULFILLED";
export const ADD_MOVIE_REJECTED = "ADD_MOVIE_REJECTED";

// UPDATE MOVIE
export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED";


// FETCH_EDIT_MOVIE
export const FETCH_EDIT_MOVIE_PENDING = "FETCH_EDIT_MOVIE_PENDING";
export const FETCH_EDIT_MOVIE_FULFILLED = "FETCH_EDIT_MOVIE_FULFILLED";
export const FETCH_EDIT_MOVIE_REJECTED = "FETCH_EDIT_MOVIE_REJECTED";

/** moviesAction */
export const addMovieAction = {
    onAddMovie,
    onPutMovie,
    fetchEditMovie
};



// ADD MOVIE
function onAddMovie({ 
        title, titleTr, cover, imbd_id, imbd_rating, synopsis, duration, 
        relase_year, genres, director, cast, images, videos//, countries
})
{


    return dispatch => 
    {
        dispatch
        (
            {
                type: "ADD_MOVIE",
                payload: axios.post(`${API_BASE}/movies`,
                {
                    title, titleTr, cover, imbd_id, imbd_rating, synopsis, duration, 
                    relase_year, genres:genres, director:director, cast:cast, images, videos//, countries
                })
                .then(result => result.data)
                //.then(result => console.log(result.data))
            }
        )            
    }
}


// UPDATE MOVIE
function onPutMovie({
     _id, title, titleTr, cover, imbd_id, imbd_rating, synopsis, duration, 
     relase_year, genres, director, cast, images, videos//, countries
})
{


    return dispatch => 
    {
        dispatch
        (
            {
                type: "UPDATE_MOVIE",
                payload: axios.put(`${API_BASE}/movies/${_id}`,
                {
                    title, titleTr, cover, imbd_id, imbd_rating, synopsis, duration, 
                    relase_year, genres:genres, director:director, cast:cast, images, videos//, countries
 
                })

                //.then(result => console.log(result.data))
            }
        )            
    }
}

// FETCH_EDIT_MOVIE
function fetchEditMovie(id)
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "FETCH_EDIT_MOVIE",
                payload: axios.get(`${API_BASE}/movies/${id}`)
                .then( result => result.data)
                //.then( result => console.log(result.data))

            }
        )            
    }
}